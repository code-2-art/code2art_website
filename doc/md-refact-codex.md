# 迁移到单一内容源：多来源 Markdown -> Astro（飞书可选抓取）

## 摘要
将当前 `飞书 -> posts.json/activities.json -> Astro` 改为单一链路 `多来源内容 -> 本地 Markdown(src/content/**) -> Astro`，让网站只渲染本地 Markdown，彻底消除 `feeds JSON` 与 `md` 不一致问题。
同时满足你的约束：本地 md 是长期知识库，拥有绝对的数据主权；md 可来自本地写作、迁移导入、飞书抓取等多种来源。飞书是可选输入端，而非唯一依赖。

## 目标与成功标准
- 网站页面（首页/博客/活动/详情）仅从 `src/content/**/*.md` 读取内容。
- 每次同步后，新增与变更文章正确落盘为 md。
- 本地手改 md 不被自动覆盖；冲突可见且可处理。
- 一次性切换完成后，不再依赖 `public/feeds/posts.json` 与 `public/feeds/activities.json` 参与渲染。

## 关键决策（已锁定）
- md 是唯一的 Truth Source，完全支持纯本地创建和手改，且允许多来源写入本地。
- 站内列表链接优先站内详情页。
- 迁移采用一次性切换。
- 冲突策略：本地优先，检测到本地改动则跳过覆盖并输出冲突清单。

## 目录与接口设计
- 内容目录：
  - `src/content/posts/*.md`
  - `src/content/activities/*.md`
- 同步状态目录：
  - `.sync-state/posts.json`
  - `.sync-state/activities.json`
- 冲突报告：
  - `.sync-state/conflicts.json`
- Astro 内容集合定义（新增）：
  - `src/content.config.ts`
  - `posts` 与 `activities` 两个集合，统一 schema

## Markdown 文件规范
每篇文件命名：`<slug>.md`，缺失时回退 `record_id`。  
frontmatter 统一字段：
- `id`
- `slug`
- `title`
- `summary`
- `tags`
- `author`
- `authorAvatarUrl`
- `coverUrl`
- `publishedAt`
- `docUrl`
- `sourceUpdatedAt`（飞书记录更新时间，若可取）
- `syncedAt`
- `sourceType`（`post` 或 `activity`）

正文：
- 由飞书 HTML 转换为 Markdown 写入正文体。
- 空正文时保留占位文本并在同步日志告警。

## 同步算法（支持“本地可改”）
1. 读取飞书记录并标准化为内部对象（post/activity）。
2. 生成候选 md（frontmatter + markdown body）。
3. 读取目标 md 当前内容并计算指纹：
- `lastSyncedHash`（来自 `.sync-state`）
- `currentFileHash`（当前本地文件）
- `incomingHash`（本次飞书生成）
4. 判定逻辑：
- 文件不存在：直接创建。
- `currentFileHash == lastSyncedHash`：说明未本地改动，可安全覆盖为 `incomingHash`。
- `currentFileHash != lastSyncedHash` 且 `incomingHash != lastSyncedHash`：冲突。这说明本地被你改过，同时飞书上也有其他人改了。策略：优先保护本地，跳过覆盖，并记录 `conflicts.json`。
- `currentFileHash != lastSyncedHash` 且 `incomingHash == lastSyncedHash`：仅本地有改动。飞书没变。策略：保持本地不动。
- 完全没有对应的飞书记录，但本地有该 md：说明这是你纯本地创作的文章。策略：完全不管它，Astro 原生支持渲染。
5. 同步结束后更新 `.sync-state/*`（仅对成功写入项更新）。
6. 对飞书已删除但本地存在的文章：默认不删，仅标记 orphan 到状态文件。

## 代码改造范围
1. 新增脚本：
- `scripts/sync-feishu-to-md.js`（主同步）
- `scripts/lib/html-to-md.js`（转换规则）
- `scripts/lib/md-hash.js`（状态/冲突计算）

2. 新增依赖（脚本层）：
- `turndown`（HTML->Markdown）
- 可选 `turndown-plugin-gfm`（表格、删除线等）

3. Astro 渲染层替换：
- `src/lib/feishu.ts` / `src/lib/feishuActivities.ts` 从“拉取飞书/读feeds”改为“读 content collections”
- 页面改造：
  - `src/pages/index.astro`
  - `src/pages/blog/index.astro`
  - `src/pages/blog/[slug].astro`
  - `src/pages/activities/index.astro`
  - `src/pages/activities/[slug].astro`
- 全部改为 `getCollection('posts')` / `getCollection('activities')` 与 `render(entry)`。

4. 废弃路径（一次性切换后）：
- 渲染链路不再使用 `readFeedJson('posts.json'|'activities.json')`。
- `USE_FEEDS` 从页面渲染语义中移除（保留环境变量不影响运行）。

## 命令与流程
`package.json` 增加/调整：
- `sync:md`: 运行 `scripts/sync-feishu-to-md.js`
- `build`: 前置 `sync:md` 后再 `astro build`
- 可选 `sync:md:dry`: 仅输出将变更和冲突，不写文件

日常流程：
1. 创作方式 A（本地）：直接在 `src/content/**` 下写作或导入 Markdown。
2. 创作方式 B（飞书）：在飞书协作编辑后，执行 `npm run sync:md` 抓取到本地 Markdown。
3. 处理冲突清单（如有）。
4. `npm run build` 并发布。

## 测试与验收场景
- 首次全量同步：全部生成 md，前台可渲染。
- 增量同步：飞书更新后对应 md 更新。
- 本地修改保护：手改后再次同步不被覆盖。
- 双边冲突：飞书与本地同时改动时进入 `conflicts.json`。
- 路由稳定：`/blog/[slug]`、`/activities/[slug]` 均可访问。
- 内容一致：首页/列表/详情来自同一 md 数据源。
- 删除容错：飞书删文不自动删本地文件，状态可追踪。

## 默认假设
- 文章 slug 全局唯一；若重复以 `record_id` 后缀兜底。
- 飞书正文优先来自 `contentHtml`；doc/docx 仍通过现有提取逻辑补充。
- 本地 md 是可长期保留的知识库的绝对真档；网站只渲染本地 md。
- 飞书抓取脚本长期保留，作为“把飞书文档同步到本地 md”的可选导入能力。

# 迁移计划（最优合并版）：多来源 Markdown -> Astro（飞书可选抓取）

## 摘要
将现有 `飞书 -> posts.json/activities.json -> Astro` 重构为单一链路 `多来源内容 -> src/content/*.md -> Astro Content Collections`。

核心目标：
- 网站渲染只读本地 Markdown（消除 JSON 与 md 不一致）
- 本地 Markdown 成为长期可控知识库
- 允许本地手工编辑且不被同步脚本误覆盖

---

## 最终架构

```text
本地写作 / 历史迁移 / 飞书抓取
    ↓ (统一落盘到 src/content/**)
src/content/posts/*.md
src/content/activities/*.md
    ↓ (Astro Content Collections)
列表页 + 详情页静态站点
```

同步状态与冲突记录：
- `.sync-state/posts.json`
- `.sync-state/activities.json`
- `.sync-state/conflicts.json`

---

## 关键决策（锁定）
- 单一渲染数据源：`src/content/**`（不再用 feeds JSON 渲染页面）
- 本地 md 允许手改并保留
- md 可来自多来源（本地创作、批量导入、飞书抓取）
- 冲突策略：本地优先（检测冲突时跳过覆盖并记录）
- 一次性切换渲染链路（保留飞书抓取脚本长期可用，但不用于页面直接渲染）
- 站内列表链接优先站内详情页

---

## 目录与接口规范

### 内容目录
- `src/content/posts/*.md`
- `src/content/activities/*.md`

### 内容集合配置
新增 `src/content.config.ts`：
- `posts` collection
- `activities` collection
- schema 字段至少包括：
  - `id`
  - `slug`
  - `title`
  - `summary?`
  - `coverUrl?`
  - `tags?`
  - `author?`
  - `authorAvatarUrl?`
  - `publishedAt?`（活动可同时兼容 `date?`）
  - `docUrl?`
  - `sourceUpdatedAt?`
  - `syncedAt`
  - `sourceType`

### Markdown 文件结构
- 文件名：`<slug>.md`；无 slug 时用 `record_id`；slug 冲突追加后缀
- frontmatter：统一元数据（见上）
- 正文：飞书 HTML 转换后的 Markdown

---

## 同步算法（支持本地可改）

在 `scripts/sync-feishu-to-md.js` 中实现三哈希判定：
- `lastSyncedHash`：上次同步写入状态（`.sync-state/*.json`）
- `currentFileHash`：当前本地 md 文件哈希
- `incomingHash`：本次从飞书转换后的候选 md 哈希

判定规则：
1. 文件不存在：创建新文件
2. `currentFileHash == lastSyncedHash`：可安全覆盖为 `incomingHash`
3. `currentFileHash != lastSyncedHash && incomingHash == lastSyncedHash`：仅本地改动，保留本地
4. `currentFileHash != lastSyncedHash && incomingHash != lastSyncedHash`：双边改动冲突，跳过覆盖并写入 `conflicts.json`

删除策略：
- 飞书删除记录时默认不删本地文件
- 在状态中标记 `orphaned`
- 后续可加 `--prune` 显式清理

---

## 实施步骤

### 1. 依赖与基础设施
- 安装 `turndown`（可选 `turndown-plugin-gfm`）
- 新增 `src/content.config.ts`
- 建立 `src/content/posts`、`src/content/activities` 目录

### 2. 同步脚本
新增：
- `scripts/sync-feishu-to-md.js`（主入口）
- `scripts/lib/html-to-md.js`（HTML->MD + 规则）
- `scripts/lib/md-hash.js`（哈希、状态、冲突工具）

脚本职责：
- 拉取 posts/activities
- 标准化字段
- 转 markdown
- 按三哈希规则写入
- 输出汇总：`created/updated/skipped/conflicts/orphaned`

### 3. 页面与数据层迁移
替换以下页面的数据获取方式为 `getCollection` + `render`：
- `src/pages/index.astro`
- `src/pages/blog/index.astro`
- `src/pages/blog/[slug].astro`
- `src/pages/activities/index.astro`
- `src/pages/activities/[slug].astro`

替换要点：
- `post.title` -> `post.data.title`
- `set:html={...}` -> `const { Content } = await render(entry)` + `<Content />`
- 列表与详情统一由 content collections 提供数据

### 4. 旧路径下线策略
- 第一阶段：保留 `scripts/feishu-fetch.js`、`scripts/fetch-activities.js`（仅兜底，不参与渲染）
- 第二阶段（稳定后）：删除/归档以下渲染旧路径
  - `src/lib/feishu.ts`
  - `src/lib/feishuActivities.ts`
  - `src/lib/feishuBase.ts`
  - `public/feeds/posts.json`
  - `public/feeds/activities.json`

---

## 命令与发布流程

`package.json` 增加：
- `sync:md`: 执行 `scripts/sync-feishu-to-md.js`
- `sync:md:dry`: 仅预览变更与冲突，不写文件
- `build`: 前置执行 `sync:md` 再 `astro build`

发布流程：
1. 飞书编辑完成
2. `npm run sync:md`
3. 如有冲突，查看 `.sync-state/conflicts.json` 并人工处理
4. `npm run build` 并发布

---

## 验收标准
1. 首次同步能生成完整 `src/content/posts/*.md` 与 `src/content/activities/*.md`
2. 首页、列表页、详情页均只依赖 content collections 渲染
3. 本地手改后再次同步不会被误覆盖
4. 飞书与本地双边改动会进入冲突清单
5. 构建成功（`npm run build`）且路由可访问
6. 不再出现 `posts.json` 与 md 内容分叉导致的线上不一致

---

## 风险与控制
- 风险：HTML->MD 转换丢失部分复杂样式
  - 控制：在 `html-to-md` 中增加自定义规则（代码块、表格、图片）
- 风险：slug 冲突导致覆盖
  - 控制：写入前做唯一性校验并自动后缀兜底
- 风险：本地手改长期偏离飞书
  - 控制：冲突清单可视化 + 定期人工合并策略

---

## 后续增强（不纳入第一阶段）
- `scripts/import-to-feishu.js`（md 反向导入飞书）
- `sync:md --prune` 真删除模式
- 同步结果通知（CI 日志/消息推送）

# Project Analysis (Codex Revised): 实验编程官网

> 本文是对 `doc/project_readme.md` 的校对与补充版。  
> 分析范围：`code2art_website` 当前仓库代码，不修改任何源文件，只输出文档。

## 1. 项目定位与总体架构

这是一个 **Astro 5 + TailwindCSS** 的内容型静态站点，构建产物为纯静态文件（`output: 'static'`）。  
关键配置见 `astro.config.mjs:4`、`astro.config.mjs:7`。

核心思路不是“前台直连数据库”，而是两种可切换的数据来源：

1. 在线模式（默认）  
   页面构建时直接调用飞书 API 拉取数据。见 `src/lib/feishu.ts:139`、`src/lib/feishuActivities.ts:130`。
2. Feed 模式（离线/快照）  
   通过 `USE_FEEDS=1` 改为读取 `public/feeds/*.json`。见 `src/lib/feishu.ts:3`、`src/lib/feishu.ts:140`、`src/lib/feishuActivities.ts:19`、`src/lib/feishuActivities.ts:131`。

结论：原文“`astro build` 读取本地 JSON”不完全准确；只有开启 `USE_FEEDS=1` 才是本地 JSON 路径。

## 2. 技术栈与工程结构

### 2.1 依赖与脚本

- 框架：`astro@^5.13.10`（`package.json:16`）
- 样式：`tailwindcss@^3.4.17`（`package.json:25`）
- 关键脚本：
  - `npm run fetch:posts` -> `scripts/feishu-fetch.js`（`package.json:10`）
  - `npm run fetch:activities` -> `scripts/fetch-activities.js`（`package.json:11`）
  - `npm run assets:posts` / `assets:activities` -> `scripts/feishu-assets.js`（`package.json:12`、`package.json:13`）

补充：`dependencies` 中存在拼写项 `dotevn`（`package.json:18`），看起来是 `dotenv` 的误拼副产物。

### 2.2 目录功能

- `src/pages/`：路由页面
- `src/lib/`：飞书数据访问与映射
- `scripts/`：飞书拉取与资源本地化脚本
- `public/feeds/`：文章/活动快照 JSON
- `public/uploads/`：本地化资源目录
- `doc/`：项目说明文档

## 3. 页面与路由

### 3.1 路由清单

- 首页：`/` -> `src/pages/index.astro`
- 博客列表：`/blog/` -> `src/pages/blog/index.astro`
- 博客详情：`/blog/[slug]` -> `src/pages/blog/[slug].astro`
- 活动列表：`/activities` -> `src/pages/activities/index.astro`
- 活动详情：`/activities/[slug]` -> `src/pages/activities/[slug].astro`
- 健康检查：`/api/health.json` -> `src/pages/api/health.json.ts`

### 3.2 内容渲染行为

- 首页展示“活动 + 博客”各 3 条（`src/pages/index.astro:11`、`src/pages/index.astro:16`）。
- 首页活动/博客卡片标题链接当前指向外部 `docUrl`（`src/pages/index.astro:198`、`src/pages/index.astro:210`、`src/pages/index.astro:247`、`src/pages/index.astro:266`）。
- 博客列表页和详情页是站内详情路由（`src/pages/blog/index.astro:15`、`src/pages/blog/[slug].astro:5`）。
- 活动列表页和详情页也有站内路由（`src/pages/activities/index.astro:41`、`src/pages/activities/[slug].astro:5`），与首页外链策略并存。

## 4. 数据模型与 ETL

### 4.1 文章模型

文章模型核心字段：`slug/title/summary/contentHtml/coverUrl/tags/author/publishedAt/docUrl`（`src/lib/feishu.ts:13`-`src/lib/feishu.ts:25`）。

抓取流程：

1. 从飞书 Bitable 拉取记录（`scripts/feishu-fetch.js:34`）
2. 尝试从飞书 doc 链接补正文 HTML（仅 doc，docx 仅告警）（`scripts/feishu-fetch.js:75`-`scripts/feishu-fetch.js:97`）
3. 可选下载封面/头像/正文内图到本地（`scripts/feishu-fetch.js:99`-`scripts/feishu-fetch.js:132`、`scripts/feishu-fetch.js:171`-`scripts/feishu-fetch.js:180`）
4. 写入 `public/feeds/posts.json`（`scripts/feishu-fetch.js:183`）

### 4.2 活动模型

活动模型核心字段为 `date`（非 `publishedAt`）和 `docUrl` 等（`src/lib/feishuActivities.ts:3`-`src/lib/feishuActivities.ts:15`、`src/lib/feishuActivities.ts:124`）。

抓取流程与文章类似，但活动脚本没有正文内图替换逻辑；主要下载封面/头像（`scripts/fetch-activities.js:156`-`scripts/fetch-activities.js:165`）。

### 4.3 当前快照数据（仓库内）

- `public/feeds/posts.json`：3 条文章（`public/feeds/posts.json:1`）
- `public/feeds/activities.json`：3 条活动（`public/feeds/activities.json:1`）

快照中的活动样本未见 `date` 字段（`public/feeds/activities.json:1`-`public/feeds/activities.json:29`），会影响时间展示。

## 5. 对原 `project_readme.md` 的修正点

以下是对原文的必要修正：

1. “构建时读取本地 JSON”应改为“支持在线飞书模式与本地 feed 模式，后者需 `USE_FEEDS=1`”。  
   依据：`src/lib/feishu.ts:140`、`src/lib/feishuActivities.ts:131`。
2. “自动化 CI/CD 已具备”在仓库内没有对应流水线配置文件，应改为“可接入 CI/CD”。  
   依据：仓库未见 CI 配置文件。
3. “活动字段稳定包含时间、摘要等”不成立；当前数据与代码允许缺省。  
   依据：`public/feeds/activities.json:1`-`public/feeds/activities.json:29`。
4. “图片资源本地化包含正文插图”需区分脚本：  
   - `feishu-fetch.js` 对文章支持正文图片替换  
   - `feishu-assets.js` 的 `rewriteHtmlImages` 仍是占位实现（`scripts/feishu-assets.js:21`-`scripts/feishu-assets.js:25`）

## 6. 已识别的实现风险（建议后续修复）

1. 首页活动日期字段使用 `publishedAt`，但活动模型字段是 `date`，导致日期可能为空。  
   位置：`src/pages/index.astro:207` vs `src/lib/feishuActivities.ts:13`、`src/lib/feishuActivities.ts:124`。
2. `/activities` 分页依赖 `?page=` 查询参数，但项目是纯静态输出，实质只会生成单页 HTML。  
   位置：`src/pages/activities/index.astro:6`、`src/pages/activities/index.astro:24` + `astro.config.mjs:7`。  
   影响：访问 `?page=2` 很可能仍显示第 1 页内容。
3. `.env.example` 缺少活动表和 `FIELD_DOC_URL`、`USE_FEEDS` 等关键变量，易导致本地启动或构建报错。  
   位置：`.env.example:1`-`.env.example:15`，对比 `src/lib/feishuActivities.ts:138`-`src/lib/feishuActivities.ts:140`、`src/lib/feishu.ts:37`。
4. 博客/活动列表页直接 `await getPosts()/getActivities()`，无兜底 try-catch，若 env 未配且未启用 feeds，构建可能失败。  
   位置：`src/pages/blog/index.astro:4`、`src/pages/blog/[slug].astro:6`、`src/pages/activities/[slug].astro:6`。
5. 详情页 `set:html` 直接注入富文本，依赖上游内容可信。  
   位置：`src/pages/blog/[slug].astro:29`、`src/pages/activities/[slug].astro:48`。

## 7. 运行与部署（按当前代码可行路径）

### 7.1 本地快照模式（推荐先跑通）

1. 安装依赖：`npm i`
2. 设置环境变量：`USE_FEEDS=1`
3. 启动开发：`npm run dev`
4. 构建：`npm run build`

### 7.2 在线飞书模式

1. 配齐飞书变量：  
   `FEISHU_APP_ID`、`FEISHU_APP_SECRET`、`FEISHU_APP_TOKEN`、`FEISHU_TABLE_ID`、  
   `FEISHU_ACTIVITIES_APP_TOKEN`、`FEISHU_ACTIVITIES_TABLE_ID`（可选 view id）、  
   `FIELD_*`（至少包含 `FIELD_DOC_URL`）。
2. 可先执行抓取脚本生成快照：  
   `npm run fetch:posts`、`npm run fetch:activities`
3. 再执行构建与部署：`npm run build`，部署 `dist/` 到静态托管。

## 8. 总结

该项目的核心方向（Astro 静态站 + 飞书内容源）是清晰且可扩展的；  
现状主要问题集中在“文档描述过于理想化”和“若干实现细节不一致”。  
本文件可作为后续修正文档与工程化治理的基准版本。


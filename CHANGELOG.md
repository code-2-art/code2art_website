# Changelog

## 2026-02-23 17:42 CST — 迁移至 Markdown Content Collections

将数据源从 `飞书 → posts.json / activities.json → Astro 渲染` 迁移为 `飞书 → 本地 .md 文件 → Astro Content Collections 渲染`。

### 新增
- `src/content.config.ts` — Astro 5 Content Layer 配置，定义 `posts` 和 `activities` 两个集合（glob loader + Zod schema）
- `src/content/posts/` 和 `src/content/activities/` 目录（.gitkeep 占位）
- `scripts/markdown-util.js` — 共享工具：`htmlToMarkdown(html)`、`buildMarkdownFile(frontmatter, body)`
- 依赖 `turndown`（HTML → Markdown 转换）

### 修改
- `scripts/feishu-fetch.js` — 输出从 `public/feeds/posts.json` 改为 `src/content/posts/{slug}.md`
- `scripts/fetch-activities.js` — 输出从 `public/feeds/activities.json` 改为 `src/content/activities/{slug}.md`
- `src/pages/index.astro` — 数据源改为 `getCollection('posts')` / `getCollection('activities')`，字段加 `.data.` 前缀
- `src/pages/blog/index.astro` — 数据源改为 `getCollection('posts')`，字段加 `.data.` 前缀
- `src/pages/blog/[slug].astro` — 使用 `getCollection('posts')` + `render(post)` → `<Content />`，替代 `set:html`
- `src/pages/activities/index.astro` — 数据源改为 `getCollection('activities')`，字段加 `.data.` 前缀
- `src/pages/activities/[slug].astro` — 使用 `getCollection('activities')` + `render(activity)` → `<Content />`，替代 `set:html`
- `package.json` — `assets:posts` / `assets:activities` 脚本路径更新为 `src/content/` 目录

### 删除
- `src/lib/feishu.ts`
- `src/lib/feishuActivities.ts`
- `src/lib/feishuBase.ts`
- `public/feeds/posts.json`
- `public/feeds/activities.json`
- `src/lib/` 和 `public/feeds/` 空目录

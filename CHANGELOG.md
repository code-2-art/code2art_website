# Changelog

---

## 2026-03-01 00:43 CST — i18n 重定向体验与策略优化

根路径 `/` 不再使用 `Redirecting from / to /zh/` 的中间跳转页，改为更友好的语言入口与 Nginx 分流配套方案。

### 变更记录
- 详见: `changelogs/2026-03-01-i18n-redirect-optimization.md`

---

## 如何添加 Markdown 文件

### 方式一：从飞书自动拉取

```bash
# 拉取博客文章
npm run fetch:posts

# 拉取活动
npm run fetch:activities
```

脚本会从飞书多维表格读取数据，自动将 HTML 正文转为 Markdown，生成到：
- `src/content/posts/{slug}.md`
- `src/content/activities/{slug}.md`

### 方式二：手动创建

在对应目录下新建 `.md` 文件，格式如下：

**博客文章** `src/content/posts/my-post.md`：

```markdown
---
title: "文章标题"
slug: "my-post"
summary: "一句话摘要"
coverUrl: "/uploads/cover.jpg"
tags:
  - "AI"
  - "生成艺术"
author: "作者名"
authorAvatarUrl: "/uploads/avatar.jpg"
publishedAt: "2026-02-23"
docUrl: "https://feishu.cn/docx/xxx"
---

正文内容，支持标准 Markdown 语法。
```

**活动** `src/content/activities/my-event.md`：

```markdown
---
title: "活动标题"
slug: "my-event"
date: "2026-03-01"
author: "组织者"
---

活动详情正文。
```

frontmatter 中只有 `title` 和 `slug` 是必填，其余都是可选的。

### 验证流程

```bash
# 1. 添加/拉取 md 文件后，启动开发服务器预览
npm run dev

# 2. 确认无误后构建
npm run build
```

---

## 2026-02-23 21:55 CST — 修复 Markdown 渲染样式

安装并配置 `@tailwindcss/typography` 插件，使页面中已有的 `.prose` 类生效，从而正确渲染 Markdown 正文排版。

### 修改
- `package.json` — 新增 `@tailwindcss/typography` 依赖
- `tailwind.config.mjs` — 引入 `typography` 插件

---
## 2026-02-23 18:13 CST — fetch 脚本清理上游已删除的 .md 文件

旧的单 JSON 覆写天然不会残留已删除记录，但新的 per-file 模式下，上游删除或 slug 变更后旧 `.md` 文件仍会留存并被 `getCollection` 发布。

### 修改
- `scripts/feishu-fetch.js` — 写入完成后比对目录中已有 `.md` 文件，删除不在本次写入集合中的 stale 文件
- `scripts/fetch-activities.js` — 同上

---

## 2026-02-23 18:12 CST — 修复 feishu-assets.js 兼容新 .md 格式

`feishu-assets.js` 仍按旧逻辑读取 JSON 文件，而 `package.json` 中 `assets:posts` / `assets:activities` 已改为传入目录路径，导致运行时 EISDIR 报错。

### 修改
- `scripts/feishu-assets.js` — 重写为处理 `.md` 文件：解析 frontmatter 中的 `coverUrl` / `authorAvatarUrl` 远程 URL 并下载到 `public/uploads/`，同时替换 body 中的远程图片链接

---

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

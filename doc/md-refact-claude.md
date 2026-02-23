# 迁移计划：飞书 → Markdown → Astro 网站

## Context

当前架构是 `飞书多维表格 → posts.json / activities.json → Astro 渲染`。目标改为 `飞书 → 本地 .md 文件 → Astro Content Collections 渲染`，让 markdown 成为唯一数据源，既用于网站渲染，也作为本地知识库供 AI 阅读。

## 新架构

```
飞书多维表格
    ↓  npm run fetch:posts / fetch:activities
src/content/posts/*.md  +  src/content/activities/*.md
    ↓  Astro Content Collections (build time)
静态网站 HTML
```

---

## 实施步骤

### 1. 安装依赖

```bash
npm install turndown
```

- **turndown**: HTML → Markdown 转换（fetch 脚本中用）
- js-yaml / marked 等不需要，用简单字符串拼接即可

### 2. 创建目录和 Content Collection 配置

创建 `src/content/posts/` 和 `src/content/activities/` 目录。

创建 **`src/content.config.ts`**（Astro 5 Content Layer API）：

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string().optional(),
    coverUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    authorAvatarUrl: z.string().optional(),
    publishedAt: z.string().optional(),
    docUrl: z.string().optional(),
  }),
});

const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string().optional(),
    coverUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    authorAvatarUrl: z.string().optional(),
    date: z.string().optional(),
    docUrl: z.string().optional(),
  }),
});

export const collections = { posts, activities };
```

### 3. 创建 `scripts/markdown-util.js`

共享工具：`htmlToMarkdown(html)` 和 `buildMarkdownFile(frontmatter, body)`。

- 用 turndown 将 HTML 转为 markdown
- frontmatter 用简单的 YAML 序列化（无需 js-yaml 库，手写即可处理简单字段）

### 4. 修改 `scripts/feishu-fetch.js`

- 输出目录从 `public/feeds` 改为 `src/content/posts`
- 每篇文章输出为 `{slug}.md`，包含 YAML frontmatter + markdown 正文
- `contentHtml` 通过 turndown 转为 markdown body
- 不再生成 `posts.json`

### 5. 修改 `scripts/fetch-activities.js`

同上，输出到 `src/content/activities/{slug}.md`。

### 6. 更新 5 个页面组件

所有页面从 `import { getPosts } from '../lib/feishu'` 改为 `import { getCollection, render } from 'astro:content'`。

| 文件 | 改动 |
|------|------|
| `src/pages/index.astro` | `getCollection('posts')` + `getCollection('activities')`，字段加 `.data.` 前缀 |
| `src/pages/blog/index.astro` | `getCollection('posts')`，字段加 `.data.` |
| `src/pages/blog/[slug].astro` | `getCollection('posts')` + `render(post)` → `<Content />`，替代 `set:html` |
| `src/pages/activities/index.astro` | `getCollection('activities')`，字段加 `.data.` |
| `src/pages/activities/[slug].astro` | `getCollection('activities')` + `render(activity)` → `<Content />`，替代 `set:html` |

关键模式变化：
```astro
<!-- 旧 -->
<div class="prose" set:html={p.contentHtml} />

<!-- 新 -->
const { Content } = await render(post);
<div class="prose"><Content /></div>
```

属性访问变化：`post.title` → `post.data.title`，`post.slug` → `post.data.slug` 等。

### 7. 删除旧文件

确认新流程工作后删除：
- `src/lib/feishu.ts`
- `src/lib/feishuActivities.ts`
- `src/lib/feishuBase.ts`
- `public/feeds/posts.json`
- `public/feeds/activities.json`

保留（fetch 脚本仍需）：
- `scripts/feishu-common.js`
- `scripts/feishu-doc-util.js`
- `scripts/feishu-assets.js`（后续适配 .md 格式）

### 8. 创建 `scripts/import-to-feishu.js`（反向导入脚本）

用于将本地 .md 文件批量写入飞书多维表格：
- 解析 frontmatter + markdown body
- markdown → HTML（用 marked 或简单处理）
- 调用飞书 Bitable API 创建/更新记录
- 支持 `--dry-run` 预览

此步骤可在主流程跑通后再做。

---

## 验证方式

1. 运行 `npm run fetch:posts` → 检查 `src/content/posts/*.md` 文件是否生成正确
2. 运行 `npm run fetch:activities` → 检查 `src/content/activities/*.md`
3. 运行 `npm run dev` → 访问首页、博客列表、博客详情、活动列表、活动详情，确认渲染正常
4. 运行 `npm run build` → 确认静态构建成功

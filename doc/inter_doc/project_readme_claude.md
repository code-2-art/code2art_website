# Project Analysis: 实验编程 (Experimental Programming) 官方网站

基于对完整代码库的逐文件分析，整理的详细技术架构与内容结构报告。

## 1. 项目概览

| 项目名称 | `techart-site` (package.json) |
|---------|-------------------------------|
| 品牌名 | 实验编程 / Experimental Programming |
| 线上地址 | [code2art.com](https://code2art.com) |
| 作者 | [Contra (avantcontra)](https://github.com/avantcontra) |
| 许可证 | MIT |
| 代码仓库组织 | [github.com/code-2-art](https://github.com/code-2-art) |

## 2. 技术架构 (Technical Architecture)

### 2.1 核心框架与工具链

| 层面 | 技术 | 版本 | 说明 |
|-----|------|------|------|
| SSG 框架 | **Astro** | ^5.13.10 | 纯静态输出模式 (`output: 'static'`) |
| CSS 框架 | **TailwindCSS** | ^3.4.17 | 通过 `@astrojs/tailwind` 集成，配合 PostCSS + Autoprefixer |
| 类型系统 | **TypeScript** | ^5.9.2 | 启用 strict 模式，target ES2022 |
| 包管理 | npm / pnpm | 两套 lock 文件并存 (`package-lock.json` + `pnpm-lock.yaml`) |
| 字体方案 | Inter (本地托管) | 300-800 六个字重 | TTF 格式，`public/fonts/` 下自托管以优化中国大陆加载 |
| 图标库 | Font Awesome 4.7 | CDN 引入 | 通过 jsDelivr CDN (`font-awesome.min.css`) |

### 2.2 数据流与 CMS (Headless CMS via 飞书)

项目没有使用传统 CMS，而是以**飞书 (Feishu/Lark) 多维表格 (Bitable)** 作为内容管理后台。数据通过两条路径进入前端：

#### 路径 A：预构建 ETL（推荐，生产用）

```
飞书 Bitable API ──→ Node.js 脚本 ──→ JSON 文件 ──→ Astro 构建 ──→ 静态 HTML
```

| 脚本 | 功能 | 输出 | npm 命令 |
|------|------|------|----------|
| `scripts/feishu-fetch.js` | 从博客主表拉取记录，可自动从飞书 Doc 抓取正文 HTML | `public/feeds/posts.json` | `npm run fetch:posts` |
| `scripts/fetch-activities.js` | 从活动独立表拉取记录 | `public/feeds/activities.json` | `npm run fetch:activities` |
| `scripts/feishu-assets.js` | 二次处理 JSON，将封面/头像图片下载到本地 | `public/uploads/` (覆写 JSON 中的 URL) | `npm run assets:posts` / `npm run assets:activities` |
| `scripts/feishu-doc-util.js` | 共享工具模块：认证、Doc 内容获取、链接解析 | — | — |

- 通过环境变量 `USE_FEEDS=1` 开关切换：为 `1` 时从本地 JSON 读取（生产模式），否则构建时实时调飞书 API。
- `DOWNLOAD_ASSETS=1` 控制是否在 fetch 阶段直接下载远程图片到 `public/uploads/`。
- 支持从飞书 Doc (旧版) 自动抓取正文 HTML；飞书 Docx (新版) 暂不支持自动转 HTML，需手动粘贴到 Bitable「正文HTML」列。

#### 路径 B：构建时实时调 API（开发/调试用）

当 `USE_FEEDS` 未设为 `1` 时，`src/lib/feishu.ts` 和 `src/lib/feishuActivities.ts` 在 Astro 构建期间直接调用飞书 Open API 获取数据。两份 lib 内部均有内存缓存 (`_postsCache` / `_cache`) 避免重复请求。

### 2.3 静态资源托管策略

项目采用了**七牛云 CDN** 做静态资源浮动加速：

- 图片 CDN 域名：`float.intplusplus.cn`，路径前缀 `/code2art/`
- 首页 Hero 图、favicon、流体艺术主图等均从该 CDN 加载
- `public/assets/` 下保留有本地副本（但代码中引用的是 CDN URL）
- `public/uploads/` 用于存储由 ETL 脚本下载的飞书表格中的图片资源

### 2.4 环境变量

项目通过 `.env` 文件配置（见 `.env.example`），分两组：

**博客主表配置：**
| 变量 | 用途 |
|------|------|
| `FEISHU_APP_ID` / `FEISHU_APP_SECRET` | 飞书应用凭证 |
| `FEISHU_APP_TOKEN` / `FEISHU_TABLE_ID` / `FEISHU_VIEW_ID` | 博客主表定位 |

**活动独立表配置（代码中引用，`.env.example` 中未列出）：**
| 变量 | 用途 |
|------|------|
| `FEISHU_ACTIVITIES_APP_TOKEN` / `FEISHU_ACTIVITIES_TABLE_ID` / `FEISHU_ACTIVITIES_VIEW_ID` | 活动表定位 |

**字段映射（可自定义列名）：**
`FIELD_TITLE`, `FIELD_SLUG`, `FIELD_SUMMARY`, `FIELD_CONTENT_HTML`, `FIELD_COVER_URL`, `FIELD_TAGS`, `FIELD_AUTHOR`, `FIELD_AUTHOR_AVATAR_URL`, `FIELD_PUBLISHED_AT`, `FIELD_DOC_URL`

**功能开关：**
| 变量 | 用途 |
|------|------|
| `USE_FEEDS=1` | 从本地 JSON 读取数据（而非实时调 API） |
| `DOWNLOAD_ASSETS=1` | ETL 脚本运行时下载远程图片到本地 |

## 3. 项目目录结构

```
code2art_website/
├── astro.config.mjs        # Astro 配置：静态输出，TailwindCSS 集成
├── tailwind.config.mjs     # TailwindCSS 配置：自定义色板 + Inter 字体
├── tsconfig.json           # TypeScript 配置
├── postcss.config.cjs      # PostCSS：tailwindcss + autoprefixer
├── package.json            # 项目依赖与脚本
├── nginx.sample.conf       # Nginx 部署参考配置
├── .env.example            # 环境变量模板
│
├── scripts/                # 预构建 ETL 脚本
│   ├── feishu-doc-util.js  # 飞书 API 共享工具（认证、Doc 获取）
│   ├── feishu-fetch.js     # 博客数据抓取 → posts.json
│   ├── fetch-activities.js # 活动数据抓取 → activities.json
│   └── feishu-assets.js    # 图片本地化处理
│
├── src/
│   ├── env.d.ts            # TypeScript 类型声明
│   ├── styles/
│   │   └── tailwind.css    # Tailwind 指令 + 自定义工具类
│   ├── layouts/
│   │   └── BaseLayout.astro # 全局 HTML 模板（SEO meta、字体、Font Awesome）
│   ├── lib/
│   │   ├── feishu.ts       # 博客数据层（Post 类型、API 调用/JSON 读取）
│   │   └── feishuActivities.ts # 活动数据层（Activity 类型、API 调用/JSON 读取）
│   └── pages/
│       ├── index.astro     # 首页（单页应用风格，含所有 section）
│       ├── blog/
│       │   ├── index.astro # 博客列表页
│       │   └── [slug].astro # 博客详情页（SSG 动态路由）
│       ├── activities/
│       │   ├── index.astro # 活动列表页（含分页，每页 9 条）
│       │   └── [slug].astro # 活动详情页（SSG 动态路由）
│       └── api/
│           └── health.json.ts # 健康检查端点
│
├── public/
│   ├── favicon.jpg / favicon.svg
│   ├── fonts/              # Inter 字体本地文件 (300-800)
│   │   └── inter.css       # @font-face 声明
│   ├── assets/             # 静态图片资源（本地副本）
│   │   └── list/           # 列表配图
│   ├── feeds/              # ETL 生成的 JSON 数据
│   │   ├── posts.json
│   │   └── activities.json
│   └── uploads/            # ETL 下载的飞书图片资源
│
├── doc/                    # 项目文档
└── dist/                   # 构建输出（.gitignore）
```

## 4. 内容结构 (Content Structure)

### 4.1 首页 (`src/pages/index.astro`)

首页采用**单页长滚动**设计，所有内容在一个页面中通过锚点定位：

| Section | 内容 |
|---------|------|
| **Navbar** | 固定顶部导航栏，滚动时启用毛玻璃效果 (`backdrop-blur`)；响应式汉堡菜单 |
| **Hero** | 品牌宣言「艺术是算法的叛徒」；中英文社群介绍；流体艺术主图（浮动动画） |
| **Activities** | 展示最新 3 条活动卡片，点击跳转至飞书文档外链 (`docUrl`) |
| **Blog** | 展示最新 3 篇博客卡片，点击跳转至飞书文档外链；底部"查看更多"链接到 `/blog/` |
| **Contact** | 企业微信加群入口 + 联系方式 |
| **Footer** | 社交平台链接矩阵（公众号、小红书、B站、抖音）+ 资源链接（小鹅通、GitHub、Gumroad、YouTube） |
| **Back-to-top** | 固定右下角返回顶部按钮 |

> 注意：首页有多个被注释掉的 section（Social QR 扫码区、About 关于我们、Feishu 飞书协作展示），说明设计上曾规划但当前未启用。

### 4.2 博客板块

- **列表页** (`/blog/`)：展示所有文章，三栏网格布局，显示封面、标签、日期、标题、摘要
- **详情页** (`/blog/[slug]`)：SSG 动态路由，展示完整文章内容（富文本 HTML），含作者头像、发布日期

### 4.3 活动板块

- **列表页** (`/activities/`)：带分页（每页 9 条），三栏网格布局
- **详情页** (`/activities/[slug]`)：SSG 动态路由，展示活动封面、日期、作者、正文

### 4.4 当前链接策略

首页的活动卡片和博客卡片目前都**直接链接到飞书文档外链** (`docUrl`) 而非站内详情页。代码中保留了链接到 `/blog/[slug]` 和 `/activities/[slug]` 的注释代码，说明未来可能切换回站内详情页。

## 5. 数据模型

### Post（博客文章）

```typescript
type Post = {
  id: string;
  slug: string;
  title: string;
  summary?: string;
  contentHtml?: string;
  coverUrl?: string;
  tags?: string[];
  author?: string;
  authorAvatarUrl?: string;
  publishedAt?: string; // ISO 日期
  docUrl?: string;      // 飞书文档链接
};
```

### Activity（社群活动）

```typescript
type Activity = {
  id: string;
  slug: string;
  title: string;
  summary?: string;
  contentHtml?: string;
  coverUrl?: string;
  tags?: string[];
  author?: string;
  authorAvatarUrl?: string;
  date?: string;    // 活动时间
  docUrl?: string;  // 飞书文档链接
};
```

两者字段高度相似，主要区别是 Activity 使用 `date` 而非 `publishedAt`。`feishu.ts` 和 `feishuActivities.ts` 存在大量重复代码（API 调用、字段解析辅助函数等）。

## 6. 构建与部署

### 6.1 npm 脚本

| 命令 | 功能 |
|------|------|
| `npm run dev` | 本地开发服务器 (`astro dev`) |
| `npm run build` | 生产构建 (`astro build`) → `dist/` |
| `npm run preview` | 预览构建产物 (`astro preview --host`) |
| `npm run fetch:posts` | 从飞书拉取博客数据 → `public/feeds/posts.json` |
| `npm run fetch:activities` | 从飞书拉取活动数据 → `public/feeds/activities.json` |
| `npm run assets:posts` | 本地化 posts.json 中的图片 |
| `npm run assets:activities` | 本地化 activities.json 中的图片 |

### 6.2 典型生产构建流程

```bash
# 1. 配置环境变量
cp .env.example .env  # 填入飞书凭证

# 2. 从飞书拉取数据
npm run fetch:posts
npm run fetch:activities

# 3. (可选) 本地化图片
npm run assets:posts
npm run assets:activities

# 4. 构建静态站点
USE_FEEDS=1 npm run build

# 5. 部署 dist/ 目录
```

### 6.3 部署方式

项目提供了 `nginx.sample.conf` 作为 Nginx 部署参考：
- 监听 80 端口
- 静态资源 30 天缓存
- SPA 风格 fallback (`try_files $uri $uri/ /index.html`)

构建产物为纯静态文件，可部署至 Nginx、Vercel、Netlify 等任何静态托管服务。

## 7. 视觉设计系统

### 配色方案

| 名称 | 色值 | 用途 |
|------|------|------|
| Primary | `#6366F1` (靛蓝) | 主色调，按钮、链接高亮 |
| Secondary | `#EC4899` (粉色) | 渐变副色，CTA 按钮 |
| Dark | `#1E293B` | 深色背景（Footer）、正文色 |
| Light | `#F8FAFC` | 页面底色 |

### 视觉特性

- 渐变色 CTA 按钮 (`from-primary to-secondary`)
- 毛玻璃导航栏 (`backdrop-blur`)
- 卡片 hover 阴影放大效果
- Hero 图片浮动动画 (`animate-float`, 6s 周期)
- 渐变文字效果 (`.text-gradient`)
- 响应式设计（移动端汉堡菜单、网格自适应列数）

## 8. 已知问题与待改进点

1. **`.gitignore` 合并冲突残留**：文件末尾有未清理的 git 冲突标记 (`>>>>>>> afab8a5`)。

2. **`package.json` 冗余依赖**：`"dotevn": "0.0.1-security"` 疑为拼写错误的安全占位包（应为 `dotenv`，实际正确的 `dotenv` 已作为 dependencies 存在）。

3. **`.env.example` 不完整**：缺少活动表相关环境变量 (`FEISHU_ACTIVITIES_APP_TOKEN` 等) 和功能开关 (`USE_FEEDS`, `DOWNLOAD_ASSETS`, `FIELD_DOC_URL`)。

4. **数据层代码重复**：`feishu.ts` 和 `feishuActivities.ts` 约 70% 代码重复（API 认证、记录遍历、字段解析辅助函数），可抽取为共享模块。类似地，`feishu-fetch.js` 和 `fetch-activities.js` 也有大量重复。

5. **首页类型标注不一致**：`index.astro` 第 8 行 `activities` 的类型标注为 `Post[]` 而非 `Activity[]`。

6. **详情页链接策略过渡态**：首页卡片链接到飞书外链 (`docUrl`)，但 `/blog/` 列表页和 SSG 详情页仍链接到站内路由 (`/blog/[slug]`)，两套逻辑并存。

7. **Health 端点在纯静态模式下的意义**：`api/health.json.ts` 在 `output: 'static'` 模式下会被预渲染为静态 JSON 文件，仅能验证构建是否成功，无法反映运行时状态。

8. **Nginx 配置的 SPA fallback**：`try_files $uri $uri/ /index.html` 是 SPA 写法，但本项目是 MPA（多页应用），更合理的 fallback 应为 `=404`。

# Project Analysis: 实验编程 (Experimental Programming) 官方网站 (Gemini 补充版)

通过通读和分析现有代码库，在原有 `doc/project_readme.md` 基础上进一步修正和补充，整理出了这份更加完整、精准的技术架构与内容结构分析报告。

## 1. 技术架构 (Technical Architecture)

该项目采用 **SSG (Static Site Generation)** 模式，结合 **Headless CMS** 方案，构建了一个高性能的静态官方网站。

### 核心框架
- **Astro (v5)**: 用于构建静态页面的现代 Web 框架，配置中明确指出了纯静态输出 `output: 'static'`，专注于内容驱动型网站的高性能表现。
- **TailwindCSS**: 实用优先的 CSS 框架，通过 `@astrojs/tailwind` 插件进行全站样式设计。配合 PostCSS/Autoprefixer 工作。
- **TypeScript**: 提供类型安全的代码开发体验，通过 `src/env.d.ts` 等文件定义类型约束。

### 数据流与 CMS 管线 (Data & Content Pipeline)
本项目没有使用传统的关系型数据库或 WordPress 等 CMS，而是利用 **Feishu (飞书) 多维表格** 作为内容管理后台。开发和自动化构建依靠 Node 脚本实现的**数据清洗、抓取与静态化缓存**：

- **数据预抓取 (ETL Pipeline)**:
  - 位于 `scripts/` 目录下的 Node.js 脚本负责从飞书 API 抓取数据并持久化到本地：
    - `scripts/feishu-fetch.js`: 从「博客主表」抓取数据，支持深入抓取飞书 Doc 链接的富文本 HTML，最终写入 `public/feeds/posts.json`。
    - `scripts/fetch-activities.js`: 从「活动独立表」提取活动数据，最终写入 `public/feeds/activities.json`。
  - **脚本指令集成**: 开发者可通过 `npm run fetch:posts` / `npm run fetch:activities` 自动化抓取动作。
- **静态资源本地化 (Asset Localization)**:
  - **二次处理脚本 (`scripts/feishu-assets.js`)**: 原始抓取下来的 JSON 数据可能带有飞书链接。运行 `npm run assets:*` （针对帖子和活动）将会调用此脚本，把 JSON 中引用的远端图片等静态资源统一下载到本地 `public/uploads/` 目录中，并将 JSON 里的资源路径更新为相对路径。这极大地提高了图片稳定性及加载速度，避免了跨域和防盗链失效问题。
- **直接 API 访问 (Fallback API fetching)**: 
  - 根据 `src/lib/feishu.ts` 等模块，系统支持通过 `getPosts` 和 `getActivities` 动态发起 API 请求。生产环境中推荐使用本地预留好的 JSON，利用内存缓存 `_cache` 返回数据。
  
### 构建与监控
- `astro build` 命令将基于获取或请求的 JSON 数据，把模板预渲染生成纯静态文件，输出于 `dist/`，可无缝部署于 Nginx、Vercel 或任何静态托管云上。
- **构建存活探测端点 (Health Check)**: 项目额外在 `src/pages/api/health.json.ts` 下提供了轻快的心跳/健康检测静态端点，虽然生成为了静态 JSON 文件，但能被外部 CI/CD 工具或监控平台验证部署上线状态。
- **字体与体验优化**: 代码包含了本地自托管的 Inter 字体 (`public/fonts/inter.css` 以及 `.ttf` 资产)，在 Tailwind config 下将其作为默认中性字体体系，以优化国内服务器环境对 Google Web Fonts 的不确定性与访问速度惩罚。

## 2. 内容结构 (Content Structure)

网站内容架构设计围绕实验编程社群（前 HUDOIT 交互媒体艺术论坛）的“输出”与“连接”两类心智诉求展开。基于长单页 (Long Scroll Single Page) 与静态路由集合：

### 首页结构展现 (`src/pages/index.astro`)
- **导航层 (Navbar)**:
  - Header 利用 JS 侦听滚动坐标，动态附加毛玻璃 (`backdrop-blur`) 与半透白底，并在移动端挂载了汉堡折叠菜单。
- **Hero Section (焦点横幅)**: 
  - 宣告品牌核心口号 “艺术是算法的叛徒”。左侧辅以中英双语社群理念简述（实验编程 2016-2026），右侧配有流体动效视觉（`animate-float`）和具有视觉冲击风格的流体主图。
- **互动/留白区 (未来预留拓展 / Hidden in source)**:
  - 代码里注释包含了对扫码聚合区 (`Social QR Section`)、纯文本介绍 (`About Section`)、以及飞书特长展示区 (`Feishu Section`) 的开发占位符。这表明当前采用极简首屏结构，功能上保留了快速开启后续内容展位的弹性。
- **动态核心板块**:
  1. **活动展示 (Activities)**: 渲染最新的部分（当前拉取前 3 条）线下的工作坊、展览等。目前卡片点击的跳转落脚点多引向了**飞书外部文档** (`docUrl`)。
  2. **博客展示 (Blog)**: 展示来自团队的最新 3 篇文章/项目日志卡片。拥有标签气泡 UI 组件，点击同样指向对应文档链接 (`docUrl`) 或详情页路由。
- **Footer与联系区**:
  - `Contact`: 加入企业微信、社交媒体引导。
  - `Footer`: 完整的相关生态链接（小鹅通知识店铺、B 站、公众号、小红书、Gumroad 商铺及 Github 代码库入口）。底边包括回到顶部锚点悬浮按钮。

### 分类与明细路由
代码中预备了独立的活动和博客路由：
- **Blog 路由** (`src/pages/blog/`):
  - `index.astro`：展示所有博客文章矩阵。
  - `[slug].astro`：基于 Astro SSG 的动态路由。负责提取文章 `contentHtml`（由 ETL 脚本或抓取时缓存处理），实现文章本地内页展开。
- **Activities 路由** (`src/pages/activities/`):
  - `index.astro` / `[slug].astro`：与博客模型一致，针对社群线下实体活动或项目展示。

## 3. 关键特性补充结语
- **飞书作为一体化 Backend 的轻量实践**: 无需运维服务端、数据库集群，通过预抓取与资产本地化 (`feishu-assets.js`) 后完全“拔线”脱机托管构建结果。
- **高性能前端与 Island 架构**: 无运行时动态数据请求、无重度 JS 框架依赖；图片等资产甚至被引入至七牛的浮动域名 CDN，静态资源加载策略优异。
- **视觉冲击优先**: 不追求堆叠信息，采用宽广的排版、CSS 层面的光影投射（hover shadow）结合大面积流体毛玻璃质感与动态微反馈，高度还原了“科技与艺术融合”这一特定的感官设定。

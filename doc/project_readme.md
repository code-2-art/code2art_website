# Project Analysis: 实验编程 (Experimental Programming) Official Website

通过分析现有代码库，整理了该项目的详细技术架构与内容结构报告。

## 1. 技术架构 (Technical Architecture)

该项目采用 **SSG (Static Site Generation)** 模式，结合 **Headless CMS** 方案，构建了一个高性能的静态官方网站。

- **核心框架**:
  - **Astro (v5)**: 用于构建静态页面的现代 Web 框架，专注于内容驱动型网站的高性能表现。
  - **TailwindCSS**: 实用优先的 CSS 框架，负责全站样式设计。
  - **TypeScript**: 提供类型安全的代码开发体验。

- **数据流与 CMS (内容管理)**:
  - **数据源**: **Feishu (飞书) 多维表格**。项目没有使用传统的 CMS（如 WordPress），而是利用飞书作为内容管理后台。
  - **数据获取 (ETL Pipeline)**:
    - 位于 `scripts/` 目录下的 Node.js 脚本 (`feishu-fetch.js`, `fetch-activities.js`) 负责从飞书 API 拉取数据。
    - **预构建处理**: 运行 `npm run fetch:posts` 等命令时，脚本会将飞书中的记录（文章、活动）抓取并清洗格式。
    - **本地化存储**: 清洗后的数据被存储为 JSON 文件 (`public/feeds/posts.json`, `public/feeds/activities.json`)，充当本地数据库。同时支持将图片资源（封面、头像、正文插图）下载到 `public/uploads` 以优化加载速度。

- **构建与部署**:
  - `astro build` 命令读取本地的 JSON 数据文件，生成纯静态 HTML/CSS/JS 文件。
  - 产物目录为 `dist/`，可部署至任何静态托管服务（如 Vercel, Netlify, Nginx）。

## 2. 内容结构 (Content Structure)

网站内容主要围绕社群的“输出”与“连接”展开，结构清晰：

- **首页 (Home)**:
  - **Hero Section**: 品牌宣言（“用计算编程进行艺术创作”），视觉冲击力强的流体艺术主图。
  - **关于社群**: 介绍历史（前身 HUDOIT）、规模（2000+用户）及学术合作背景。
  - **最新动态**: 展示最新的几条社群活动和博客文章。
  - **Footer**: 社交媒体矩阵链接（公众号、小红书、B站等）及资源链接。

- **核心板块**:
  1.  **博客 (Blog)**:
      - 数据源：飞书「博客主表」。
      - 内容：成员的技术分享、思考与跨界实践文章。
      - 形式：支持富文本 HTML 内容（解析自飞书文档）。
  2.  **活动 (Activities)**:
      - 数据源：飞书「活动独立表」。
      - 内容：工作坊、讲座、展览、创意马拉松等社群活动。
      - 字段：包含活动标题、封面、时间、摘要及详情链接。

## 3. 关键特性
- **自动化内容同步**: 编辑团队只需在飞书表格中维护内容，无需触碰代码，通过 CI/CD 触发构建即可更新网站。
- **高性能**: 无需运行时数据库查询，除了图片外几乎零 JS 阻塞（Astro 的 Island Architecture 特性），加载速度极快。
- **视觉体验**: 采用了全屏流体动效、毛玻璃导航栏 (Backdrop blur) 和微交互动画，符合“科技与艺术融合”的品牌调性。

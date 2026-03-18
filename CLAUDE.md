# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

code2art_website (实验编程 / code2art.com) is a bilingual (zh/en) static website built with **Astro 5**, **TailwindCSS**, and **TypeScript**. Content is managed in **Feishu (飞书)** multi-dimensional tables and synced to local Markdown files via custom scripts.

## Commands

```bash
npm run dev          # Start dev server (localhost:4321)
npm run build        # Production build (static output to dist/)
npm run preview      # Preview production build

# Content sync from Feishu CMS
npm run feishu       # Fetch tutorials from Feishu → src/content/tutorials/
npm run activities   # Fetch events from Feishu → src/content/events/
```

## Architecture

### Content Pipeline

Feishu tables → `scripts/feishu-fetch.js` / `scripts/fetch-activities.js` → Markdown files in `src/content/` → Astro Content Collections → Static HTML

Key scripts:
- `scripts/feishu-common.js` — Shared Feishu API utilities and field mapping
- `scripts/markdown-util.js` — HTML→Markdown conversion (Turndown) and frontmatter generation
- `scripts/feishu-assets.js` — Downloads images from Feishu to local storage
- `scripts/feishu-doc-util.js` — Feishu document block parsing

### i18n Routing

- Root `/` shows a language selection page
- All content lives under `/{lang}/` prefixes (`/zh/`, `/en/`)
- Language preference stored in `site_lang` cookie
- Nginx handles server-side language detection as fallback
- Translation strings in `src/i18n/ui.ts` with `useTranslations(lang)` helper

### Content Collections (src/content.config.ts)

Collections: `tutorials`, `events`, `projects`, `glossary`, `domains`, `resources`, `meta`

Each collection has locale subdirectories (`zh/`, `en/`). Content files use rich frontmatter with fields like `id`, `slug`, `title`, `summary`, `tags`, `domains`, `difficulty`, `tools`, `lang`, `status`.

### Page Structure

Pages are duplicated per locale (`src/pages/zh/`, `src/pages/en/`) with:
- `index.astro` — Homepage with hero, events list, tutorials grid
- `tutorials/[slug].astro` — Single tutorial detail
- `tutorials/[...page].astro` — Paginated tutorial listing
- `events/[slug].astro` and `events/[...page].astro` — Same pattern for events

### Layout & Components

- `src/layouts/BaseLayout.astro` — Main wrapper (meta tags, hreflang alternates, Navbar + Footer)
- `src/components/Navbar.astro` — Fixed nav with mobile menu, language switcher, scroll blur effect
- `src/components/Footer.astro` — Social links (WeChat, Xiaohongshu, Bilibili, Douyin), back-to-top

## Deployment

- **Branch:** `product` triggers GitHub Actions CI/CD
- **Workflow:** `.github/workflows/deploy.yml` — Node 20, `npm ci` → `npm run build` → rsync to VPS
- **Server:** Nginx with SSL, language-based root routing, static asset caching

## Environment Variables

See `.env.example` for required Feishu API credentials (`FEISHU_APP_ID`, `FEISHU_APP_SECRET`, table/view IDs, field mappings) and feature flags.

## PR Guidelines

Per `.github/pull_request_template.md`:
- Content PRs should only modify files in `src/content/`
- Use external image URLs in content (not local assets)
- Validate Markdown frontmatter fields match the collection schema

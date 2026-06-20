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

### SEO

- `@astrojs/sitemap` integration → `sitemap-index.xml` (i18n-aware), built from `site` + `base`
- `src/pages/robots.txt.ts` — dynamic robots.txt; the `Sitemap:` line resolves against the active origin + base
- `src/pages/{zh,en}/rss.xml.ts` + `src/lib/rss.ts` — per-language RSS feeds from the `tutorials` collection (base-aware item links)
- `BaseLayout.astro` emits canonical URL, Open Graph + Twitter Card tags, RSS autodiscovery, and WebSite + Organization JSON-LD; it accepts `ogType` and a `jsonLd` prop for page-specific structured data
- Tutorial detail pages add `BlogPosting` JSON-LD; event detail pages add `Event` JSON-LD

## Deployment

Two independent targets build from the same source:

### Production — code2art.com
- **Trigger:** push to `product`
- **Workflow:** `.github/workflows/deploy.yml` — Node 20, `npm ci` → `npm run build` → rsync `dist/` to VPS
- **Server:** Nginx with SSL, language-based root routing, static asset caching
- Built at the domain root (base `/`).

### GitHub Pages test page — code-2-art.github.io/code2art_website/
- **Trigger:** push to `dev`
- **Workflow:** `.github/workflows/pages.yml` — Node 20, `npm ci` → `npm run build` (with `GH_PAGES_BUILD=true`) → `upload-pages-artifact` → `deploy-pages`
- **Pages config:** build type is **GitHub Actions** (not deploy-from-branch); the `github-pages` environment only allows deployments from `dev` and `main`.
- Built under the sub-directory base `/code2art_website/`.

### Multi-target base paths (read before editing any page)
`astro.config.mjs` switches `site` / `base` on the `GH_PAGES_BUILD` env var:
- unset → `https://code2art.com` + base `/` (production)
- `=true` → `https://code-2-art.github.io` + base `/code2art_website/` (Pages CI)

Every internal link/asset path **must be base-aware**, or it 404s on the sub-directory build:
- Locale links: `getLocalePath(lang, '/path')` (`src/i18n/ui.ts`) — already base-aware
- Other root-absolute assets (favicon, fonts, images): wrap with `withBase('/path')`
- Do not hardcode `href="/zh/…"` or `src="/assets/…"`. Astro's `paginate()` URLs and `Astro.url.pathname` already include the base.

## Environment Variables

See `.env.example` for required Feishu API credentials (`FEISHU_APP_ID`, `FEISHU_APP_SECRET`, table/view IDs, field mappings) and feature flags.

## PR Guidelines

Per `.github/pull_request_template.md`:
- Content PRs should only modify files in `src/content/`
- Use external image URLs in content (not local assets)
- Validate Markdown frontmatter fields match the collection schema

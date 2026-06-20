// Import a curated sample of scraped WeChat articles into the site's content
// collections (tutorials / events / projects). Mechanical, data-driven:
// the per-article editorial metadata lives in MANIFEST below; this script does
// the repetitive work (parse → clean body → copy images → emit frontmatter).
//
// Usage:  node scripts/import-wechat-sample.mjs
//
// Source articles live outside the repo; override with WECHAT_SRC if needed.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

// ImageMagick binary (override with MAGICK env var). Used to downscale + convert
// to WebP — chosen over `sharp` because sharp can't load on Node < 18.17/20.
const MAGICK = process.env.MAGICK || 'magick';
const MAX_WIDTH = 1280; // cap longest dimension's width; only shrinks larger images
const WEBP_QUALITY = 80;

const SRC_ROOT =
  process.env.WECHAT_SRC || 'H:/prjs/claudecode/wechat_pachong/articles';
const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_ROOT = path.join(REPO_ROOT, 'src', 'content');
const UPLOADS_ROOT = path.join(REPO_ROOT, 'public', 'uploads');

// collection directory per content type
const COLLECTION_DIR = {
  tutorial: 'tutorials',
  event: 'events',
  project: 'projects',
};

// ---- curated sample manifest -------------------------------------------------
// folder: exact source folder name
// type:   tutorial | event | project
// slug:   url-safe, unique within its collection
// domains/tags/tools: free-form string arrays used for filtering/SEO
// summary: one-line Chinese summary
// event-only: event_date, location, format (online|offline|hybrid)
const MANIFEST = [
  // ---------------- TUTORIALS ----------------
  {
    folder: '296_2023-10-26_ComfyUI学习笔记2，一文看透Workflow',
    type: 'tutorial',
    slug: 'comfyui-notes-02-workflow-231026',
    domains: ['ai-image-generation', 'workflow-automation'],
    tags: ['comfyui', 'stable-diffusion', 'workflow'],
    tools: ['comfyui', 'stable-diffusion'],
    difficulty: 'beginner',
    summary: 'ComfyUI 学习笔记第二篇，一文看透 ComfyUI 的 Workflow 节点工作流机制。',
  },
  {
    folder: '173_2024-08-03_几何算法与AI绘画结合生成精美纹样',
    type: 'tutorial',
    slug: 'geometry-algorithm-ai-pattern-240803',
    domains: ['generative-art', 'ai-image-generation'],
    tags: ['generative-art', 'controlnet', 'stable-diffusion', 'pattern'],
    tools: ['stable-diffusion', 'controlnet'],
    difficulty: 'intermediate',
    summary: '把几何算法与 AI 绘画（Stable Diffusion / ControlNet）结合，生成精美的纹样图案。',
  },
  {
    folder: '735_2019-11-17_用Blender来学习Python创意编程，实现傅里叶级数可视化',
    type: 'tutorial',
    slug: 'blender-python-fourier-series-191117',
    domains: ['creative-coding', 'generative-art'],
    tags: ['blender', 'python', 'fourier-series', 'creative-coding'],
    tools: ['blender', 'python'],
    difficulty: 'beginner',
    summary: '不写复杂代码，用 Blender 的 Python 接口实现傅里叶级数可视化，入门创意编程。',
  },

  // ---------------- EVENTS ----------------
  {
    folder: '013_2026-03-19_实验工坊｜TouchDesigner互动影像基础',
    type: 'event',
    slug: 'workshop-touchdesigner-basics-260319',
    domains: ['interactive-media'],
    tags: ['touchdesigner', 'workshop', 'interactive-media'],
    tools: ['touchdesigner'],
    summary: '实验工坊·TouchDesigner 互动影像基础工作坊，由 3EYESNUTS 主讲，从零搭建第一个交互影像系统。',
    event_date: '2026-03-19',
    format: 'offline',
  },
  {
    folder: '004_2026-06-08_6.9分享会 _ 不会写代码，怎么用 Codex 做出交互网站',
    type: 'event',
    slug: 'talk-codex-no-code-web-260609',
    domains: ['ai-coding', 'interactive-media'],
    tags: ['codex', 'ai-coding', 'talk'],
    tools: ['codex'],
    summary: '6 月 9 日线上分享会——不会写代码，如何用 Codex 做出可交互的网站。',
    event_date: '2026-06-09',
    format: 'online',
  },
  {
    folder: '089_2025-02-22_ComfyCon：ComfyUI全球首次官方会议在上海！',
    type: 'event',
    slug: 'comfycon-shanghai-250222',
    domains: ['ai-image-generation', 'workflow-automation'],
    tags: ['comfyui', 'comfycon', 'conference'],
    tools: ['comfyui'],
    summary: 'ComfyCon——ComfyUI 全球首次官方会议在上海举办的活动资讯。',
    event_date: '2025-02-22',
    location: '上海',
    format: 'offline',
  },
  {
    folder: '059_2025-08-06_实验编程AI训练营8期报名开启，AI与交互',
    type: 'event',
    slug: 'bootcamp-8-enroll-250806',
    domains: ['ai-image-generation', 'interactive-media'],
    tags: ['bootcamp', 'ai', 'interactive-media', 'enrollment'],
    tools: ['ai'],
    summary: '实验编程 AI 训练营第 8 期「AI 与交互」报名开启。',
    event_date: '2025-08-15',
    format: 'online',
  },
  {
    folder: '267_2024-01-17_“超级明星”AI艺术作品展',
    type: 'event',
    slug: 'superstar-ai-art-exhibition-240117',
    domains: ['ai-art', 'generative-art'],
    tags: ['exhibition', 'ai-art'],
    tools: ['ai'],
    summary: '「超级明星」AI 艺术作品展，实验编程选送社群作品参展。',
    event_date: '2024-01-17',
    format: 'offline',
  },
  {
    folder: '067_2025-06-23_AI画匠：疯狂的独立游戏开发者黄峻的开源项目与艺术探索',
    type: 'event',
    slug: 'talk-ai-painter-huangjun-250623',
    domains: ['ai-image-generation', 'game-development'],
    tags: ['talk', 'indie-game', 'stable-diffusion', 'unity'],
    tools: ['stable-diffusion', 'unity', 'touchdesigner'],
    summary: '社群分享会回顾——独立游戏开发者黄峻的 AI 绘图项目《AI画匠》与开源艺术探索。',
    event_date: '2025-06-23',
    format: 'online',
  },

  // ---------------- PROJECTS ----------------
  {
    folder: '131_2024-11-16_CyberFish 极繁宇宙',
    type: 'project',
    slug: 'cyberfish-maximalist-universe-241116',
    domains: ['generative-art', 'ai-art'],
    tags: ['cyberfish', 'generative-art', 'ai-art'],
    tools: ['ai'],
    summary: 'CyberFish 极繁宇宙——生成式 AI 图像艺术作品。',
  },
  {
    folder: '178_2024-07-25_Junk Floristry 100：废品花道入门',
    type: 'project',
    slug: 'junk-floristry-100-240725',
    domains: ['ai-art', 'generative-art'],
    tags: ['ai-art', 'series'],
    tools: ['ai'],
    summary: 'Junk Floristry 100：废品花道入门，AI 生成图像作品系列。',
  },
  {
    folder: '001_2026-06-16_实验编程十周年：一起建一座自生长的博物馆',
    type: 'project',
    slug: 'code2art-10th-museum-260616',
    domains: ['community', 'open-source'],
    tags: ['museum', 'open-source', '10th-anniversary', 'community'],
    tools: ['ai-agent'],
    summary:
      '实验编程十周年发起的开源共建项目——code2art museum 实验编程博物馆，一个不断自我生长的线上数字展示空间。',
  },
];

// ---- helpers -----------------------------------------------------------------

/** Parse the simple `key: "value"` frontmatter the scraper emits. */
function parseSource(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { fm: {}, body: raw };
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*"?(.*?)"?\s*$/);
    if (kv) fm[kv[1]] = kv[2];
  }
  return { fm, body: m[2] };
}

/** YYYY-MM-DD from "2026-06-16 17:03" or "2021-10-14". */
function toDate(publishTime) {
  const m = (publishTime || '').match(/(\d{4})-(\d{2})-(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : '';
}

/** Clean the article body for the site. */
function cleanBody(body, slug, imageMap) {
  let b = body.replace(/\r\n/g, '\n');
  // Drop any embedded WeChat inline-script garbage from "var __INLINE_SCRIPT__" onward.
  const junkIdx = b.indexOf('var __INLINE_SCRIPT__');
  if (junkIdx !== -1) b = b.slice(0, junkIdx);
  // Remove leading duplicate H1 (the template renders the title separately).
  b = b.replace(/^\s*#\s+[^\n]*\n+/, '');
  // Remove the leading "> author · date" attribution blockquote.
  b = b.replace(/^\s*>\s+[^\n]*\n+/, '');
  // Convert Markdown images ![alt](src "title") to raw <img> tags, rewriting
  // local `images/...` refs to the copied uploads location. We emit raw HTML
  // rather than Markdown image nodes on purpose: Astro's remark-collect-images
  // pass calls URL.canParse(), which is absent on Node < 18.17/20, so a single
  // Markdown image node makes the whole file's body fail to render. Raw <img>
  // becomes an html node (not an image node) and is skipped by that pass —
  // matching how the site's existing tutorials embed images.
  // Map a local `images/<file>` ref to its converted upload (WebP), via imageMap.
  const fixSrc = (src) => {
    let s = src.trim();
    const m = s.match(/(?:^|\/)images\/([^/?#]+)$/);
    if (m) {
      const out = imageMap[m[1]] || m[1];
      return `/uploads/${slug}/${out}`;
    }
    return s;
  };
  b = b.replace(/!\[([^\]]*)\]\(\s*([^)\s]+)(?:\s+"[^"]*")?\s*\)/g, (_m, alt, src) => {
    const a = String(alt).replace(/"/g, '&quot;');
    return `<img src="${fixSrc(src)}" alt="${a}" loading="lazy" />`;
  });
  // Catch any stray non-Markdown references to the local images/ folder.
  b = b.replace(/images\/([A-Za-z0-9._-]+)/g, (_m, file) => `/uploads/${slug}/${imageMap[file] || file}`);
  return b.trim() + '\n';
}

/**
 * Convert an article's images/ into public/uploads/<slug>, downscaling to
 * MAX_WIDTH and re-encoding to WebP (animated for GIFs). SVGs are copied as-is.
 * Returns { list, map }: `list` is the ordered output filenames (list[0] = cover),
 * `map` maps each original filename → its output filename.
 */
function convertImages(srcDir, slug) {
  const imagesDir = path.join(srcDir, 'images');
  if (!fs.existsSync(imagesDir)) return { list: [], map: {} };
  const dest = path.join(UPLOADS_ROOT, slug);
  fs.mkdirSync(dest, { recursive: true });
  const files = fs
    .readdirSync(imagesDir)
    .filter((f) => /\.(jpe?g|png|gif|webp|svg)$/i.test(f))
    .sort();

  const list = [];
  const map = {};
  for (const f of files) {
    const ext = path.extname(f).toLowerCase();
    const inPath = path.join(imagesDir, f);
    if (ext === '.svg') {
      fs.copyFileSync(inPath, path.join(dest, f));
      list.push(f);
      map[f] = f;
      continue;
    }
    const out = path.basename(f, path.extname(f)) + '.webp';
    const outPath = path.join(dest, out);
    const args =
      ext === '.gif'
        ? [inPath, '-coalesce', '-resize', `${MAX_WIDTH}x>`, '-layers', 'optimize', outPath]
        : [inPath, '-resize', `${MAX_WIDTH}x>`, '-quality', String(WEBP_QUALITY), '-strip', outPath];
    const r = spawnSync(MAGICK, args, { encoding: 'utf8' });
    if (r.status === 0 && fs.existsSync(outPath)) {
      list.push(out);
      map[f] = out;
    } else {
      // Fallback: keep the original file if conversion failed.
      fs.copyFileSync(inPath, path.join(dest, f));
      list.push(f);
      map[f] = f;
    }
  }
  return { list, map };
}

function yamlList(arr) {
  return arr.map((v) => `  - ${JSON.stringify(v)}`).join('\n');
}

/** Build the target frontmatter block. */
function buildFrontmatter(entry, src, date, coverFile) {
  const { type, slug } = entry;
  const lines = [];
  lines.push(`id: ${JSON.stringify(`${type}-${slug}-zh`)}`);
  lines.push(`concept_id: ${JSON.stringify(slug)}`);
  lines.push(`type: ${JSON.stringify(type)}`);
  lines.push(`slug: ${JSON.stringify(slug)}`);
  lines.push(`title: ${JSON.stringify(src.fm.title || slug)}`);
  lines.push(`lang: "zh"`);
  if (entry.domains?.length) lines.push(`domains:\n${yamlList(entry.domains)}`);
  if (entry.tags?.length) lines.push(`tags:\n${yamlList(entry.tags)}`);
  lines.push(`status: "canonical"`);
  lines.push(`created: ${JSON.stringify(date)}`);
  lines.push(`updated: ${JSON.stringify(date)}`);
  lines.push(`version: 1`);
  lines.push(`summary: ${JSON.stringify(entry.summary || '')}`);
  if (entry.difficulty) lines.push(`difficulty: ${JSON.stringify(entry.difficulty)}`);
  if (entry.tools?.length) lines.push(`tools:\n${yamlList(entry.tools)}`);
  if (coverFile) lines.push(`coverUrl: ${JSON.stringify(`/uploads/${slug}/${coverFile}`)}`);
  lines.push(`author: ${JSON.stringify(src.fm.author || '实验编程')}`);
  lines.push(`publishedAt: ${JSON.stringify(date)}`);
  if (type === 'event') {
    if (entry.event_date) lines.push(`event_date: ${JSON.stringify(entry.event_date)}`);
    if (entry.end_date) lines.push(`end_date: ${JSON.stringify(entry.end_date)}`);
    if (entry.location) lines.push(`location: ${JSON.stringify(entry.location)}`);
    if (entry.format) lines.push(`format: ${JSON.stringify(entry.format)}`);
  }
  if (src.fm.source) lines.push(`docUrl: ${JSON.stringify(src.fm.source.replace(/#rd$/, ''))}`);
  lines.push(`useDocUrl: false`);
  return `---\n${lines.join('\n')}\n---\n`;
}

// ---- main --------------------------------------------------------------------

let ok = 0;
const report = [];
for (const entry of MANIFEST) {
  const srcDir = path.join(SRC_ROOT, entry.folder);
  const mdPath = path.join(srcDir, 'index.md');
  if (!fs.existsSync(mdPath)) {
    report.push(`SKIP (missing): ${entry.folder}`);
    continue;
  }
  const raw = fs.readFileSync(mdPath, 'utf8');
  const src = parseSource(raw);
  const date = toDate(src.fm.publish_time);
  const { list: images, map: imageMap } = convertImages(srcDir, entry.slug);
  const coverFile = images[0] || null;
  const body = cleanBody(src.body, entry.slug, imageMap);
  const frontmatter = buildFrontmatter(entry, src, date, coverFile);

  const outDir = path.join(CONTENT_ROOT, COLLECTION_DIR[entry.type], 'zh');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${entry.slug}.md`);
  fs.writeFileSync(outPath, frontmatter + '\n' + body, 'utf8');
  ok += 1;
  report.push(
    `OK  [${entry.type}] ${entry.slug}  (imgs:${images.length}${coverFile ? ', cover:' + coverFile : ''})`
  );
}

console.log(report.join('\n'));
console.log(`\nImported ${ok}/${MANIFEST.length} articles.`);

// Full importer: convert ALL scraped WeChat articles into the site's content
// collections (tutorials / events / projects), auto-classifying by keyword
// rules and generating slugs/summaries mechanically.
//
// Usage:
//   node scripts/import-wechat-all.mjs            # real run (converts images, writes md)
//   DRY_RUN=1 node scripts/import-wechat-all.mjs  # report only (no writes, no images)
//   LIMIT=20 DRY_RUN=1 node scripts/import-wechat-all.mjs  # only first 20 folders
//
// Companion to import-wechat-sample.mjs (which hand-curates 12 articles). This
// script skips those 12 so they keep their curated metadata.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const SRC_ROOT = process.env.WECHAT_SRC || 'H:/prjs/claudecode/wechat_pachong/articles';
const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_ROOT = path.join(REPO_ROOT, 'src', 'content');
const UPLOADS_ROOT = path.join(REPO_ROOT, 'public', 'uploads');

const MAGICK = process.env.MAGICK || 'magick';
const MAX_WIDTH = 1280;
const WEBP_QUALITY = 80;
const DRY_RUN = !!process.env.DRY_RUN;
const LIMIT = process.env.LIMIT ? parseInt(process.env.LIMIT, 10) : Infinity;
// STUBS_ONLY: only (re)create content-less articles as placeholder stubs
// (title + link to the original, empty body), skipping everything that already
// has real prose or a cover image. No image conversion. Used to restore the
// scrape-only articles that were otherwise dropped, so they can be filled later.
const STUBS_ONLY = !!process.env.STUBS_ONLY;

const COLLECTION_DIR = { tutorial: 'tutorials', event: 'events', project: 'projects' };

// Folders already imported by import-wechat-sample.mjs — skip to avoid dupes.
const SAMPLE_FOLDERS = new Set([
  '296_2023-10-26_ComfyUI学习笔记2，一文看透Workflow',
  '173_2024-08-03_几何算法与AI绘画结合生成精美纹样',
  '735_2019-11-17_用Blender来学习Python创意编程，实现傅里叶级数可视化',
  '013_2026-03-19_实验工坊｜TouchDesigner互动影像基础',
  '004_2026-06-08_6.9分享会 _ 不会写代码，怎么用 Codex 做出交互网站',
  '089_2025-02-22_ComfyCon：ComfyUI全球首次官方会议在上海！',
  '059_2025-08-06_实验编程AI训练营8期报名开启，AI与交互',
  '267_2024-01-17_“超级明星”AI艺术作品展',
  '067_2025-06-23_AI画匠：疯狂的独立游戏开发者黄峻的开源项目与艺术探索',
  '131_2024-11-16_CyberFish 极繁宇宙',
  '178_2024-07-25_Junk Floristry 100：废品花道入门',
  '001_2026-06-16_实验编程十周年：一起建一座自生长的博物馆',
]);

// ---- classification ----------------------------------------------------------
// Precedence: event > tutorial > project > default(project). Matched against the
// title (and, for a few tutorial signals, the body).
const RULES = {
  event: [
    '训练营', '报名', '开营', '早鸟', '优惠', '福利', '送书', '分享会', '公开课', '工作坊',
    '实验工坊', '大帅课', 'Artiverse', '直播', '讲座', '论坛', '大会', '黑客松', '课程预告',
    '上课通知', '今晚', '本周课', '课表', '开课', '交流会', '线下', '见面会', '沙龙', '展览',
    '特展', '万人展', '征集', '征稿', '投稿', '招募', '门票', 'ComfyCon', '大赛', '挑战赛',
    '研修营', '研修课', '艺术营', '回顾', '预告', '倒计时', '会员', 'Open Call', 'open call',
    '研讨会', '播客',
  ],
  tutorial: [
    '教程', '笔记', '学习', '入门', '安装', '实现', '详解', '解析', '案例', '源码', '源文件',
    '工作流', '参数', '技巧', '方法', '如何', '怎么', '答疑', '课件', '讲义', '单元', '可视化',
    '教学', '开发日志', 'bug', 'Bug', '优化', '配置', '搭建', '全过程', '全攻略', '全流程',
    'Patch a', 'Nature of', '德鲁伊', '完全篇', '基础', '深入', '上手', '快速', '模型训练',
    '刷题', 'LeetCode',
  ],
  project: [
    'CyberFish', 'Cyber Fish', 'AI聊斋', 'AILog', '作品', '数字藏品', 'NFT', 'Generative',
    'generative', '浮世', '极繁', '进化', 'Junk', 'Floating', '克苏鲁', '魔强买瓜', '鱼宙',
    '红包封面', '长图', '壁纸', '剧照', 'AI生成', '一树一人家', '庸宇宙', '真趣园', '生肖',
    'Cyber', '画皮', '陆判',
  ],
};

function classify(title, body) {
  const hay = title;
  for (const kw of RULES.event) if (hay.includes(kw)) return 'event';
  for (const kw of RULES.tutorial) if (hay.includes(kw)) return 'tutorial';
  for (const kw of RULES.project) if (hay.includes(kw)) return 'project';
  // body-based tutorial hint
  if (/```|\bgit clone\b|conda|python |\.py\b/.test(body)) return 'tutorial';
  return 'project'; // default catch-all (art + misc)
}

// ---- helpers (shared with sample importer) -----------------------------------
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

function toDate(publishTime) {
  const m = (publishTime || '').match(/(\d{4})-(\d{2})-(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : '';
}

function makeSlug(title, date, num, used, type) {
  const latin = (title.match(/[A-Za-z0-9][A-Za-z0-9+.#]*/g) || []).slice(0, 6);
  let base = latin
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  // Reject a base with no letters (pure digits/hyphens) or too short to be useful.
  if (!/[a-z]/.test(base) || base.replace(/-/g, '').length < 3) base = '';
  const ymd = date ? date.replace(/-/g, '').slice(2) : String(num).padStart(3, '0');
  let slug = base ? `${base}-${ymd}` : `${type}-${ymd}`;
  if (slug.length > 70) slug = slug.slice(0, 70).replace(/-+$/g, '');
  let s = slug;
  let i = 2;
  while (used.has(s)) s = `${slug}-${i++}`;
  used.add(s);
  return s;
}

// WeChat page-script signature (the scraper sometimes dumps <script> contents
// as text — escaped underscores included). When present we line-filter the body.
const WECHAT_JUNK =
  /__INLINE_SCRIPT__|INLINE\\_SCRIPT|getReportJson|_createForOfIteratorHelper|'use strict'|MicroMessenger|var Device\b/;
const CJK = /[㐀-鿿豈-﫿぀-ヿ]/;
const JS_LINE =
  /[{};]|=>|\bfunction\b|\bvar |\blet |\bconst |\breturn\b|\)\(|\|\||&&|===|!==|\bif\s*\(|\bfor\s*\(|console\.|JSON\.|Math\.|Date\.|document\.|window\.|navigator\.|typeof |prototype|new RegExp|\.(match|replace|push|split|join|indexOf|exec|test)\(/;
function keepLine(line) {
  const s = line.trim();
  if (s === '') return true;
  if (/<img\b|\/uploads\//.test(s)) return true;
  if (JS_LINE.test(s)) return false;
  if (/^\s*<?https?:\/\//i.test(s)) return true;
  if (CJK.test(s)) return true;
  if (/^#{1,6}\s|^[-*]\s+\S|^\d+\.\s|^!\[/.test(s)) return true;
  return false;
}

function cleanBody(body, slug, imageMap) {
  let b = body.replace(/\r\n/g, '\n');
  // Strip leaked WeChat page scripts (keep only real prose / images / links).
  if (WECHAT_JUNK.test(b)) {
    b = b.split('\n').filter(keepLine).join('\n');
  }
  b = b.replace(/^\s*#\s+[^\n]*\n+/, '');
  b = b.replace(/^\s*>\s+[^\n]*\n+/, '');
  const fixSrc = (src) => {
    const s = src.trim();
    const m = s.match(/(?:^|\/)images\/([^/?#]+)$/);
    if (m) return `/uploads/${slug}/${imageMap[m[1]] || m[1]}`;
    return s;
  };
  b = b.replace(/!\[([^\]]*)\]\(\s*([^)\s]+)(?:\s+"[^"]*")?\s*\)/g, (_m, alt, src) => {
    const a = String(alt).replace(/"/g, '&quot;');
    return `<img src="${fixSrc(src)}" alt="${a}" loading="lazy" />`;
  });
  b = b.replace(/images\/([A-Za-z0-9._-]+)/g, (_m, f) => `/uploads/${slug}/${imageMap[f] || f}`);
  // Drop the scraper's "（图片消息 · 共 N 张图片）" placeholder line for image-only posts.
  b = b.replace(/^\s*_?（图片消息[^）]*）_?\s*$/gm, '');
  b = b.replace(/\n{3,}/g, '\n\n');
  return b.trim() + '\n';
}

/** Auto-summary: first meaningful text line of the cleaned body, trimmed. */
function autoSummary(cleaned, title) {
  for (const raw of cleaned.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('<img') || line.startsWith('<a') || line.startsWith('#') || line.startsWith('!') || line.startsWith('---')) continue;
    if (/^_?（图片消息[^）]*）_?$/.test(line)) continue; // image-only placeholder
    const text = line.replace(/[*_`>#]/g, '').replace(/<[^>]+>/g, '').trim();
    if (CJK.test(text) && text.length >= 6) return text.slice(0, 100);
  }
  return title.slice(0, 100);
}

function countImages(srcDir) {
  const d = path.join(srcDir, 'images');
  if (!fs.existsSync(d)) return 0;
  return fs.readdirSync(d).filter((f) => /\.(jpe?g|png|gif|webp|svg)$/i.test(f)).length;
}

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

function buildFrontmatter(type, slug, src, date, summary, tags, coverFile) {
  const lines = [];
  lines.push(`id: ${JSON.stringify(`${type}-${slug}-zh`)}`);
  lines.push(`concept_id: ${JSON.stringify(slug)}`);
  lines.push(`type: ${JSON.stringify(type)}`);
  lines.push(`slug: ${JSON.stringify(slug)}`);
  lines.push(`title: ${JSON.stringify(src.fm.title || slug)}`);
  lines.push(`lang: "zh"`);
  if (tags.length) lines.push(`tags:\n${yamlList(tags)}`);
  lines.push(`status: "canonical"`);
  lines.push(`created: ${JSON.stringify(date)}`);
  lines.push(`updated: ${JSON.stringify(date)}`);
  lines.push(`version: 1`);
  lines.push(`summary: ${JSON.stringify(summary)}`);
  if (coverFile) lines.push(`coverUrl: ${JSON.stringify(`/uploads/${slug}/${coverFile}`)}`);
  lines.push(`author: ${JSON.stringify(src.fm.author || '实验编程')}`);
  lines.push(`publishedAt: ${JSON.stringify(date)}`);
  if (type === 'event') {
    if (date) lines.push(`event_date: ${JSON.stringify(date)}`);
    lines.push(`format: "online"`);
  }
  if (src.fm.source) lines.push(`docUrl: ${JSON.stringify(src.fm.source.replace(/#rd$/, ''))}`);
  lines.push(`useDocUrl: false`);
  return `---\n${lines.join('\n')}\n---\n`;
}

/** Derive a few tags from latin tokens in the title. */
function deriveTags(title, type) {
  const latin = (title.match(/[A-Za-z][A-Za-z0-9+.#]{1,}/g) || [])
    .map((s) => s.toLowerCase())
    .filter((s) => s.length >= 2 && s.length <= 20);
  const uniq = [...new Set(latin)].slice(0, 4);
  if (!uniq.length) uniq.push(type);
  return uniq;
}

// ---- preload existing slugs so we never collide --------------------------------
const used = new Set();
const existingDocUrls = new Set(); // source URLs already represented on disk
for (const dir of Object.values(COLLECTION_DIR)) {
  for (const lang of ['zh', 'en']) {
    const p = path.join(CONTENT_ROOT, dir, lang);
    if (!fs.existsSync(p)) continue;
    for (const f of fs.readdirSync(p)) {
      if (!f.endsWith('.md')) continue;
      used.add(f.replace(/\.md$/, ''));
      const du = fs.readFileSync(path.join(p, f), 'utf8').match(/^docUrl:\s*"([^"]*)"/m);
      if (du) existingDocUrls.add(du[1].replace(/#rd$/, ''));
    }
  }
}

// ---- main --------------------------------------------------------------------
const folders = fs
  .readdirSync(SRC_ROOT, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

const counts = { tutorial: 0, event: 0, project: 0 };
const skipped = [];
const samplePreview = [];
const stubs = [];
let processed = 0;

for (const folder of folders) {
  if (processed >= LIMIT) break;
  if (SAMPLE_FOLDERS.has(folder)) {
    skipped.push(`sample: ${folder}`);
    continue;
  }
  const srcDir = path.join(SRC_ROOT, folder);
  const mdPath = path.join(srcDir, 'index.md');
  if (!fs.existsSync(mdPath)) {
    skipped.push(`no-md: ${folder}`);
    continue;
  }
  const raw = fs.readFileSync(mdPath, 'utf8');
  const src = parseSource(raw);
  const title = src.fm.title || folder;
  const date = toDate(src.fm.publish_time) || toDate(folder);
  const num = parseInt(folder.slice(0, 3), 10) || 0;

  // peek body for classification + emptiness check
  let peek = src.body.replace(/\r\n/g, '\n');
  const j = peek.indexOf('var __INLINE_SCRIPT__');
  if (j !== -1) peek = peek.slice(0, j);
  const textOnly = peek.replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/<[^>]+>/g, '').replace(/\s+/g, '');
  const imgCount = countImages(srcDir);

  if (STUBS_ONLY) {
    // Recreate only content-less stubs (no images, no real prose after cleaning)
    // that are NOT already on disk (matched by their unique source URL).
    if (imgCount > 0) continue; // has a cover → real card already exists
    const srcUrl = (src.fm.source || '').replace(/#rd$/, '');
    if (srcUrl && existingDocUrls.has(srcUrl)) continue; // already represented
    const sType = classify(title, peek);
    const probe = cleanBody(src.body, 'stub', {});
    if (CJK.test(probe) || /<img\b/.test(probe)) continue; // real content → exists
    const sSlug = makeSlug(title, date, num, used, sType);
    const sOutDir = path.join(CONTENT_ROOT, COLLECTION_DIR[sType], 'zh');
    const sOutPath = path.join(sOutDir, `${sSlug}.md`);
    if (fs.existsSync(sOutPath)) continue;
    const sFm = buildFrontmatter(sType, sSlug, src, date, title.slice(0, 100), deriveTags(title, sType), null);
    const link = (src.fm.source || '').replace(/#rd$/, '');
    const stubBody =
      `> 本文原为图文 / 视频内容，抓取时未获取到正文与配图，待后续补充。\n` +
      (link ? `\n[查看微信原文 ↗](${link})\n` : '');
    if (!DRY_RUN) {
      fs.mkdirSync(sOutDir, { recursive: true });
      fs.writeFileSync(sOutPath, sFm + '\n' + stubBody, 'utf8');
    }
    counts[sType] += 1;
    processed += 1;
    stubs.push(`${sType}/${sSlug}`);
    continue;
  }

  if (textOnly.length < 15 && imgCount === 0) {
    skipped.push(`empty: ${folder}`);
    continue;
  }

  const type = classify(title, peek);
  const slug = makeSlug(title, date, num, used, type);
  counts[type] += 1;
  processed += 1;

  if (DRY_RUN) {
    if (samplePreview.length < 40) samplePreview.push(`${type.padEnd(8)} ${slug.padEnd(40)} imgs:${imgCount}  ${title.slice(0, 30)}`);
    continue;
  }

  const { list: images, map: imageMap } = convertImages(srcDir, slug);
  const coverFile = images[0] || null;
  const body = cleanBody(src.body, slug, imageMap);

  // Skip articles left empty after stripping junk and with no cover image —
  // these are scrapes that captured only WeChat page scripts, nothing real.
  const hasContent = CJK.test(body) || /<img\b|\/uploads\//.test(body);
  if (!hasContent && !coverFile) {
    counts[type] -= 1;
    processed -= 1;
    skipped.push(`empty-after-clean: ${folder}`);
    continue;
  }

  const summary = autoSummary(body, title);
  const tags = deriveTags(title, type);
  const frontmatter = buildFrontmatter(type, slug, src, date, summary, tags, coverFile);

  const outDir = path.join(CONTENT_ROOT, COLLECTION_DIR[type], 'zh');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, `${slug}.md`), frontmatter + '\n' + body, 'utf8');
  if (processed % 50 === 0) console.log(`...processed ${processed}`);
}

if (STUBS_ONLY) {
  console.log(`${DRY_RUN ? '[DRY] ' : ''}stubs created: ${stubs.length}`);
  console.log(stubs.slice(0, 60).join('\n'));
}
console.log('\n=== classification counts ===');
console.log(counts, 'total:', counts.tutorial + counts.event + counts.project);
console.log('=== skipped ===', skipped.length);
const byReason = {};
for (const s of skipped) {
  const r = s.split(':')[0];
  byReason[r] = (byReason[r] || 0) + 1;
}
console.log(byReason);
if (DRY_RUN) {
  console.log('\n=== sample (first 40) ===');
  console.log(samplePreview.join('\n'));
  console.log('\n[DRY_RUN] no files written, no images converted.');
}

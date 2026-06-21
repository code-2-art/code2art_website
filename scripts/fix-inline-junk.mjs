// One-off repair: strip embedded WeChat page-script junk that leaked into
// imported article bodies (and their auto-summaries). The scraper dumped the
// contents of several <script> blocks as plain text (device detection, report
// loggers, minified helpers) — the same ~2000-line boilerplate in every
// affected article. We only touch files that carry an unmistakable
// WeChat-script signature, and within those we KEEP only Chinese prose,
// images, headings and URLs, dropping everything that looks like code — so
// legitimate tutorials are never affected (they lack the signature).
//
// Usage:           node scripts/fix-inline-junk.mjs
//        DRY:  DRY=1 node scripts/fix-inline-junk.mjs   (report only)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_ROOT = path.join(REPO_ROOT, 'src', 'content');
const DIRS = ['tutorials', 'events', 'projects'].map((c) => path.join(CONTENT_ROOT, c, 'zh'));
const DRY = !!process.env.DRY;

// A file is "polluted" only if it contains one of these WeChat page-script
// markers — none of which occur in genuine article prose.
const POLLUTION =
  /__INLINE_SCRIPT__|INLINE\\_SCRIPT|getReportJson|_createForOfIteratorHelper|'use strict'|MicroMessenger|var Device\b/;

// CJK ranges via escapes (literal CJK in source is fragile across encodings).
const CJK = /[㐀-鿿豈-﫿぀-ヿ]/;
const URLISH = /^\s*<?https?:\/\//i;
const IMG = /<img\b|\/uploads\//;

// Code signature — drop these lines even when they embed Chinese string
// literals (WeChat's console.warn / comments often do).
const JS_LINE =
  /[{};]|=>|\bfunction\b|\bvar |\blet |\bconst |\breturn\b|\)\(|\|\||&&|===|!==|\bif\s*\(|\bfor\s*\(|console\.|JSON\.|Math\.|Date\.|document\.|window\.|navigator\.|typeof |prototype|new RegExp|\.(match|replace|push|split|join|indexOf|exec|test)\(/;

/** Keep a line only if it is real article content, not leaked script. */
function isContentLine(line) {
  const s = line.trim();
  if (s === '') return true; // blank (collapsed later)
  if (IMG.test(s)) return true; // images
  if (JS_LINE.test(s)) return false; // code — drop first, even if it has CJK
  if (URLISH.test(s)) return true; // bare links
  if (CJK.test(s)) return true; // Chinese / Japanese prose
  if (/^#{1,6}\s|^[-*]\s+\S|^\d+\.\s|^!\[/.test(s)) return true; // md structure
  return false; // non-CJK, no content signal → junk
}

function autoSummary(cleaned, title) {
  for (const raw of cleaned.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('<img') || line.startsWith('#') || line.startsWith('!') || line.startsWith('---')) continue;
    const text = line.replace(/[*`>#]/g, '').trim();
    if (CJK.test(text) && text.length >= 6) return text.slice(0, 100);
  }
  return title.slice(0, 100);
}

let fixed = 0;
let deleted = 0;
const report = [];
for (const dir of DIRS) {
  if (!fs.existsSync(dir)) continue;
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith('.md')) continue;
    const fp = path.join(dir, name);
    const raw = fs.readFileSync(fp, 'utf8');
    if (!POLLUTION.test(raw)) continue;

    const m = raw.match(/^(---\r?\n[\s\S]*?\r?\n---\r?\n)([\s\S]*)$/);
    if (!m) continue;
    let fm = m[1];
    const beforeLines = m[2].split(/\r?\n/).length;

    let body = m[2]
      .split(/\r?\n/)
      .filter(isContentLine)
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    body = body ? body + '\n' : '\n';
    const afterLines = body.split('\n').filter((l) => l.trim()).length;

    const titleMatch = fm.match(/^title:\s*"([\s\S]*?)"\s*$/m);
    const title = titleMatch ? titleMatch[1] : name.replace(/\.md$/, '');
    const summary = autoSummary(body, title);
    fm = fm.replace(/^summary:.*$/m, `summary: ${JSON.stringify(summary)}`);

    // After stripping, is anything publishable left? (real prose, a body image,
    // or a cover image in the frontmatter.)
    const hasBody = CJK.test(body) || IMG.test(body);
    const hasCover = /^coverUrl:/m.test(fm);
    if (!hasBody && !hasCover) {
      // Unrecoverable stub: scraper captured only page scripts, no content/cover.
      const slug = name.replace(/\.md$/, '');
      report.push(`DELETE ${name} (empty, no cover)`);
      if (!DRY) {
        fs.rmSync(fp);
        const up = path.join(REPO_ROOT, 'public', 'uploads', slug);
        if (fs.existsSync(up)) fs.rmSync(up, { recursive: true, force: true });
      }
      deleted += 1;
      continue;
    }

    report.push(`clean ${name}: ${beforeLines}→${afterLines} lines | ${summary.slice(0, 30)}`);
    if (!DRY) fs.writeFileSync(fp, fm + '\n' + body, 'utf8');
    fixed += 1;
  }
}

console.log(`${DRY ? '[DRY] ' : ''}cleaned ${fixed}, deleted ${deleted} (empty stubs).\n`);
console.log(report.join('\n'));

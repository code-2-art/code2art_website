// Polish image-only posts: the scraper prefixes their body with a placeholder
// line like `_（图片消息 · 共 6 张图片）_`, which the importer then picked up as
// the summary. Remove that placeholder line and regenerate the summary from the
// first real prose line (falling back to the title).
//
// Usage:  [DRY=1] node scripts/fix-image-msg.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_ROOT = path.join(REPO_ROOT, 'src', 'content');
const DIRS = ['tutorials', 'events', 'projects'].map((c) => path.join(CONTENT_ROOT, c, 'zh'));
const DRY = !!process.env.DRY;

const CJK = /[㐀-鿿豈-﫿぀-ヿ]/;
const PLACEHOLDER = /^\s*_?（图片消息[^）]*）_?\s*$/;

function firstProse(body, title) {
  for (const raw of body.split('\n')) {
    const s = raw.trim();
    if (!s || PLACEHOLDER.test(s)) continue;
    if (s.startsWith('<img') || s.startsWith('!') || s.startsWith('#') || s.startsWith('<a')) continue;
    const text = s.replace(/[*`>#]/g, '').replace(/<[^>]+>/g, '').trim();
    if (CJK.test(text) && text.length >= 6) return text.slice(0, 100);
  }
  return title.slice(0, 100);
}

let changed = 0;
for (const dir of DIRS) {
  if (!fs.existsSync(dir)) continue;
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith('.md')) continue;
    const fp = path.join(dir, name);
    const raw = fs.readFileSync(fp, 'utf8');
    const m = raw.match(/^(---\r?\n[\s\S]*?\r?\n---\r?\n)([\s\S]*)$/);
    if (!m) continue;
    let fm = m[1];
    let body = m[2];
    const hasPlaceholderLine = body.split('\n').some((l) => PLACEHOLDER.test(l));
    const summaryIsPlaceholder = /^summary:\s*".*图片消息.*"/m.test(fm);
    if (!hasPlaceholderLine && !summaryIsPlaceholder) continue;

    // Drop placeholder line(s); collapse resulting blank gaps.
    body = body
      .split('\n')
      .filter((l) => !PLACEHOLDER.test(l))
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .replace(/^\n+/, '');

    // Only regenerate the summary if it is itself the placeholder — never
    // clobber a hand-curated or already-meaningful summary.
    if (summaryIsPlaceholder) {
      const titleMatch = fm.match(/^title:\s*"([\s\S]*?)"\s*$/m);
      const title = titleMatch ? titleMatch[1] : name.replace(/\.md$/, '');
      const summary = firstProse(body, title);
      fm = fm.replace(/^summary:.*$/m, `summary: ${JSON.stringify(summary)}`);
    }

    if (!DRY) fs.writeFileSync(fp, fm + '\n' + body, 'utf8');
    changed += 1;
  }
}
console.log(`${DRY ? '[DRY] would update' : 'Updated'} ${changed} image-only posts.`);

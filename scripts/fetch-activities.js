// Node 18+ (原生 fetch)
// 用法：node scripts/fetch-activities.js
// 从"活动独立表"抓取数据 → 生成 src/content/activities/{slug}.md
import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import {
  env, FIELD, listAllRecords, toLinkMaybe, toUrlMaybe,
  download, enrichContentHtmlFromDocIfNeeded, mapRecordBase,
  getTenantAccessToken,
} from './feishu-common.js';
import { htmlToMarkdown, buildMarkdownFile } from './markdown-util.js';

const OUT_DIR = 'src/content/activities';
const ASSET_DIR = 'public/uploads';
const DOWNLOAD_ASSETS = process.env.DOWNLOAD_ASSETS === '1';

function mapRecord(rec, contentHtmlResolved) {
  const base = mapRecordBase(rec, contentHtmlResolved);
  const f = rec.fields || rec;
  return {
    ...base,
    docUrl: toLinkMaybe(f[FIELD.docUrl]) ?? undefined,
    date: f[FIELD.publishedAt] ?? undefined, // 可替换为独立的"活动时间"列
  };
}

async function main() {
  const token = await getTenantAccessToken(env('FEISHU_APP_ID'), env('FEISHU_APP_SECRET'));
  const items = await listAllRecords({
    appToken: env('FEISHU_ACTIVITIES_APP_TOKEN'),
    tableId: env('FEISHU_ACTIVITIES_TABLE_ID'),
    viewId: process.env.FEISHU_ACTIVITIES_VIEW_ID,
  });

  const acts = [];
  for (const it of items) {
    const html = await enrichContentHtmlFromDocIfNeeded(it, token);
    acts.push(mapRecord(it, html));
  }

  acts.sort((a, b) => new Date(b.date ?? 0) - new Date(a.date ?? 0));

  if (DOWNLOAD_ASSETS) {
    for (const a of acts) {
      if (a.coverUrl?.startsWith('http')) {
        try { a.coverUrl = await download(a.coverUrl, ASSET_DIR); } catch (e) { console.warn('cover download failed:', a.coverUrl, e.message); }
      }
      if (a.authorAvatarUrl?.startsWith('http')) {
        try { a.authorAvatarUrl = await download(a.authorAvatarUrl, ASSET_DIR); } catch (e) { console.warn('avatar download failed:', a.authorAvatarUrl, e.message); }
      }
    }
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const writtenFiles = new Set();
  for (const a of acts) {
    const frontmatter = {
      title: a.title,
      slug: a.slug,
      summary: a.summary,
      coverUrl: a.coverUrl,
      tags: a.tags,
      author: a.author,
      authorAvatarUrl: a.authorAvatarUrl,
      date: a.date,
      docUrl: a.docUrl,
    };
    const body = htmlToMarkdown(a.contentHtml || '');
    const md = buildMarkdownFile(frontmatter, body);
    const filename = `${a.slug}.md`;
    fs.writeFileSync(path.join(OUT_DIR, filename), md, 'utf-8');
    writtenFiles.add(filename);
  }

  // Remove stale .md files that no longer exist upstream
  for (const f of fs.readdirSync(OUT_DIR)) {
    if (f.endsWith('.md') && !writtenFiles.has(f)) {
      fs.unlinkSync(path.join(OUT_DIR, f));
      console.log(`🗑  Removed stale file: ${f}`);
    }
  }

  console.log(`✅ Wrote ${acts.length} activities → ${OUT_DIR}/`);
}

main().catch((e) => { console.error(e); process.exit(1); });

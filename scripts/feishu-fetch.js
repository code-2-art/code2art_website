// Node 18+ (原生 fetch)
// 用法：node scripts/feishu-fetch.js
// 从「博客主表」抓取数据 → 生成 public/feeds/posts.json（可选下载封面/头像到本地）
import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import {
  env, FIELD, listAllRecords, toUrlMaybe,
  download, enrichContentHtmlFromDocIfNeeded, mapRecordBase,
  getTenantAccessToken,
} from './feishu-common.js';

const OUT_DIR = 'public/feeds';
const ASSET_DIR = 'public/uploads';
const DOWNLOAD_ASSETS = process.env.DOWNLOAD_ASSETS === '1';

function mapRecord(rec, contentHtmlResolved) {
  const base = mapRecordBase(rec, contentHtmlResolved);
  const f = rec.fields || rec;
  return {
    ...base,
    docUrl: toUrlMaybe(f[FIELD.docUrl]) ?? undefined,
    publishedAt: f[FIELD.publishedAt] ?? undefined,
  };
}

async function localizeHtmlImages(html) {
  if (!html || !DOWNLOAD_ASSETS) return html;
  const re = /<img\b[^>]*?src=["']([^"']+)["'][^>]*?>/gi;
  const replacements = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    const src = m[1];
    if (typeof src !== 'string') continue;
    if (!/^https?:\/\//i.test(src)) continue;
    try {
      const local = await download(src, ASSET_DIR);
      replacements.push({ from: src, to: local });
    } catch (e) {
      console.warn('embed image download failed:', src, e.message);
    }
  }
  let out = html;
  for (const r of replacements) {
    out = out.split(r.from).join(r.to);
  }
  return out;
}

async function main() {
  const token = await getTenantAccessToken(env('FEISHU_APP_ID'), env('FEISHU_APP_SECRET'));
  const items = await listAllRecords({
    appToken: env('FEISHU_APP_TOKEN'),
    tableId: env('FEISHU_TABLE_ID'),
    viewId: process.env.FEISHU_VIEW_ID,
  });

  const posts = [];
  for (const it of items) {
    let html = await enrichContentHtmlFromDocIfNeeded(it, token);
    if (DOWNLOAD_ASSETS) {
      html = await localizeHtmlImages(html);
    }
    posts.push(mapRecord(it, html));
  }

  posts.sort((a, b) => new Date(b.publishedAt ?? 0) - new Date(a.publishedAt ?? 0));

  if (DOWNLOAD_ASSETS) {
    for (const p of posts) {
      if (typeof p.coverUrl === 'string' && p.coverUrl.startsWith('http')) {
        try { p.coverUrl = await download(p.coverUrl, ASSET_DIR); } catch (e) { console.warn('cover download failed:', p.coverUrl, e.message); }
      }
      if (typeof p.authorAvatarUrl === 'string' && p.authorAvatarUrl.startsWith('http')) {
        try { p.authorAvatarUrl = await download(p.authorAvatarUrl, ASSET_DIR); } catch (e) { console.warn('avatar download failed:', p.authorAvatarUrl, e.message); }
      }
    }
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'posts.json'), JSON.stringify(posts, null, 2), 'utf-8');
  console.log(`✅ Wrote ${posts.length} posts → ${path.join(OUT_DIR, 'posts.json')}`);
}

main().catch((e) => { console.error(e); process.exit(1); });

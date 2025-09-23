// Node 18+ (原生 fetch)
// 用法：node scripts/feishu-fetch.js
//从「博客主表」抓取数据 → 生成 public/feeds/posts.json（可选下载封面/头像到本地）
// scripts/feishu-fetch.js
import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { API_BASE, parseDocLink, getTenantAccessToken, fetchDocHtml } from './feishu-doc-util.js';

const OUT_DIR = 'public/feeds';
const ASSET_DIR = 'public/uploads';
const DOWNLOAD_ASSETS = process.env.DOWNLOAD_ASSETS === '1';

function env(name, fallback) {
  const v = process.env[name];
  if (v && v !== '') return v;
  if (fallback !== undefined) return fallback;
  throw new Error(`Missing env: ${name}`);
}

const FIELD = {
  title: env('FIELD_TITLE', '标题'),
  slug: env('FIELD_SLUG', 'slug'),
  summary: env('FIELD_SUMMARY', '摘要'),
  contentHtml: env('FIELD_CONTENT_HTML', '正文HTML'),
  coverUrl: env('FIELD_COVER_URL', '封面URL'),
  tags: env('FIELD_TAGS', '标签'),
  author: env('FIELD_AUTHOR', '作者'),
  authorAvatarUrl: env('FIELD_AUTHOR_AVATAR_URL', '作者头像URL'),
  publishedAt: env('FIELD_PUBLISHED_AT', '发布日期'),
  docUrl: env('FIELD_DOC_URL', '文档URL'),
};

async function listAllRecords({ appToken, tableId, viewId }) {
  const token = await getTenantAccessToken(env('FEISHU_APP_ID'), env('FEISHU_APP_SECRET'));
  const out = [];
  let pageToken;
  while (true) {
    const url = new URL(`${API_BASE}/bitable/v1/apps/${appToken}/tables/${tableId}/records`);
    url.searchParams.set('page_size', '200');
    if (viewId) url.searchParams.set('view_id', viewId);
    if (pageToken) url.searchParams.set('page_token', pageToken);
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    // console.log(res);
    if (!res.ok) throw new Error(`List records failed: ${res.status}`);
    const data = await res.json();
    if (data.code !== 0) throw new Error(`List error: ${data.code} ${data.msg}`);
    out.push(...(data.data.items ?? data.data.records ?? []));
    if (!data.data.has_more) break;
    pageToken = data.data.page_token;
  }
  return out;
}

function arr(v) {
  if (!v) return undefined;
  if (Array.isArray(v)) return v.map(x => (typeof x === 'string' ? x : x?.text ?? x?.name ?? '')).filter(Boolean);
  if (typeof v === 'string') return v.split(',').map(s => s.trim()).filter(Boolean);
  return undefined;
}

function toUrlMaybe(v) {
  if (!v) return undefined;
  if (typeof v === 'string') return v;
  if (Array.isArray(v)) {
    const first = v[0];
    if (!first) return undefined;
    if (typeof first === 'string') return first;
    return first.url ?? first.link ?? first.href ?? first.src ?? undefined;
  }
  if (typeof v === 'object') return v.url ?? v.link ?? v.href ?? v.src ?? undefined;
  return undefined;
}

async function enrichContentHtmlFromDocIfNeeded(item, token) {
  const f = item.fields || item;
  const currentHtml = f[FIELD.contentHtml];
  if (currentHtml && String(currentHtml).trim() !== '') return currentHtml;

  const link = f[FIELD.docUrl];
  const parsed = parseDocLink(link);
  if (!parsed) return currentHtml;

  if (parsed.type === 'doc') {
    try {
      const html = await fetchDocHtml({ docId: parsed.id, token });
      return html || currentHtml;
    } catch (e) {
      console.warn('[doc] fetch html failed:', e?.message || e);
      return currentHtml;
    }
  } else {
    // docx：当前 API 不直接返回 HTML，这里给到提示（可改为自研渲染器）
    console.warn(`[docx] ${parsed.id} 暂未自动转换为 HTML，请先在表格「${FIELD.contentHtml}」列粘贴正文 HTML，或后续接入 docx→HTML 渲染器。`);
    return currentHtml;
  }
}

async function download(url, destDir) {
  const u = new URL(url);
  const base = path.basename(u.pathname).split('?')[0] || `asset-${Date.now()}`;
  const file = path.join(destDir, base);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(file, buf);
  return file.replace(/^public\//, '/');
}

function mapRecord(rec, contentHtmlResolved) {
  const f = rec.fields || rec;
  const slug = f[FIELD.slug] || rec.record_id;
  return {
    id: rec.record_id || slug,
    slug,
    title: f[FIELD.title] ?? '',
    summary: f[FIELD.summary] ?? undefined,
    contentHtml: contentHtmlResolved ?? f[FIELD.contentHtml] ?? undefined,
    coverUrl: toUrlMaybe(f[FIELD.coverUrl]) ?? undefined,
    docUrl: toUrlMaybe(f[FIELD.docUrl]) ?? undefined,
    tags: arr(f[FIELD.tags]),
    author: f[FIELD.author] ?? undefined,
    authorAvatarUrl: toUrlMaybe(f[FIELD.authorAvatarUrl]) ?? undefined,
    publishedAt: f[FIELD.publishedAt] ?? undefined,
  };
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
    const html = await enrichContentHtmlFromDocIfNeeded(it, token);
    posts.push(mapRecord(it, html));
  }

  posts.sort((a,b)=> new Date(b.publishedAt ?? 0) - new Date(a.publishedAt ?? 0));

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

main().catch((e)=>{ console.error(e); process.exit(1); });

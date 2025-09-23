const API_BASE = 'https://open.feishu.cn/open-apis';

const USE_FEEDS = (import.meta as any).env?.USE_FEEDS === '1' || process.env.USE_FEEDS === '1';
const isServer = import.meta.env.SSR;

function env(name: string, fallback?: string) {
  const v = (import.meta as any).env?.[name] ?? process.env[name];
  if (v) return v as string;
  if (fallback !== undefined) return fallback;
  throw new Error(`Missing env: ${name}`);
}

export type Post = {
  id: string;
  slug: string;
  title: string;
  summary?: string;
  contentHtml?: string;
  coverUrl?: string;
  tags?: string[];
  author?: string;
  authorAvatarUrl?: string;
  publishedAt?: string; // ISO
  docUrl?:string; //文档链接
};

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

async function getTenantAccessToken() {
  const res = await fetch(`${API_BASE}/auth/v3/tenant_access_token/internal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      app_id: env('FEISHU_APP_ID'),
      app_secret: env('FEISHU_APP_SECRET'),
    }),
  });
  if (!res.ok) throw new Error(`Get tenant_access_token failed: ${res.status}`);
  const data = await res.json();
  if (data.code !== 0) throw new Error(`Feishu auth error: ${data.code} ${data.msg}`);
  return data.tenant_access_token as string;
}

async function listAllRecordsGeneric(appToken: string, tableId: string, viewId?: string) {
  const token = await getTenantAccessToken();
  const out: any[] = [];
  let pageToken: string | undefined;

  while (true) {
    const url = new URL(`${API_BASE}/bitable/v1/apps/${appToken}/tables/${tableId}/records`);
    url.searchParams.set('page_size', '200');
    if (viewId) url.searchParams.set('view_id', viewId);
    if (pageToken) url.searchParams.set('page_token', pageToken);

    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) throw new Error(`Feishu list records failed: ${res.status}`);
    const data = await res.json();
    if (data.code !== 0) throw new Error(`Feishu list error: ${data.code} ${data.msg}`);

    const items = data.data.items ?? data.data.records ?? [];
    out.push(...items);
    const hasMore = data.data.has_more ?? false;
    pageToken = data.data.page_token;
    if (!hasMore || !pageToken) break;
  }
  return out;
}

function toArrayMaybe(v: any): string[] | undefined {
  if (!v) return undefined;
  if (Array.isArray(v)) return v.map((x) => (typeof x === 'string' ? x : x?.text ?? x?.name ?? '')).filter(Boolean);
  if (typeof v === 'string') return v.split(',').map((s) => s.trim()).filter(Boolean);
  return undefined;
}

function toLinkMaybe(v: any): string | undefined {
  if (!v) return undefined;
  if (typeof v === 'string') return v;
  if (Array.isArray(v)) {
    const first = v[0];
    if (!first) return undefined;
    if (typeof first === 'string') return first;
    return (first as any).link ?? (first as any).url ?? (first as any).href ?? undefined;
  }
  if (typeof v === 'object') return (v as any).link ?? (v as any).url ?? (v as any).href ?? undefined;
  return undefined;
}

function mapRecordToPost(rec: any): Post {
  const f = rec.fields || rec;
  const slug = (f[FIELD.slug] as string) || rec.record_id;
  return {
    id: rec.record_id || slug,
    slug,
    title: (f[FIELD.title] as string) ?? '',
    summary: f[FIELD.summary] as string | undefined,
    contentHtml: f[FIELD.contentHtml] as string | undefined,
    coverUrl: f[FIELD.coverUrl] as string | undefined,
    tags: toArrayMaybe(f[FIELD.tags]),
    author: f[FIELD.author] as string | undefined,
    authorAvatarUrl: f[FIELD.authorAvatarUrl] as string | undefined,
    publishedAt: f[FIELD.publishedAt] as string | undefined,
    docUrl: toLinkMaybe(f[FIELD.docUrl]),
  };
}

function sortByPublishedAtDesc<T extends { publishedAt?: string }>(arr: T[]) {
  return [...arr].sort(
    (a, b) => new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime(),
  );
}

/** 博客：主表 */
let _postsCache: Post[] | null = null;
export async function getPosts(limit?: number): Promise<Post[]> {
  if (USE_FEEDS) {
    const all = await readFeedJson('posts.json');
    return limit ? all.slice(0, limit) : all;
  }
  if (_postsCache) return limit ? _postsCache.slice(0, limit) : _postsCache;
  const appToken = env('FEISHU_APP_TOKEN');
  const tableId = env('FEISHU_TABLE_ID');
  const viewId = process.env['FEISHU_VIEW_ID'] ?? (import.meta as any).env?.['FEISHU_VIEW_ID'];
  const items = await listAllRecordsGeneric(appToken, tableId, viewId as string | undefined);
  _postsCache = sortByPublishedAtDesc(items.map(mapRecordToPost).filter(p => p.title && p.slug));
  return limit ? _postsCache.slice(0, limit) : _postsCache;
}

/** 活动：独立表（APP/TABLE/VIEW 走另一组 env） */
let _actsCache: Post[] | null = null;
export async function getActivities(limit?: number): Promise<Post[]> {
  if (_actsCache) return limit ? _actsCache.slice(0, limit) : _actsCache;
  const appToken = env('FEISHU_ACTIVITIES_APP_TOKEN');
  const tableId = env('FEISHU_ACTIVITIES_TABLE_ID');
  const viewId = process.env['FEISHU_ACTIVITIES_VIEW_ID'] ?? (import.meta as any).env?.['FEISHU_ACTIVITIES_VIEW_ID'];
  const items = await listAllRecordsGeneric(appToken, tableId, viewId as string | undefined);
  _actsCache = sortByPublishedAtDesc(items.map(mapRecordToPost).filter(p => p.title && p.slug));
  return limit ? _actsCache.slice(0, limit) : _actsCache;
}

/** 单篇文章 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find(p => p.slug === slug) ?? null;
}

function parseDocLink(url?: string) {
  if (!url) return null;
  try {
    const u = new URL(url);
    // console.log("url==========", u, url);
    const mDocx = u.pathname.match(/\/docx\/([A-Za-z0-9]+)/);//  /\\/docx\\/([A-Za-z0-9]+)/
    if (mDocx) return { type: 'docx', id: mDocx[1] };
    const mDoc = u.pathname.match(/\/doc\/([A-Za-z0-9]+)/);
    if (mDoc) return { type: 'doc', id: mDoc[1] };
    return null;
  } catch { return null; }
}

async function fetchDocHtml(docId: string, token: string) {
  const res = await fetch(`https://open.feishu.cn/open-apis/doc/v2/${docId}/content`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  return (
    (data?.data?.content?.content ?? data?.data?.content ?? data?.content ?? '') as string
  );
}

async function enrichHtmlIfNeeded(f: any, token: string) {
  const current = f[FIELD.contentHtml];
  if (current && String(current).trim() !== '') return current;
  const parsed = parseDocLink(f[FIELD.docUrl]);
  if (!parsed) return current;
  if (parsed.type === 'doc') {
    try { return await fetchDocHtml(parsed.id, token); }
    catch { return current; }
  } else {
    console.warn(`[docx] ${parsed.id} 暂未自动转换为 HTML，建议先把正文贴到「${FIELD.contentHtml}」列。`);
    return current;
  }
}

/** 读取 public/feeds/*.json，SSR 用 fs，浏览器用 fetch */
async function readFeedJson(name: string) {
  if (isServer) {
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    // 构建期从项目根目录读取 public/feeds/*.json
    const file = path.join(process.cwd(), 'public', 'feeds', name);
    const txt = await fs.readFile(file, 'utf-8');
    return JSON.parse(txt);
  } else {
    const res = await fetch(`/feeds/${name}`);
    if (!res.ok) throw new Error(`Fetch failed: /feeds/${name}`);
    return await res.json();
  }
}
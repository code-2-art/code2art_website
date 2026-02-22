const API_BASE = 'https://open.feishu.cn/open-apis';

export const USE_FEEDS = (import.meta as any).env?.USE_FEEDS === '1' || process.env.USE_FEEDS === '1';
export const isServer = import.meta.env.SSR;

export function env(name: string, fallback?: string) {
  const v = (import.meta as any).env?.[name] ?? process.env[name];
  if (v) return v as string;
  if (fallback !== undefined) return fallback;
  throw new Error(`Missing env: ${name}`);
}

export const FIELD = {
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

export async function getTenantAccessToken() {
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

export async function listAllRecords(appToken: string, tableId: string, viewId?: string) {
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

export function toArrayMaybe(v: any): string[] | undefined {
  if (!v) return undefined;
  if (Array.isArray(v)) return v.map((x) => (typeof x === 'string' ? x : x?.text ?? x?.name ?? '')).filter(Boolean);
  if (typeof v === 'string') return v.split(',').map((s) => s.trim()).filter(Boolean);
  return undefined;
}

export function toLinkMaybe(v: any): string | undefined {
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

export function toUrlMaybe(v: any): string | undefined {
  if (!v) return undefined;
  if (typeof v === 'string') return v;
  if (Array.isArray(v)) {
    const first = v[0];
    if (!first) return undefined;
    if (typeof first === 'string') return first;
    return (first as any).url ?? (first as any).link ?? (first as any).href ?? (first as any).src ?? undefined;
  }
  if (typeof v === 'object') return (v as any).url ?? (v as any).link ?? (v as any).href ?? (v as any).src ?? undefined;
  return undefined;
}

/** 读取 public/feeds/*.json，SSR 用 fs，浏览器用 fetch */
export async function readFeedJson(name: string) {
  if (isServer) {
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const file = path.join(process.cwd(), 'public', 'feeds', name);
    const txt = await fs.readFile(file, 'utf-8');
    return JSON.parse(txt);
  } else {
    const res = await fetch(`/feeds/${name}`);
    if (!res.ok) throw new Error(`Fetch failed: /feeds/${name}`);
    return await res.json();
  }
}

export function sortByPublishedAtDesc<T extends { publishedAt?: string }>(arr: T[]) {
  return [...arr].sort(
    (a, b) => new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime(),
  );
}

import {
  env, FIELD, USE_FEEDS,
  listAllRecords, toArrayMaybe, toUrlMaybe, toLinkMaybe,
  readFeedJson, sortByPublishedAtDesc,
} from './feishuBase';

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
  docUrl?: string; // 文档链接
};

function mapRecordToPost(rec: any): Post {
  const f = rec.fields || rec;
  const slug = (f[FIELD.slug] as string) || rec.record_id;
  return {
    id: rec.record_id || slug,
    slug,
    title: (f[FIELD.title] as string) ?? '',
    summary: f[FIELD.summary] as string | undefined,
    contentHtml: f[FIELD.contentHtml] as string | undefined,
    coverUrl: toUrlMaybe(f[FIELD.coverUrl]),
    tags: toArrayMaybe(f[FIELD.tags]),
    author: f[FIELD.author] as string | undefined,
    authorAvatarUrl: toUrlMaybe(f[FIELD.authorAvatarUrl]),
    publishedAt: f[FIELD.publishedAt] as string | undefined,
    docUrl: toLinkMaybe(f[FIELD.docUrl]),
  };
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
  const items = await listAllRecords(appToken, tableId, viewId as string | undefined);
  _postsCache = sortByPublishedAtDesc(items.map(mapRecordToPost).filter(p => p.title && p.slug));
  return limit ? _postsCache.slice(0, limit) : _postsCache;
}

/** 单篇文章 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find(p => p.slug === slug) ?? null;
}

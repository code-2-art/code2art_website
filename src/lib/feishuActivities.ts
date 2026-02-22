import {
  env, FIELD, USE_FEEDS,
  listAllRecords, toArrayMaybe, toUrlMaybe, toLinkMaybe,
  readFeedJson,
} from './feishuBase';

export type Activity = {
  id: string;
  slug: string;
  title: string;
  summary?: string;
  contentHtml?: string;
  coverUrl?: string;
  tags?: string[];
  author?: string;
  authorAvatarUrl?: string;
  date?: string; // 活动时间
  docUrl?: string; // 文档链接
};

function mapRecordToActivity(rec: any): Activity {
  const f = rec.fields || rec;
  const slug = (f[FIELD.slug] as string) || rec.record_id;
  return {
    id: rec.record_id || slug,
    slug,
    title: f[FIELD.title] ?? '',
    summary: f[FIELD.summary],
    contentHtml: f[FIELD.contentHtml],
    coverUrl: toUrlMaybe(f[FIELD.coverUrl]),
    tags: toArrayMaybe(f[FIELD.tags]),
    author: f[FIELD.author],
    authorAvatarUrl: toUrlMaybe(f[FIELD.authorAvatarUrl]),
    date: f[FIELD.publishedAt], // 未来可以换成独立的"活动时间"字段
    docUrl: toLinkMaybe(f[FIELD.docUrl]),
  };
}

let _cache: Activity[] | null = null;
export async function getActivities(limit?: number): Promise<Activity[]> {
  if (USE_FEEDS) {
    const all = await readFeedJson('activities.json');
    return limit ? all.slice(0, limit) : all;
  }

  if (_cache) return limit ? _cache.slice(0, limit) : _cache;

  const appToken = env('FEISHU_ACTIVITIES_APP_TOKEN');
  const tableId = env('FEISHU_ACTIVITIES_TABLE_ID');
  const viewId = process.env['FEISHU_ACTIVITIES_VIEW_ID'] ?? (import.meta as any).env?.['FEISHU_ACTIVITIES_VIEW_ID'];

  const items = await listAllRecords(appToken, tableId, viewId as string | undefined);
  _cache = items.map(mapRecordToActivity).filter(a => a.title && a.slug);

  _cache.sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime());

  return limit ? _cache.slice(0, limit) : _cache;
}

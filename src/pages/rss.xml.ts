import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/feishu';

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: '实验编程 Experimental Programming',
    description: '用计算编程进行艺术创作 — 探索科技与艺术融合的社群知识平台',
    site: context.site!.toString(),
    items: posts.map((p) => ({
      title: p.title,
      description: p.summary ?? '',
      pubDate: p.publishedAt ? new Date(p.publishedAt) : undefined,
      link: `/blog/${p.slug}/`,
      categories: p.tags ?? [],
      author: p.author ?? undefined,
    })),
    customData: '<language>zh-CN</language>',
  });
}

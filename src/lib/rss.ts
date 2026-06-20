import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { withBase } from '../i18n/ui';
import type { Lang } from '../i18n/ui';

/**
 * Build a per-language RSS feed from the tutorials collection.
 * Item links are base-aware so they resolve under both the production
 * root and the GitHub Pages sub-directory.
 */
export async function buildRss(lang: Lang, site: URL | undefined) {
  const posts = await getCollection('tutorials', ({ filePath }) =>
    filePath?.includes(`/${lang}/`)
  );
  posts.sort(
    (a, b) =>
      new Date(b.data.publishedAt ?? 0).getTime() -
      new Date(a.data.publishedAt ?? 0).getTime()
  );

  const isZh = lang === 'zh';
  return rss({
    title: isZh ? '实验编程 code2art' : 'code2art',
    description: isZh
      ? '探索科技 × 艺术的边界'
      : 'Exploring the intersection of technology and art',
    site: site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.summary ?? '',
      pubDate: p.data.publishedAt ? new Date(p.data.publishedAt) : undefined,
      link: withBase(`/${lang}/tutorials/${p.data.slug}`),
      categories: p.data.tags ?? [],
      author: p.data.author ?? undefined,
    })),
    customData: `<language>${isZh ? 'zh-CN' : 'en'}</language>`,
  });
}

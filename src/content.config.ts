import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string().optional(),
    coverUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    authorAvatarUrl: z.string().optional(),
    publishedAt: z.string().optional(),
    docUrl: z.string().optional(),
  }),
});

const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string().optional(),
    coverUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    authorAvatarUrl: z.string().optional(),
    date: z.string().optional(),
    docUrl: z.string().optional(),
  }),
});

export const collections = { posts, activities };

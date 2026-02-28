import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** 所有集合共用的基础字段 */
const baseSchema = z.object({
  title: z.string(),
  slug: z.string(),
  summary: z.string().optional(),
  coverUrl: z.string().optional(),
  tags: z.array(z.string()).optional(),
  author: z.string().optional(),
  authorAvatarUrl: z.string().optional(),
  publishedAt: z.string().optional(),
  docUrl: z.string().optional(),
});

const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tutorials' }),
  schema: baseSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: baseSchema.extend({
    date: z.string().optional(),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/glossary' }),
  schema: baseSchema,
});

const domains = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/domains' }),
  schema: baseSchema,
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: baseSchema,
});

const meta = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/meta' }),
  schema: baseSchema,
});

export const collections = {
  tutorials,
  projects,
  glossary,
  domains,
  resources,
  meta,
};

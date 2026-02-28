import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const contentTypeEnum = z.enum([
  'tutorial',
  'project',
  'glossary',
  'domain',
  'resource',
  'meta',
  'event',
]);

/** 所有集合共用的基础字段 */
const baseSchema = z.object({
  id: z.string().optional(),
  concept_id: z.string().optional(),
  type: contentTypeEnum.optional(),
  title: z.string(),
  slug: z.string(),
  lang: z.string().optional(),
  domains: z.array(z.string()).optional(),
  series: z
    .object({
      id: z.string(),
      order: z.number().optional(),
    })
    .optional(),
  related_terms: z.array(z.string()).optional(),
  summary: z.string().optional(),
  difficulty: z.string().optional(),
  tools: z.array(z.string()).optional(),
  status: z.string().optional(),
  created: z.string().optional(),
  updated: z.string().optional(),
  version: z.number().optional(),
  aliases: z.array(z.string()).optional(),
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

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: baseSchema.extend({
    event_date: z.union([z.string(), z.date()]).optional(),
    end_date: z.union([z.string(), z.date()]).optional(),
    location: z.string().optional(),
    format: z.enum(['online', 'offline', 'hybrid']).optional(),
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
  events,
  glossary,
  domains,
  resources,
  meta,
};

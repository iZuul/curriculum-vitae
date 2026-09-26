import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/posts' }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    draft: z.boolean().default(true),
    description: z.string().optional(),
    cover: z.string().optional(),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{json,yaml,yml}', base: 'src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};

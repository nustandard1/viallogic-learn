import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const modules = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/modules" }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    subtitle: z.string(),
    category: z.string(),
    duration: z.string(),
    prerequisites: z.array(z.string()).default([]),
    summary: z.string(),
    published: z.boolean().default(true),
  }),
});

const lessons = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/lessons" }),
  schema: z.object({
    module: z.string(),
    order: z.number(),
    title: z.string(),
    summary: z.string(),
    duration: z.string(),
  }),
});

export const collections = { modules, lessons };

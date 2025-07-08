import { z, defineCollection } from 'astro:content'

const notes = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    summary: z.string().optional(),
    tags: z.array(z.string().optional()),
    published: z.boolean(),
  }),
})

export const collections = { notes }

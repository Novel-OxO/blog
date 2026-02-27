import { z } from 'zod'

export const postFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  date: z.string(),
  coverImage: z.string(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
})

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>

export type PostMeta = PostFrontmatter & {
  slug: string
  readTime: string
}

export type Post = PostMeta & {
  content: string
}

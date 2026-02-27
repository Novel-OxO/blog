export type PostFrontmatter = {
  title: string
  description: string
  category: string
  date: string
  coverImage: string
  draft?: boolean
}

export type PostMeta = PostFrontmatter & {
  slug: string
  readTime: string
}

export type Post = PostMeta & {
  content: string
}

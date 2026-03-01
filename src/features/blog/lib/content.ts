import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { Post, PostFrontmatter, PostMeta } from '../types/content'
import { postFrontmatterSchema } from '../types/content'

const POSTS_DIR = path.join(process.cwd(), 'content/posts')

function parseFrontmatter(data: unknown, slug: string): PostFrontmatter {
  const result = postFrontmatterSchema.safeParse(data)
  if (!result.success) {
    throw new Error(`Invalid frontmatter in "${slug}": ${result.error.message}`)
  }
  return result.data
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(POSTS_DIR, slug, 'index.mdx')
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    content,
    readTime: readingTime(content).text,
    ...parseFrontmatter(data, slug),
  }
}

export function getAllPostsMeta(): PostMeta[] {
  const dirs = fs.readdirSync(POSTS_DIR, { withFileTypes: true }).filter((d) => d.isDirectory())

  const posts = dirs.map((dir) => {
    const slug = dir.name
    const filePath = path.join(POSTS_DIR, slug, 'index.mdx')
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)

    return {
      slug,
      readTime: readingTime(content).text,
      ...parseFrontmatter(data, slug),
    }
  })

  const isProduction = process.env.NODE_ENV === 'production'

  return posts
    .filter((post) => !isProduction || !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPostsMeta().filter((post) => post.category === category)
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPostsMeta().filter((post) => post.tags.includes(tag))
}

export function getAllCategories(): string[] {
  const categories = getAllPostsMeta().map((post) => post.category)
  return [...new Set(categories)].sort()
}

export function getAllTags(): string[] {
  const tags = getAllPostsMeta().flatMap((post) => post.tags)
  return [...new Set(tags)].sort()
}

export function getAdjacentPosts(slug: string): { newer: PostMeta | null; older: PostMeta | null } {
  const posts = getAllPostsMeta()
  const index = posts.findIndex((p) => p.slug === slug)

  if (index === -1) return { newer: null, older: null }

  return {
    newer: index > 0 ? posts[index - 1] : null,
    older: index < posts.length - 1 ? posts[index + 1] : null,
  }
}

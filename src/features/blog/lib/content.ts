import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { Post, PostFrontmatter, PostMeta } from '../types/content'

const POSTS_DIR = path.join(process.cwd(), 'content/posts')

// TODO AS가 아니라 ZOD로 검증 예쩡
export function getPostBySlug(slug: string): Post {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    content,
    readTime: readingTime(content).text,
    ...(data as PostFrontmatter),
  }
}

export function getAllPostsMeta(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const filePath = path.join(POSTS_DIR, file)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)

    return {
      slug,
      readTime: readingTime(content).text,
      ...(data as PostFrontmatter),
    }
  })

  const isProduction = process.env.NODE_ENV === 'production'

  return posts
    .filter((post) => !isProduction || !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

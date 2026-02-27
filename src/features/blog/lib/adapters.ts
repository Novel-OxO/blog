import type { ArticleCardData, PopularPost } from '../types/article'
import type { PostMeta } from '../types/content'

export function formatDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00`)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function toArticleCardData(post: PostMeta): ArticleCardData {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: post.category,
    date: formatDate(post.date),
    coverImage: post.coverImage,
    tags: post.tags,
  }
}

export function toPopularPost(post: PostMeta): PopularPost {
  return {
    slug: post.slug,
    title: post.title,
    readTime: post.readTime,
  }
}

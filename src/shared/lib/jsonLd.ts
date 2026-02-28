import { siteConfig } from './site'

type Post = {
  title: string
  description: string
  date: string
  tags: string[]
  coverImage?: string
  slug?: string
}

export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
  }
}

export function generateArticleJsonLd(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(post.coverImage && {
      image: post.coverImage.startsWith('http')
        ? post.coverImage
        : `${siteConfig.url}${post.coverImage}`,
    }),
    ...(post.tags.length > 0 && { keywords: post.tags.join(', ') }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/${post.slug ?? ''}`,
    },
  }
}

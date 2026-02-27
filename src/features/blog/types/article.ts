export type ArticleCardData = {
  slug: string
  title: string
  description: string
  category: string
  date: string
  coverImage: string
  tags: string[]
}

export type FeaturedArticle = ArticleCardData

export type PopularPost = {
  slug: string
  title: string
  readTime: string
}

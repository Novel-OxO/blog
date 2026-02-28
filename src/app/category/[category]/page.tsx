import { notFound } from 'next/navigation'
import { css } from '../../../../styled-system/css'
import { Container } from '../../../shared/components/layout'
import { PaginatedArticleGrid, CategoryTabs } from '../../../features/blog/components'
import { getAllCategories, getPostsByCategory } from '../../../features/blog/lib/content'
import { toArticleCardData } from '../../../features/blog/lib/adapters'

type Props = {
  params: Promise<{ category: string }>
}

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category }))
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const decoded = decodeURIComponent(category)

  const posts = getPostsByCategory(decoded)
  if (posts.length === 0) notFound()

  const articles = posts.map(toArticleCardData)
  const categories = ['All', ...getAllCategories()]

  return (
    <Container>
      <div className={css({ py: '10' })}>
        <h1
          className={css({
            fontSize: '3xl',
            fontWeight: 'semibold',
            color: 'text.primary',
            letterSpacing: 'tight',
            mb: '8',
          })}
        >
          Blog
        </h1>
        <div className={css({ mb: '8' })}>
          <CategoryTabs categories={categories} activeCategory={decoded} />
        </div>
        <PaginatedArticleGrid articles={articles} />
      </div>
    </Container>
  )
}

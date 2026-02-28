import type { Metadata } from 'next'
import { css } from '../../styled-system/css'
import { Container } from '../shared/components/layout'
import { PaginatedArticleGrid, CategoryTabs } from '../features/blog/components'
import { getAllPostsMeta, getAllCategories } from '../features/blog/lib/content'
import { toArticleCardData } from '../features/blog/lib/adapters'
import { siteConfig } from '../shared/lib/site'
import { JsonLd } from '../shared/components/JsonLd'
import { generateWebsiteJsonLd } from '../shared/lib/jsonLd'

export const metadata: Metadata = {
  title: { absolute: siteConfig.name },
  description: siteConfig.description,
}

export default function BlogPage() {
  const posts = getAllPostsMeta()
  const articles = posts.map(toArticleCardData)
  const categories = ['All', ...getAllCategories()]

  return (
    <>
      <JsonLd data={generateWebsiteJsonLd()} />
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
            <CategoryTabs categories={categories} activeCategory="All" />
          </div>
          {articles.length > 0 ? (
            <PaginatedArticleGrid articles={articles} />
          ) : (
            <p className={css({ color: 'text.muted', textStyle: 'body.base' })}>No posts yet.</p>
          )}
        </div>
      </Container>
    </>
  )
}

import { css } from '../../../styled-system/css'
import { Container } from '../../shared/components/layout'
import { ArticleGrid } from '../../features/blog/components'
import { getAllPostsMeta } from '../../features/blog/lib/content'
import { toArticleCardData } from '../../features/blog/lib/adapters'

export default function BlogPage() {
  const posts = getAllPostsMeta()
  const articles = posts.map(toArticleCardData)

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
        {articles.length > 0 ? (
          <ArticleGrid articles={articles} />
        ) : (
          <p className={css({ color: 'text.muted', textStyle: 'body.base' })}>No posts yet.</p>
        )}
      </div>
    </Container>
  )
}

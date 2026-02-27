import { notFound } from 'next/navigation'
import { css } from '../../../../../styled-system/css'
import { Container } from '../../../../shared/components/layout'
import { ArticleGrid } from '../../../../features/blog/components'
import { getAllTags, getPostsByTag } from '../../../../features/blog/lib/content'
import { toArticleCardData } from '../../../../features/blog/lib/adapters'

type Props = {
  params: Promise<{ tag: string }>
}

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }))
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params
  const decoded = decodeURIComponent(tag)

  const posts = getPostsByTag(decoded)
  if (posts.length === 0) notFound()

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
            mb: '2',
          })}
        >
          Tag: {decoded}
        </h1>
        <p
          className={css({
            textStyle: 'body.base',
            color: 'text.secondary',
            mb: '8',
          })}
        >
          {articles.length} {articles.length === 1 ? 'post' : 'posts'}
        </p>
        <ArticleGrid articles={articles} />
      </div>
    </Container>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { css } from '../../../../styled-system/css'
import { Badge } from '../../../shared/components/Badge'
import type { ArticleCardData } from '../types/article'

const card = css({
  display: 'flex',
  flexDir: 'column',
  bg: 'surface.raised',
  borderRadius: 'xl',
  overflow: 'hidden',
  border: '1px solid',
  borderColor: 'border.faint',
  textDecoration: 'none',
  transition: 'box-shadow 0.2s',
  _hover: { shadow: 'md' },
})

const cardImage = css({
  w: 'full',
  h: '200px',
  objectFit: 'cover',
})

const cardBody = css({
  p: '5',
  display: 'flex',
  flexDir: 'column',
  gap: '3',
  flex: 1,
})

const cardMeta = css({
  display: 'flex',
  alignItems: 'center',
  gap: '3',
})

const cardDate = css({
  fontSize: 'xs',
  color: 'text.muted',
})

const cardTitle = css({
  fontSize: 'lg',
  fontWeight: 'semibold',
  color: 'text.primary',
  lineHeight: 'snug',
})

const cardDescription = css({
  fontSize: 'sm',
  color: 'text.secondary',
  lineHeight: 'normal',
})

interface ArticleCardProps {
  article: ArticleCardData
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/blog/${article.slug}`} className={card}>
      <div className={css({ position: 'relative', h: '200px' })}>
        <Image src={article.coverImage} alt={article.title} fill className={cardImage} />
      </div>
      <div className={cardBody}>
        <div className={cardMeta}>
          <Badge>{article.category}</Badge>
          <span className={cardDate}>{article.date}</span>
        </div>
        <h3 className={cardTitle}>{article.title}</h3>
        <p className={cardDescription}>{article.description}</p>
      </div>
    </Link>
  )
}

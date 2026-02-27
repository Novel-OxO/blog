import { css } from '../../../../styled-system/css'
import { ArticleCard } from './ArticleCard'
import type { ArticleCardData } from '../types/article'

const grid = css({
  display: 'grid',
  gridTemplateColumns: {
    base: '1fr',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
  },
  gap: '6',
})

interface ArticleGridProps {
  articles: ArticleCardData[]
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <div className={grid}>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  )
}

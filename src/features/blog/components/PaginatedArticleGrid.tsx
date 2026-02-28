'use client'

import { useRef, useState } from 'react'
import { css, cx } from '../../../../styled-system/css'
import { flex } from '../../../../styled-system/patterns'
import { ArticleGrid } from './ArticleGrid'
import type { ArticleCardData } from '../types/article'

const PAGE_SIZE_DEFAULT = 9

interface PaginatedArticleGridProps {
  articles: ArticleCardData[]
  pageSize?: number
}

function getPageNumbers(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const pages: (number | 'ellipsis')[] = [1]

  if (current > 3) pages.push('ellipsis')

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  for (let i = start; i <= end; i++) pages.push(i)

  if (current < total - 2) pages.push('ellipsis')

  pages.push(total)
  return pages
}

const navButton = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  w: '9',
  h: '9',
  rounded: 'md',
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'text.secondary',
  cursor: 'pointer',
  transition: 'all 0.15s',
  _hover: { bg: 'bg.lighter', color: 'text.primary' },
  _disabled: { opacity: 0.3, cursor: 'not-allowed', _hover: { bg: 'transparent' } },
})

const pageButton = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minW: '9',
  h: '9',
  px: '2',
  rounded: 'md',
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'text.secondary',
  cursor: 'pointer',
  transition: 'all 0.15s',
  _hover: { bg: 'bg.lighter', color: 'text.primary' },
})

const activePageButton = css({
  bg: 'heat.500',
  color: 'white',
  _hover: { bg: 'heat.600', color: 'white' },
})

const ellipsisStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  w: '9',
  h: '9',
  fontSize: 'sm',
  color: 'text.muted',
})

export function PaginatedArticleGrid({
  articles,
  pageSize = PAGE_SIZE_DEFAULT,
}: PaginatedArticleGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const gridRef = useRef<HTMLDivElement>(null)

  const totalPages = Math.ceil(articles.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const currentArticles = articles.slice(startIndex, startIndex + pageSize)

  function goToPage(page: number) {
    setCurrentPage(page)
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div ref={gridRef} className={css({ scrollMarginTop: '24' })}>
      <ArticleGrid articles={currentArticles} />
      {totalPages > 1 && (
        <nav
          aria-label="Pagination"
          className={flex({ justify: 'center', align: 'center', gap: '1', mt: '10' })}
        >
          <button
            className={navButton}
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            &laquo;
          </button>
          {getPageNumbers(currentPage, totalPages).map((page, i) =>
            page === 'ellipsis' ? (
              <span key={`ellipsis-${i}`} className={ellipsisStyle}>
                &hellip;
              </span>
            ) : (
              <button
                key={page}
                className={cx(pageButton, page === currentPage && activePageButton)}
                onClick={() => goToPage(page)}
                aria-current={page === currentPage ? 'page' : undefined}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            ),
          )}
          <button
            className={navButton}
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            &raquo;
          </button>
        </nav>
      )}
    </div>
  )
}

import Link from 'next/link'
import { css } from '../../../../styled-system/css'
import type { PostMeta } from '../types/content'

type AdjacentPosts = {
  newer: PostMeta | null
  older: PostMeta | null
}

type Props = AdjacentPosts

export function PostNavigation({ newer, older }: Props) {
  if (!newer && !older) return null

  return (
    <nav
      aria-label="Post navigation"
      className={css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', sm: '1fr 1fr' },
        gap: '4',
        mt: '12',
        pt: '8',
        borderTop: '1px solid',
        borderColor: 'border.faint',
      })}
    >
      {newer ? (
        <Link
          href={`/${newer.slug}`}
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '1',
            p: '4',
            rounded: 'lg',
            border: '1px solid',
            borderColor: 'border.muted',
            textDecoration: 'none',
            transition: 'all 0.15s',
            _hover: { borderColor: 'heat.500', bg: 'surface.raised' },
          })}
        >
          <span className={css({ textStyle: 'body.sm', color: 'text.muted' })}>Newer</span>
          <span
            className={css({
              textStyle: 'body.base',
              fontWeight: 'semibold',
              color: 'text.primary',
              lineClamp: 2,
            })}
          >
            {newer.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {older ? (
        <Link
          href={`/${older.slug}`}
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '1',
            p: '4',
            rounded: 'lg',
            border: '1px solid',
            borderColor: 'border.muted',
            textAlign: 'right',
            textDecoration: 'none',
            transition: 'all 0.15s',
            _hover: { borderColor: 'heat.500', bg: 'surface.raised' },
          })}
        >
          <span className={css({ textStyle: 'body.sm', color: 'text.muted' })}>Older</span>
          <span
            className={css({
              textStyle: 'body.base',
              fontWeight: 'semibold',
              color: 'text.primary',
              lineClamp: 2,
            })}
          >
            {older.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}

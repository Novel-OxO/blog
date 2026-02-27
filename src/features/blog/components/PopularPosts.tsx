import Link from 'next/link'
import { css } from '../../../../styled-system/css'
import type { PopularPost } from '../types/article'

const list = css({
  display: 'flex',
  flexDir: 'column',
  gap: '4',
})

const item = css({
  display: 'flex',
  gap: '4',
  alignItems: 'flex-start',
  textDecoration: 'none',
})

const number = css({
  fontSize: '2xl',
  fontWeight: 'bold',
  color: 'heat.500',
  lineHeight: '1',
  minW: '8',
})

const content = css({
  display: 'flex',
  flexDir: 'column',
  gap: '1',
})

const title = css({
  fontSize: 'sm',
  fontWeight: 'semibold',
  color: 'text.primary',
  lineHeight: 'snug',
})

const readTime = css({
  fontSize: 'xs',
  color: 'text.muted',
})

interface PopularPostsProps {
  posts: PopularPost[]
}

export function PopularPosts({ posts }: PopularPostsProps) {
  return (
    <div className={list}>
      {posts.map((post, i) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className={item}>
          <span className={number}>{String(i + 1).padStart(2, '0')}</span>
          <div className={content}>
            <span className={title}>{post.title}</span>
            <span className={readTime}>{post.readTime}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

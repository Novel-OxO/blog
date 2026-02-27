'use client'

import { useEffect, useRef, useState } from 'react'
import { css } from '../../../../styled-system/css'
import type { TocItem } from '../lib/toc'

type Props = {
  items: TocItem[]
  variant: 'mobile' | 'desktop'
}

export function TableOfContents({ items, variant }: Props) {
  const [activeId, setActiveId] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const headingElements = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    if (headingElements.length === 0) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '0px 0px -80% 0px', threshold: 0 },
    )

    for (const el of headingElements) {
      observerRef.current.observe(el)
    }

    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50
      if (atBottom) {
        const lastVisibleId = [...headingElements]
          .reverse()
          .find((el) => el.getBoundingClientRect().top < window.innerHeight)?.id
        if (lastVisibleId) setActiveId(lastVisibleId)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observerRef.current?.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [items])

  if (items.length === 0) return null

  const tocList = (
    <nav aria-label="Table of contents">
      <ul className={css({ listStyle: 'none', p: '0', m: '0' })}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={css({
                display: 'block',
                py: '1.5',
                pl: item.level === 3 ? '4' : '0',
                textStyle: 'body.sm',
                color: activeId === item.id ? 'heat.500' : 'text.muted',
                fontWeight: activeId === item.id ? 'semibold' : 'normal',
                textDecoration: 'none',
                transition: 'colors',
                transitionDuration: '0.15s',
                _hover: { color: 'text.primary' },
              })}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )

  if (variant === 'desktop') {
    return (
      <aside
        className={css({
          display: { base: 'none', xl: 'block' },
          position: 'sticky',
          top: '24',
          maxH: 'calc(100vh - token(spacing.32))',
          overflowY: 'auto',
          w: '220px',
          flexShrink: 0,
        })}
      >
        <p
          className={css({
            textStyle: 'body.sm',
            fontWeight: 'semibold',
            color: 'text.primary',
            mb: '3',
          })}
        >
          On this page
        </p>
        {tocList}
      </aside>
    )
  }

  return (
    <details
      className={css({
        display: { base: 'block', xl: 'none' },
        mb: '6',
        p: '4',
        bg: 'surface.raised',
        rounded: 'lg',
        border: '1px solid',
        borderColor: 'border.faint',
      })}
    >
      <summary
        className={css({
          textStyle: 'body.sm',
          fontWeight: 'semibold',
          color: 'text.primary',
          cursor: 'pointer',
          userSelect: 'none',
        })}
      >
        On this page
      </summary>
      <div className={css({ mt: '3' })}>{tocList}</div>
    </details>
  )
}

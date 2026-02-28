'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { css } from '../../../styled-system/css'
import { IconButton } from './IconButton'
import { SearchIcon } from './icons'

type SearchItem = {
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
}

interface SearchDialogProps {
  items: SearchItem[]
}

const overlay = css({
  position: 'fixed',
  inset: 0,
  zIndex: 100,
  bg: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  pt: '20vh',
  px: '4',
})

const dialog = css({
  w: 'full',
  maxW: '560px',
  bg: 'surface',
  border: '1px solid',
  borderColor: 'border.muted',
  borderRadius: 'xl',
  shadow: 'lg',
  overflow: 'hidden',
})

const inputWrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: '3',
  px: '4',
  borderBottom: '1px solid',
  borderColor: 'border.faint',
})

const inputStyle = css({
  w: 'full',
  py: '3.5',
  fontSize: 'md',
  color: 'text.primary',
  bg: 'transparent',
  border: 'none',
  outline: 'none',
  _placeholder: { color: 'text.muted' },
})

const iconStyle = css({
  color: 'text.muted',
  fontSize: 'lg',
  flexShrink: 0,
})

const resultList = css({
  maxH: '360px',
  overflowY: 'auto',
  py: '2',
})

const resultItem = css({
  display: 'block',
  w: 'full',
  px: '4',
  py: '3',
  textAlign: 'left',
  bg: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.1s',
  _hover: { bg: 'bg.lighter' },
})

const resultItemActive = css({
  bg: 'bg.lighter',
})

const resultTitle = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'text.primary',
  mb: '0.5',
})

const resultMeta = css({
  fontSize: 'xs',
  color: 'text.muted',
})

const emptyState = css({
  px: '4',
  py: '8',
  textAlign: 'center',
  fontSize: 'sm',
  color: 'text.muted',
})

const kbdStyle = css({
  fontSize: 'xs',
  color: 'text.muted',
  bg: 'bg.lighter',
  border: '1px solid',
  borderColor: 'border.faint',
  borderRadius: 'sm',
  px: '1.5',
  py: '0.5',
  fontFamily: 'mono',
  lineHeight: '1',
})

export function SearchDialog({ items }: SearchDialogProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const results = query.trim()
    ? items.filter((item) => {
        const q = query.toLowerCase()
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q))
        )
      })
    : []

  const handleOpen = useCallback(() => {
    setOpen(true)
    setQuery('')
    setActiveIndex(0)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleSelect = useCallback(
    (slug: string) => {
      setOpen(false)
      router.push(`/${slug}`)
    },
    [router],
  )

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
        setQuery('')
        setActiveIndex(0)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  if (!open) {
    return (
      <IconButton aria-label="Search" onClick={handleOpen}>
        <SearchIcon />
      </IconButton>
    )
  }

  return (
    <>
      <IconButton aria-label="Search" onClick={handleOpen}>
        <SearchIcon />
      </IconButton>
      <div className={overlay} onClick={handleClose}>
        <div className={dialog} onClick={(e) => e.stopPropagation()}>
          <div className={inputWrapper}>
            <SearchIcon className={iconStyle} />
            <input
              ref={inputRef}
              className={inputStyle}
              type="text"
              placeholder="Search posts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  handleClose()
                } else if (e.key === 'ArrowDown') {
                  e.preventDefault()
                  setActiveIndex((i) => Math.min(i + 1, results.length - 1))
                } else if (e.key === 'ArrowUp') {
                  e.preventDefault()
                  setActiveIndex((i) => Math.max(i - 1, 0))
                } else if (e.key === 'Enter' && results[activeIndex]) {
                  handleSelect(results[activeIndex].slug)
                }
              }}
            />
            <kbd className={kbdStyle}>ESC</kbd>
          </div>
          {query.trim() ? (
            results.length > 0 ? (
              <div className={resultList}>
                {results.map((item, i) => (
                  <button
                    key={item.slug}
                    className={`${resultItem}${i === activeIndex ? ` ${resultItemActive}` : ''}`}
                    onClick={() => handleSelect(item.slug)}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    <div className={resultTitle}>{item.title}</div>
                    <div className={resultMeta}>
                      {item.category}
                      {item.tags.length > 0 && ` · ${item.tags.join(', ')}`}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className={emptyState}>No results found.</div>
            )
          ) : (
            <div className={emptyState}>Type to search posts...</div>
          )}
        </div>
      </div>
    </>
  )
}

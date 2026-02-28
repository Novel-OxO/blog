'use client'

import { isValidElement, useState, useRef, type ReactNode } from 'react'
import { css } from '../../../../../styled-system/css'

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" strokeWidth="1.3" />
      <path
        d="M10.5 5.5V3a1.5 1.5 0 0 0-1.5-1.5H3A1.5 1.5 0 0 0 1.5 3v6A1.5 1.5 0 0 0 3 10.5h2.5"
        strokeWidth="1.3"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
      <path
        d="M3 8.5l3.5 3.5L13 4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CodeBlock({ children }: { children: ReactNode }) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLDivElement>(null)

  // Extract language and title from children
  let language = ''
  let title = ''
  let preElement: ReactNode = null
  const otherChildren: ReactNode[] = []

  const childArray = Array.isArray(children) ? children : [children]
  for (const child of childArray) {
    if (!isValidElement<Record<string, unknown>>(child)) {
      otherChildren.push(child)
      continue
    }

    if (child.type === 'figcaption') {
      title = extractText(child.props.children as ReactNode)
      continue
    }

    if (child.type === 'pre' || child.props['data-theme'] != null) {
      preElement = child
      // Extract language from the code element inside pre
      const codeChild = child.props.children
      if (isValidElement<Record<string, unknown>>(codeChild)) {
        language = (codeChild.props['data-language'] as string) ?? ''
      }
      continue
    }

    otherChildren.push(child)
  }

  const label = title || language

  async function handleCopy() {
    const code = preRef.current?.textContent ?? ''
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <figure
      className={css({
        mb: '5',
        rounded: 'lg',
        overflow: 'hidden',
        borderWidth: '1px',
        borderColor: 'border.faint',
        bg: 'bg.lighter',
        _dark: { bg: 'neutral.900' },
      })}
    >
      {label && (
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: '4',
            py: '2',
            borderBottomWidth: '1px',
            borderBottomColor: 'border.faint',
            bg: 'bg.lighter',
            _dark: { bg: 'neutral.800/30' },
          })}
        >
          <span
            className={css({
              fontFamily: 'mono',
              fontSize: 'xs',
              color: 'text.muted',
              userSelect: 'none',
            })}
          >
            {label}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? 'Copied' : 'Copy code'}
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'text.muted',
              cursor: 'pointer',
              rounded: 'sm',
              p: '1',
              transition: 'colors',
              _hover: { color: 'text.primary' },
            })}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </button>
        </div>
      )}
      <div
        ref={preRef}
        className={css({
          position: 'relative',
          '&:hover button': { opacity: 1 },
        })}
      >
        {!label && (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? 'Copied' : 'Copy code'}
            className={css({
              position: 'absolute',
              top: '3',
              right: '3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'text.muted',
              cursor: 'pointer',
              rounded: 'sm',
              p: '1',
              opacity: 0,
              transition: 'opacity',
              zIndex: 1,
            })}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </button>
        )}
        {preElement}
      </div>
      {otherChildren}
    </figure>
  )
}

function extractText(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (!node) return ''
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (typeof node === 'object' && 'props' in node)
    return extractText((node.props as { children?: ReactNode }).children)
  return ''
}

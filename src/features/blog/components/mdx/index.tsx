import type { MDXComponents } from 'mdx/types'
import { css } from '../../../../../styled-system/css'

export function getMDXComponents(): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className={css({
          textStyle: 'heading.1',
          color: 'text.primary',
          mt: '10',
          mb: '4',
        })}
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className={css({
          textStyle: 'heading.3',
          color: 'text.primary',
          mt: '10',
          mb: '3',
        })}
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className={css({
          fontSize: 'lg',
          lineHeight: 'snug',
          fontWeight: 'semibold',
          color: 'text.primary',
          mt: '8',
          mb: '3',
        })}
        {...props}
      />
    ),
    p: (props) => (
      <p
        className={css({
          textStyle: 'body.base',
          color: 'text.secondary',
          mb: '5',
          lineHeight: 'relaxed',
        })}
        {...props}
      />
    ),
    a: (props) => (
      <a
        className={css({
          color: 'heat.500',
          textDecoration: 'underline',
          textUnderlineOffset: '2px',
          _hover: { color: 'heat.600' },
        })}
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className={css({
          textStyle: 'body.base',
          color: 'text.secondary',
          mb: '5',
          pl: '6',
          listStyleType: 'disc',
          '& li': { mb: '2' },
        })}
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className={css({
          textStyle: 'body.base',
          color: 'text.secondary',
          mb: '5',
          pl: '6',
          listStyleType: 'decimal',
          '& li': { mb: '2' },
        })}
        {...props}
      />
    ),
    li: (props) => (
      <li
        className={css({
          lineHeight: 'relaxed',
        })}
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className={css({
          borderLeftWidth: '3px',
          borderLeftColor: 'heat.500',
          pl: '5',
          py: '1',
          my: '6',
          fontStyle: 'italic',
          color: 'text.secondary',
          '& p': { mb: '0' },
        })}
        {...props}
      />
    ),
    code: ({ children, ...props }) => {
      // rehype-pretty-code adds data-theme to code inside pre; skip styling for those
      if ('data-theme' in props) {
        return <code {...props}>{children}</code>
      }
      return (
        <code
          className={css({
            fontFamily: 'mono',
            fontSize: 'sm',
            bg: 'bg.lighter',
            color: 'text.primary',
            px: '1.5',
            py: '0.5',
            rounded: 'sm',
          })}
          {...props}
        >
          {children}
        </code>
      )
    },
    pre: (props) => (
      <pre
        className={css({
          fontFamily: 'mono',
          fontSize: 'sm',
          lineHeight: 'normal',
          bg: 'bg.lighter',
          color: 'var(--shiki-light)',
          _dark: { color: 'var(--shiki-dark)', bg: 'neutral.900' },
          p: '5',
          rounded: 'lg',
          mb: '5',
          overflowX: 'auto',
          borderWidth: '1px',
          borderColor: 'border.faint',
          '& code': {
            bg: 'transparent',
            p: '0',
            rounded: 'none',
            fontSize: 'inherit',
          },
          '& [data-line]': {
            px: '5',
          },
          '& code span': {
            color: 'var(--shiki-light)',
            _dark: { color: 'var(--shiki-dark)' },
          },
        })}
        {...props}
      />
    ),
    table: (props) => (
      <div className={css({ overflowX: 'auto', mb: '5' })}>
        <table
          className={css({
            width: '100%',
            textStyle: 'body.base',
            borderCollapse: 'collapse',
          })}
          {...props}
        />
      </div>
    ),
    thead: (props) => (
      <thead
        className={css({
          borderBottomWidth: '2px',
          borderBottomColor: 'border.muted',
        })}
        {...props}
      />
    ),
    th: (props) => (
      <th
        className={css({
          textAlign: 'left',
          fontWeight: 'semibold',
          color: 'text.primary',
          px: '3',
          py: '2',
        })}
        {...props}
      />
    ),
    td: (props) => (
      <td
        className={css({
          color: 'text.secondary',
          px: '3',
          py: '2',
          borderBottomWidth: '1px',
          borderBottomColor: 'border.faint',
        })}
        {...props}
      />
    ),
    img: (props) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={css({
          maxWidth: '100%',
          height: 'auto',
          rounded: 'lg',
          my: '6',
        })}
        alt={props.alt ?? ''}
        {...props}
      />
    ),
    hr: () => (
      <hr
        className={css({
          borderColor: 'border.muted',
          my: '8',
        })}
      />
    ),
    strong: (props) => (
      <strong className={css({ fontWeight: 'bold', color: 'text.primary' })} {...props} />
    ),
  }
}

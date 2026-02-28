import { css } from '../../../../styled-system/css'
import { Container } from './Container'

const footer = css({
  borderTop: '1px solid',
  borderColor: 'border.faint',
  py: '8',
})

const footerInner = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const copyright = css({
  fontSize: 'xs',
  color: 'text.muted',
})

export function Footer() {
  return (
    <footer className={footer}>
      <Container className={footerInner}>
        <span className={copyright}>&copy; {new Date().getFullYear()} Novel Note</span>
      </Container>
    </footer>
  )
}

import { css } from '../../../../styled-system/css'
import { Logo } from '../Logo'
import { NavLink } from '../NavLink'
import { Container } from './Container'

const footer = css({
  borderTop: '1px solid',
  borderColor: 'border.faint',
  py: '8',
})

const footerInner = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const footerNav = css({
  display: 'flex',
  alignItems: 'center',
  gap: '6',
})

const copyright = css({
  fontSize: 'xs',
  color: 'text.muted',
})

export function Footer() {
  return (
    <footer className={footer}>
      <Container className={footerInner}>
        <Logo size="sm" />
        <nav className={footerNav}>
          <NavLink href="/">Blog</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>
        <span className={copyright}>&copy; {new Date().getFullYear()} Heat Tech</span>
      </Container>
    </footer>
  )
}

import { css } from '../../../../styled-system/css'
import { Logo } from '../Logo'
import { NavLink } from '../NavLink'
import { IconButton } from '../IconButton'
import { Button } from '../Button'
import { SearchIcon } from '../icons'
import { Container } from './Container'

const header = css({
  position: 'sticky',
  top: 0,
  zIndex: 50,
  bg: 'surface',
  borderBottom: '1px solid',
  borderColor: 'border.faint',
})

const headerInner = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  h: '16',
})

const nav = css({
  display: 'flex',
  alignItems: 'center',
  gap: '6',
})

const actions = css({
  display: 'flex',
  alignItems: 'center',
  gap: '2',
})

export function Header() {
  return (
    <header className={header}>
      <Container className={headerInner}>
        <div className={nav}>
          <Logo />
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/about">About</NavLink>
        </div>
        <div className={actions}>
          <IconButton aria-label="Search">
            <SearchIcon />
          </IconButton>
          <Button size="sm">Subscribe</Button>
        </div>
      </Container>
    </header>
  )
}

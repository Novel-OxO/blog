import { css } from '../../../../styled-system/css'
import { Logo } from '../Logo'
import { SearchDialog } from '../SearchDialog'
import { getAllPostsMeta } from '../../../features/blog/lib/content'
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

export function Header() {
  const posts = getAllPostsMeta()
  const searchItems = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    tags: p.tags,
  }))

  return (
    <header className={header}>
      <Container className={headerInner}>
        <Logo />
        <SearchDialog items={searchItems} />
      </Container>
    </header>
  )
}

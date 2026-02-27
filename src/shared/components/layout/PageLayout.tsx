import { css } from '../../../../styled-system/css'
import { Header } from './Header'
import { Footer } from './Footer'

const main = css({
  minH: '100vh',
  bg: 'bg.base',
})

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className={main}>{children}</main>
      <Footer />
    </>
  )
}

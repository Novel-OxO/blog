import type { Metadata } from 'next'
import { css } from '../../../styled-system/css'
import { Container } from '../../shared/components/layout'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Novel Note',
}

export default function AboutPage() {
  return (
    <Container>
      <div className={css({ py: '10' })}>
        <h1
          className={css({
            fontSize: '3xl',
            fontWeight: 'semibold',
            color: 'text.primary',
            letterSpacing: 'tight',
          })}
        >
          About
        </h1>
      </div>
    </Container>
  )
}

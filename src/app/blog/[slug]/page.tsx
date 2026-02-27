import { css } from '../../../../styled-system/css'
import { Container } from '../../../shared/components/layout'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
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
          {slug}
        </h1>
      </div>
    </Container>
  )
}

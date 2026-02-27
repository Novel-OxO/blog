import Image from 'next/image'
import Link from 'next/link'
import { css } from '../../../../styled-system/css'
import { Badge } from '../../../shared/components/Badge'
import { ArrowRightIcon } from '../../../shared/components/icons'
import type { FeaturedArticle } from '../types/article'

const hero = css({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '2xl',
  minH: '400px',
  display: 'flex',
  alignItems: 'flex-end',
})

const heroImage = css({
  position: 'absolute',
  inset: 0,
  objectFit: 'cover',
  w: 'full',
  h: 'full',
})

const heroOverlay = css({
  position: 'absolute',
  inset: 0,
  bg: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)',
})

const heroContent = css({
  position: 'relative',
  zIndex: 1,
  p: '8',
  display: 'flex',
  flexDir: 'column',
  gap: '3',
  maxW: '600px',
})

const heroTitle = css({
  fontSize: '3xl',
  fontWeight: 'semibold',
  lineHeight: 'snug',
  color: 'white',
})

const heroDescription = css({
  fontSize: 'md',
  color: 'neutral.300',
  lineHeight: 'normal',
})

const heroLink = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '1',
  fontSize: 'sm',
  fontWeight: 'semibold',
  color: 'heat.400',
  textDecoration: 'none',
  _hover: { gap: '2' },
  transition: 'gap 0.15s',
})

interface HeroSectionProps {
  article: FeaturedArticle
}

export function HeroSection({ article }: HeroSectionProps) {
  return (
    <section className={hero}>
      <Image src={article.coverImage} alt={article.title} fill className={heroImage} />
      <div className={heroOverlay} />
      <div className={heroContent}>
        <Badge variant="solid">{article.category}</Badge>
        <h2 className={heroTitle}>{article.title}</h2>
        <p className={heroDescription}>{article.description}</p>
        <Link href={`/${article.slug}`} className={heroLink}>
          Read article <ArrowRightIcon />
        </Link>
      </div>
    </section>
  )
}

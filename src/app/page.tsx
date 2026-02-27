import { css } from '../../styled-system/css'
import { Container } from '../shared/components/layout'
import {
  HeroSection,
  NewsletterForm,
  PopularPosts,
  CategoryTabs,
  ArticleGrid,
  LoadMoreButton,
} from '../features/blog/components'
import type { FeaturedArticle, ArticleCardData, PopularPost } from '../features/blog/types/article'

const featuredArticle: FeaturedArticle = {
  slug: 'introducing-heat-platform',
  title: 'Introducing the Heat Platform: Next-Gen Developer Tools',
  description:
    'Discover how Heat is revolutionizing developer workflows with AI-powered tools and seamless integrations.',
  category: 'Product',
  date: 'Feb 20, 2026',
  coverImage: 'https://picsum.photos/seed/hero/1200/600',
  tags: [],
}

const popularPosts: PopularPost[] = [
  {
    slug: 'typescript-5-features',
    title: 'Top TypeScript 5 Features You Should Know',
    readTime: '5 min read',
  },
  {
    slug: 'react-server-components',
    title: 'Understanding React Server Components',
    readTime: '8 min read',
  },
  { slug: 'css-has-selector', title: 'The Power of CSS :has() Selector', readTime: '4 min read' },
  {
    slug: 'edge-computing-guide',
    title: 'A Practical Guide to Edge Computing',
    readTime: '6 min read',
  },
]

const articles: ArticleCardData[] = [
  {
    slug: 'building-design-systems',
    title: 'Building Scalable Design Systems',
    description: 'Learn how to create a design system that scales with your team and product.',
    category: 'Design',
    date: 'Feb 18, 2026',
    coverImage: 'https://picsum.photos/seed/ds/600/400',
    tags: [],
  },
  {
    slug: 'nextjs-app-router',
    title: 'Mastering Next.js App Router',
    description: 'A deep dive into the App Router architecture and best practices.',
    category: 'Engineering',
    date: 'Feb 15, 2026',
    coverImage: 'https://picsum.photos/seed/nextjs/600/400',
    tags: [],
  },
  {
    slug: 'ai-developer-tools',
    title: 'AI-Powered Developer Tools in 2026',
    description: 'How artificial intelligence is transforming the way we write and ship code.',
    category: 'AI',
    date: 'Feb 12, 2026',
    coverImage: 'https://picsum.photos/seed/ai/600/400',
    tags: [],
  },
  {
    slug: 'web-performance',
    title: 'Web Performance Optimization Guide',
    description: 'Practical techniques to make your web applications blazingly fast.',
    category: 'Engineering',
    date: 'Feb 10, 2026',
    coverImage: 'https://picsum.photos/seed/perf/600/400',
    tags: [],
  },
  {
    slug: 'panda-css-deep-dive',
    title: 'Panda CSS: A Deep Dive',
    description: 'Exploring the power of type-safe, zero-runtime CSS-in-JS with Panda CSS.',
    category: 'Design',
    date: 'Feb 8, 2026',
    coverImage: 'https://picsum.photos/seed/panda/600/400',
    tags: [],
  },
  {
    slug: 'edge-functions',
    title: 'Edge Functions: The Complete Guide',
    description: 'Everything you need to know about deploying code at the edge.',
    category: 'Infrastructure',
    date: 'Feb 5, 2026',
    coverImage: 'https://picsum.photos/seed/edge/600/400',
    tags: [],
  },
]

const categories = ['All', 'Engineering', 'Design', 'AI', 'Product', 'Infrastructure']

const section = css({ py: '10' })

const sidebarSection = css({
  display: 'grid',
  gridTemplateColumns: { base: '1fr', lg: '1fr 340px' },
  gap: '10',
  py: '10',
})

const sidebarBox = css({
  display: 'flex',
  flexDir: 'column',
  gap: '6',
})

const sectionTitle = css({
  fontSize: '2xl',
  fontWeight: 'semibold',
  color: 'text.primary',
  letterSpacing: 'tight',
})

const articlesSection = css({
  display: 'flex',
  flexDir: 'column',
  gap: '8',
})

const loadMoreWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  pt: '4',
})

export default function Home() {
  return (
    <Container>
      <section className={section}>
        <HeroSection article={featuredArticle} />
      </section>

      <div className={sidebarSection}>
        <div className={articlesSection}>
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '4',
              flexWrap: 'wrap',
            })}
          >
            <h2 className={sectionTitle}>Latest Articles</h2>
            <CategoryTabs categories={categories} />
          </div>
          <ArticleGrid articles={articles} />
          <div className={loadMoreWrapper}>
            <LoadMoreButton />
          </div>
        </div>

        <aside className={sidebarBox}>
          <div
            className={css({
              bg: 'surface.raised',
              borderRadius: 'xl',
              border: '1px solid',
              borderColor: 'border.faint',
              p: '6',
              display: 'flex',
              flexDir: 'column',
              gap: '4',
            })}
          >
            <h3 className={css({ fontSize: 'lg', fontWeight: 'semibold', color: 'text.primary' })}>
              Newsletter
            </h3>
            <p className={css({ fontSize: 'sm', color: 'text.secondary' })}>
              Get the latest articles delivered straight to your inbox.
            </p>
            <NewsletterForm />
          </div>

          <div
            className={css({
              bg: 'surface.raised',
              borderRadius: 'xl',
              border: '1px solid',
              borderColor: 'border.faint',
              p: '6',
              display: 'flex',
              flexDir: 'column',
              gap: '4',
            })}
          >
            <h3 className={css({ fontSize: 'lg', fontWeight: 'semibold', color: 'text.primary' })}>
              Popular Posts
            </h3>
            <PopularPosts posts={popularPosts} />
          </div>
        </aside>
      </div>
    </Container>
  )
}

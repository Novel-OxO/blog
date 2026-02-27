import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { css } from '../../../../styled-system/css'
import { Container } from '../../../shared/components/layout'
import { Badge } from '../../../shared/components/Badge'
import { getPostBySlug, getAllPostSlugs } from '../../../features/blog/lib/content'
import { formatDate } from '../../../features/blog/lib/adapters'
import { getMDXComponents } from '../../../features/blog/components/mdx'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  let post
  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }

  return (
    <Container>
      <article
        className={css({
          maxW: '720px',
          mx: 'auto',
          py: '10',
        })}
      >
        <header className={css({ mb: '8' })}>
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '3',
              mb: '4',
            })}
          >
            <Badge>{post.category}</Badge>
            <span
              className={css({
                textStyle: 'body.sm',
                color: 'text.muted',
              })}
            >
              {formatDate(post.date)}
            </span>
            <span
              className={css({
                textStyle: 'body.sm',
                color: 'text.muted',
              })}
            >
              {post.readTime}
            </span>
          </div>
          <h1
            className={css({
              fontSize: { base: '3xl', md: '4xl' },
              fontWeight: 'semibold',
              color: 'text.primary',
              lineHeight: 'tight',
              mb: '4',
            })}
          >
            {post.title}
          </h1>
          <p
            className={css({
              textStyle: 'body.base',
              color: 'text.secondary',
              lineHeight: 'relaxed',
            })}
          >
            {post.description}
          </p>
        </header>

        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  { theme: { light: 'github-light', dark: 'github-dark' }, keepBackground: false },
                ],
                rehypeSlug,
                rehypeAutolinkHeadings,
              ],
            },
          }}
          components={getMDXComponents()}
        />
      </article>
    </Container>
  )
}

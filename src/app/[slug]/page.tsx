import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { css } from '../../../styled-system/css'
import { Container } from '../../shared/components/layout'
import { Badge } from '../../shared/components/Badge'
import { getPostBySlug, getAllPostSlugs, getAdjacentPosts } from '../../features/blog/lib/content'
import { formatDate } from '../../features/blog/lib/adapters'
import { getMDXComponents } from '../../features/blog/components/mdx'
import { extractTocFromMarkdown } from '../../features/blog/lib/toc'
import { TableOfContents } from '../../features/blog/components/TableOfContents'
import { PostNavigation } from '../../features/blog/components/PostNavigation'

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

  const tocItems = extractTocFromMarkdown(post.content)
  const { newer, older } = getAdjacentPosts(slug)

  return (
    <Container>
      <div
        className={css({
          display: 'flex',
          gap: '10',
          justifyContent: 'center',
          py: '10',
        })}
      >
        <article
          className={css({
            maxW: '720px',
            w: '100%',
            minW: 0,
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
            {post.tags.length > 0 && (
              <div className={css({ display: 'flex', gap: '2', flexWrap: 'wrap', mt: '4' })}>
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/tag/${tag}`}>
                    <Badge variant="subtle">{tag}</Badge>
                  </Link>
                ))}
              </div>
            )}
          </header>

          {post.coverImage && (
            <div
              className={css({
                position: 'relative',
                w: '100%',
                aspectRatio: '2/1',
                rounded: 'xl',
                overflow: 'hidden',
                mb: '8',
              })}
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className={css({ objectFit: 'cover' })}
              />
            </div>
          )}

          <TableOfContents items={tocItems} variant="mobile" />

          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: { light: 'github-light', dark: 'github-dark' },
                      keepBackground: false,
                    },
                  ],
                  rehypeSlug,
                  rehypeAutolinkHeadings,
                ],
              },
            }}
            components={getMDXComponents()}
          />

          <PostNavigation newer={newer} older={older} />
        </article>

        {/* Desktop TOC sidebar */}
        <TableOfContents items={tocItems} variant="desktop" />
      </div>
    </Container>
  )
}

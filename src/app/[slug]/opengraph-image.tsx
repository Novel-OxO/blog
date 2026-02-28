import { ImageResponse } from 'next/og'
import { getPostBySlug, getAllPostSlugs } from '../../features/blog/lib/content'

export const runtime = 'nodejs'
export const alt = 'Post cover'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let title = slug
  let category = ''
  let date = ''

  try {
    const post = getPostBySlug(slug)
    title = post.title
    category = post.category
    date = new Date(post.date).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    // fallback to slug
  }

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 60,
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)',
        fontFamily: 'sans-serif',
      }}
    >
      {category && (
        <div
          style={{
            fontSize: 22,
            color: '#6366f1',
            fontWeight: 600,
            marginBottom: 16,
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}
        >
          {category}
        </div>
      )}
      <div
        style={{
          fontSize: 52,
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1.2,
          marginBottom: 24,
          maxWidth: '90%',
        }}
      >
        {title}
      </div>
      {date && (
        <div
          style={{
            fontSize: 20,
            color: '#a0a0b0',
          }}
        >
          {date}
        </div>
      )}
    </div>,
    { ...size },
  )
}

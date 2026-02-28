import { ImageResponse } from 'next/og'
import { siteConfig } from '../shared/lib/site'

export const runtime = 'nodejs'
export const alt = siteConfig.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: 16,
        }}
      >
        {siteConfig.name}
      </div>
      <div
        style={{
          fontSize: 28,
          color: '#a0a0b0',
        }}
      >
        {siteConfig.description}
      </div>
    </div>,
    { ...size },
  )
}

import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { PageLayout } from '../shared/components/layout'
import { siteConfig } from '../shared/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: './',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <PageLayout>{children}</PageLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

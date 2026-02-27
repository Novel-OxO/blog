import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { PageLayout } from '../shared/components/layout'
import './globals.css'

export const metadata: Metadata = {
  title: 'Heat Tech Blog',
  description: 'Tech articles and insights',
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
      </body>
    </html>
  )
}

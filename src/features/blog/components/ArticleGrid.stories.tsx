import type { Meta, StoryObj } from '@storybook/react'
import { ArticleGrid } from './ArticleGrid'

const meta: Meta<typeof ArticleGrid> = {
  title: 'Blog/ArticleGrid',
  component: ArticleGrid,
  tags: ['autodocs'],
  parameters: {
    nextjs: { appDirectory: true },
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 24 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ArticleGrid>

export const Default: Story = {
  args: {
    articles: [
      {
        slug: 'building-design-systems',
        title: 'Building Scalable Design Systems',
        description: 'Learn how to create a design system that scales with your team and product.',
        category: 'Design',
        date: 'Feb 18, 2026',
        coverImage: 'https://picsum.photos/seed/ds/600/400',
      },
      {
        slug: 'nextjs-app-router',
        title: 'Mastering Next.js App Router',
        description: 'A deep dive into the App Router architecture and best practices.',
        category: 'Engineering',
        date: 'Feb 15, 2026',
        coverImage: 'https://picsum.photos/seed/nextjs/600/400',
      },
      {
        slug: 'ai-developer-tools',
        title: 'AI-Powered Developer Tools in 2026',
        description: 'How artificial intelligence is transforming the way we write and ship code.',
        category: 'AI',
        date: 'Feb 12, 2026',
        coverImage: 'https://picsum.photos/seed/ai/600/400',
      },
    ],
  },
}

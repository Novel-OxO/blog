import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCard } from './ArticleCard'

const meta: Meta<typeof ArticleCard> = {
  title: 'Blog/ArticleCard',
  component: ArticleCard,
  tags: ['autodocs'],
  parameters: {
    nextjs: { appDirectory: true },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ArticleCard>

export const Default: Story = {
  args: {
    article: {
      slug: 'building-design-systems',
      title: 'Building Scalable Design Systems',
      description: 'Learn how to create a design system that scales with your team and product.',
      category: 'Design',
      date: 'Feb 18, 2026',
      coverImage: 'https://picsum.photos/seed/ds/600/400',
    },
  },
}

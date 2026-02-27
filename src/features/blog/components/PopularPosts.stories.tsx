import type { Meta, StoryObj } from '@storybook/react'
import { PopularPosts } from './PopularPosts'

const meta: Meta<typeof PopularPosts> = {
  title: 'Blog/PopularPosts',
  component: PopularPosts,
  tags: ['autodocs'],
  parameters: {
    nextjs: { appDirectory: true },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 340 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof PopularPosts>

export const Default: Story = {
  args: {
    posts: [
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
      {
        slug: 'css-has-selector',
        title: 'The Power of CSS :has() Selector',
        readTime: '4 min read',
      },
      {
        slug: 'edge-computing-guide',
        title: 'A Practical Guide to Edge Computing',
        readTime: '6 min read',
      },
    ],
  },
}

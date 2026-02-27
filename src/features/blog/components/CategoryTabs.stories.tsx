import type { Meta, StoryObj } from '@storybook/react'
import { CategoryTabs } from './CategoryTabs'

const meta: Meta<typeof CategoryTabs> = {
  title: 'Blog/CategoryTabs',
  component: CategoryTabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CategoryTabs>

export const Default: Story = {
  args: {
    categories: ['All', 'Engineering', 'Design', 'AI', 'Product', 'Infrastructure'],
    activeCategory: 'All',
  },
}

export const WithActive: Story = {
  args: {
    categories: ['All', 'Engineering', 'Design'],
    activeCategory: 'Design',
  },
}

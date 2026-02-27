import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection } from './HeroSection'

const meta: Meta<typeof HeroSection> = {
  title: 'Blog/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    nextjs: { appDirectory: true },
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof HeroSection>

export const Default: Story = {
  args: {
    article: {
      slug: 'introducing-heat-platform',
      title: 'Introducing the Heat Platform: Next-Gen Developer Tools',
      description:
        'Discover how Heat is revolutionizing developer workflows with AI-powered tools and seamless integrations.',
      category: 'Product',
      date: 'Feb 20, 2026',
      coverImage: 'https://picsum.photos/seed/hero/1200/600',
      tags: [],
    },
  },
}

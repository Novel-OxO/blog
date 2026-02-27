import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Shared/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    nextjs: { appDirectory: true },
  },
}

export default meta
type Story = StoryObj<typeof Logo>

export const Medium: Story = {
  args: {
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

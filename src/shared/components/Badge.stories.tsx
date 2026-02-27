import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Shared/Badge',
  component: Badge,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Solid: Story = {
  args: {
    children: 'Product',
    variant: 'solid',
  },
}

export const Subtle: Story = {
  args: {
    children: 'Design',
    variant: 'subtle',
  },
}

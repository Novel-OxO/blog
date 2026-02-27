import type { Meta, StoryObj } from '@storybook/react'
import { LoadMoreButton } from './LoadMoreButton'

const meta: Meta<typeof LoadMoreButton> = {
  title: 'Blog/LoadMoreButton',
  component: LoadMoreButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LoadMoreButton>

export const Default: Story = {}

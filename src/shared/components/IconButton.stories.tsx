import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'
import { SearchIcon } from './icons'

const meta: Meta<typeof IconButton> = {
  title: 'Shared/IconButton',
  component: IconButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Ghost: Story = {
  args: {
    'aria-label': 'Search',
    variant: 'ghost',
    children: <SearchIcon />,
  },
}

export const Outline: Story = {
  args: {
    'aria-label': 'Search',
    variant: 'outline',
    children: <SearchIcon />,
  },
}

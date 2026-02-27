import type { Meta, StoryObj } from '@storybook/react'
import { NavLink } from './NavLink'

const meta: Meta<typeof NavLink> = {
  title: 'Shared/NavLink',
  component: NavLink,
  tags: ['autodocs'],
  parameters: {
    nextjs: { appDirectory: true },
  },
}

export default meta
type Story = StoryObj<typeof NavLink>

export const Default: Story = {
  args: {
    href: '/blog',
    children: 'Blog',
  },
}

export const Active: Story = {
  args: {
    href: '/',
    children: 'Home',
  },
  parameters: {
    nextjs: { navigation: { pathname: '/' } },
  },
}

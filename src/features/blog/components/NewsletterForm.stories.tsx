import type { Meta, StoryObj } from '@storybook/react'
import { NewsletterForm } from './NewsletterForm'

const meta: Meta<typeof NewsletterForm> = {
  title: 'Blog/NewsletterForm',
  component: NewsletterForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof NewsletterForm>

export const Default: Story = {}

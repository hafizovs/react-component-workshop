import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/shared/ui/button'

const meta = {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'Click me',
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'default' },
}

export const Outline: Story = {
  args: { variant: 'outline' },
}

export const Small: Story = {
  args: { size: 'sm', children: 'Small action' },
}

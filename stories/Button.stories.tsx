import type { Meta, StoryObj } from '@storybook/react'

const Button = () => (
  <button className="bg-blue-500 text-white px-4 py-2 rounded">
    Click me
  </button>
)

const meta = {
  title: 'Example/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {} 
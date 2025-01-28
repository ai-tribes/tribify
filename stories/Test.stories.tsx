import type { Meta, StoryObj } from '@storybook/react'

const TestComponent = () => <div>Test</div>

const meta = {
  title: 'Test',
  component: TestComponent,
} satisfies Meta<typeof TestComponent>

export default meta
type Story = StoryObj<typeof TestComponent>

export const Primary: Story = {} 
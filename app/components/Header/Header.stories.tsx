import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'
import { ThemeProvider } from 'next-themes'

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class">
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {}

export const Dark: Story = {
  parameters: {
    themes: {
      defaultTheme: 'dark'
    }
  }
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
} 
import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'
import { ThemeProvider } from '../ThemeProvider'

const meta = {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      disable: true,
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof Header>

export const Light: Story = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export const Dark: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    theme: 'dark',
  },
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
} 
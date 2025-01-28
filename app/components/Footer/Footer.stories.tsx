import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'
import { ThemeProvider } from '../ThemeProvider'
import { StyleProvider } from '../../contexts/StyleProvider'

const meta = {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <StyleProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Story />
        </ThemeProvider>
      </StyleProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      disable: true,
    },
  },
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof Footer>

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
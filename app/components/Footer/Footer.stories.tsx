import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'
import { ThemeProvider } from 'next-themes'
import { Button } from 'flowbite-react'
import Link from 'next/link'

// Mock Next.js Link component for Storybook
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system">
        <div className="min-h-screen">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof Footer>

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
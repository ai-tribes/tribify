import { Preview } from '@storybook/react'
import { Flowbite } from 'flowbite-react'
import { ThemeProvider } from 'next-themes'
import '../styles/tailwind.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" enableSystem defaultTheme="dark" forcedTheme="dark">
        <div className="dark">
          <Flowbite theme={{ dark: true }}>
            <Story />
          </Flowbite>
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'dark',
      stylePreview: true
    }
  },
}

export default preview 
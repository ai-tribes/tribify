import "styles/tailwind.css"
import { Flowbite } from 'flowbite-react'
import { ThemeProvider } from 'next-themes'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "tribify.ai",
  description: "Building the future of AI tribes",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-dark min-h-screen">
        <ThemeProvider attribute="class" enableSystem>
          <Flowbite>
            <Header />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </Flowbite>
        </ThemeProvider>
      </body>
    </html>
  )
}

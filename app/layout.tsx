import "styles/tailwind.css"
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ThemeProvider } from './components/ThemeProvider'
import { StyleProvider } from './contexts/StyleProvider'
import { StyleToggle } from './components/StyleToggle'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StyleProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <div className="fixed top-4 right-4 z-50">
              <StyleToggle />
            </div>
            <main className="pt-16 min-h-screen">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </StyleProvider>
      </body>
    </html>
  )
}

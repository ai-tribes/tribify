import { Flowbite } from 'flowbite-react';
import { Metadata } from "next";
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { PaywallProvider } from './components/PaywallProvider';
import { SolanaProvider } from './components/SolanaProvider';
import './globals.css';
import "styles/tailwind.css";

const _inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "tribify.ai",
  description: "Building the future of AI tribes",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-dark min-h-screen">
        <SolanaProvider>
          <PaywallProvider>
            <ThemeProvider attribute="class" enableSystem>
              <Flowbite>
                <Header />
                <main className="pt-16">
                  {children}
                </main>
                <Footer />
              </Flowbite>
            </ThemeProvider>
          </PaywallProvider>
        </SolanaProvider>
      </body>
    </html>
  )
}

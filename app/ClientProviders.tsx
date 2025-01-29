'use client';

import { Flowbite } from 'flowbite-react';
import { ThemeProvider } from 'next-themes';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { PaywallProvider } from './components/PaywallProvider';
import { SolanaProvider } from './components/SolanaProvider';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
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
  );
} 
'use client';

import { ThemeProvider } from 'next-themes';
import { PaywallProvider } from './components/PaywallProvider';
import { SolanaProvider } from './components/SolanaProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SolanaProvider>
      <PaywallProvider>
        <ThemeProvider attribute="class" enableSystem>
          {children}
        </ThemeProvider>
      </PaywallProvider>
    </SolanaProvider>
  );
} 
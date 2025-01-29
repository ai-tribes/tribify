'use client';

import dynamic from 'next/dynamic';

const ClientProviders = dynamic(() => import('./ClientProviders'), { 
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-dark">
      <div className="animate-pulse">Loading...</div>
    </div>
  )
});

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return <ClientProviders>{children}</ClientProviders>;
} 
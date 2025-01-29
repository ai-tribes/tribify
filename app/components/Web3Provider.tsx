'use client';

import { useEffect, useState } from 'react';

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [_ethereum, _setEthereum] = useState<unknown>(null);

  useEffect(() => {
    // Wait for any ethereum provider injection to complete
    const timeout = setTimeout(() => {
      if (typeof window !== 'undefined' && window.ethereum) {
        _setEthereum(window.ethereum);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return <>{children}</>;
} 
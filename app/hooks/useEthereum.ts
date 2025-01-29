'use client';

import type { MetaMaskInpageProvider } from '@metamask/providers';
import { useEffect, useState } from 'react';

export function useEthereum() {
  const [ethereum, setEthereum] = useState<MetaMaskInpageProvider | null>(null);

  useEffect(() => {
    // Delay ethereum check to avoid conflicts with extensions
    const timeout = setTimeout(() => {
      if (window.ethereum) {
        setEthereum(window.ethereum);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return ethereum;
} 
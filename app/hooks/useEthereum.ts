'use client';

import type { MetaMaskInpageProvider } from '@metamask/providers';
import { useEffect, useState } from 'react';

export function useEthereum() {
  const [ethereum, setEthereum] = useState<MetaMaskInpageProvider | null>(null);

  useEffect(() => {
    // Wait for window.ethereum to be injected
    const checkEthereum = () => {
      if (window.ethereum) {
        setEthereum(window.ethereum);
      }
    };

    checkEthereum();
    
    // Handle case where ethereum is injected after page load
    window.addEventListener('ethereum#initialized', checkEthereum);
    
    return () => {
      window.removeEventListener('ethereum#initialized', checkEthereum);
    };
  }, []);

  return ethereum;
} 
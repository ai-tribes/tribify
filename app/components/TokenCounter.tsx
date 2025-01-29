'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey } from '@solana/web3.js';
import { useEffect, useState } from 'react';

const TRIBIFY_TOKEN_MINT = '672PLqkiNdmByS6N1BQT5YPbEpkZte284huLUCxupump';

export function TokenCounter() {
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!publicKey) return;
      
      try {
        const connection = new Connection(process.env.NEXT_PUBLIC_HELIUS_RPC_URL!);
        const accounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
          mint: new PublicKey(TRIBIFY_TOKEN_MINT)
        });
        const balance = accounts.value[0]?.account.data.parsed.info.tokenAmount.uiAmount ?? 0;
        setBalance(balance);
      } catch (error) {
        console.error('Failed to fetch token balance:', error);
        setBalance(0);
      }
    };

    fetchBalance();
    const interval = setInterval(fetchBalance, 10000);
    return () => clearInterval(interval);
  }, [publicKey]);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="fixed top-6 left-6 backdrop-blur-sm">
        <div className="bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-4 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-2xl font-mono font-bold text-black dark:text-white tracking-tight">
                  {balance === null ? '...' : balance.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider">
                  tribify
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
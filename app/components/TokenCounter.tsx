'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey } from '@solana/web3.js';
import { useEffect, useState } from 'react';

const TRIBIFY_TOKEN_MINT = '672PLqkiNdmByS6N1BQT5YPbEpkZte284huLUCxupump';
const OFFICIAL_PRICE = 0.01;

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
        setBalance(Math.floor(balance));
      } catch (error) {
        console.error('Failed to fetch token balance:', error);
        setBalance(0);
      }
    };

    fetchBalance();
    const interval = setInterval(fetchBalance, 10000);
    return () => clearInterval(interval);
  }, [publicKey]);

  const walletValue = balance === null ? '...' : `$${new Intl.NumberFormat().format(balance * OFFICIAL_PRICE)}`;

  return (
    <div className="fixed top-6 left-6 backdrop-blur-sm">
      <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-black dark:text-white">
              {balance === null ? '...' : new Intl.NumberFormat().format(balance)}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
              <p className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider">
                $TRIBIFY
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Value: {walletValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 
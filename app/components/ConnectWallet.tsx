'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { useCallback, useEffect, useState } from 'react';

export function ConnectWallet() {
  const { select, connect, disconnect, connected, connecting, wallets } = useWallet();
  const [selectedWallet, setSelectedWallet] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle wallet selection
  useEffect(() => {
    const phantomWallet = wallets.find(w => w.adapter.name === 'Phantom');
    if (phantomWallet && !selectedWallet) {
      select(phantomWallet.adapter.name);
      setSelectedWallet(true);
    }
  }, [wallets, select, selectedWallet]);

  const handleConnect = useCallback(async () => {
    try {
      setError(null);
      await connect();
    } catch (err) {
      console.error('Failed to connect:', err);
      setError(err instanceof Error ? err.message : 'Failed to connect wallet');
      setSelectedWallet(false);
    }
  }, [connect]);

  const handleDisconnect = useCallback(async () => {
    try {
      await disconnect();
      setSelectedWallet(false);
    } catch (err) {
      console.error('Failed to disconnect:', err);
      setError(err instanceof Error ? err.message : 'Failed to disconnect wallet');
    }
  }, [disconnect]);

  if (connected) {
    return (
      <div className="relative">
        <button
          onClick={handleDisconnect}
          className="px-8 py-3 bg-[#AB9FF2] text-white text-lg rounded-lg font-medium hover:bg-[#9D8FE5] disabled:opacity-50 transition-all duration-200"
        >
          Disconnect
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handleConnect}
        disabled={connecting || !selectedWallet}
        className="px-8 py-3 bg-white text-black border border-black text-lg rounded-lg font-medium hover:bg-gray-50 disabled:opacity-50 transition-all duration-200 dark:bg-black dark:text-white dark:border-white dark:hover:bg-gray-900"
      >
        {!selectedWallet ? 'Loading...' : 
         connecting ? 'Connecting...' : 
         'Connect Wallet'}
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
} 
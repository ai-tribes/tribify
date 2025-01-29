'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { useEffect, useMemo, useState } from 'react';
import { ConnectWallet } from './ConnectWallet';
import { TokenCounter } from './TokenCounter';

const TREASURY_ADDRESS = '3qWq2ehELrVJrTg2JN4HgpyqnHyDKZu5MoLd4Zc1YgZR';
// $0.01 worth of SOL at $300/SOL = 0.0000333... SOL
const PAYMENT_AMOUNT = LAMPORTS_PER_SOL * 0.00003;

interface PaywallProviderProps {
  children: React.ReactNode;
}

declare global {
  interface Window {
    solana: {
      connection: Connection;
      getLatestBlockhash: () => Promise<{ blockhash: string }>;
    };
  }
}

export function PaywallProvider({ children }: PaywallProviderProps) {
  const { connected, publicKey, signTransaction } = useWallet();
  const [hasAccess, setHasAccess] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [_loading, _setLoading] = useState(true);

  const connection = useMemo(() => {
    if (!process.env.NEXT_PUBLIC_HELIUS_RPC_URL) {
      console.error('NEXT_PUBLIC_HELIUS_RPC_URL is not set');
      return null;
    }
    return new Connection(process.env.NEXT_PUBLIC_HELIUS_RPC_URL);
  }, []);

  // Simplified treasury check
  useEffect(() => {
    if (connected && publicKey?.toBase58() === TREASURY_ADDRESS) {
      setHasAccess(true);
    }
  }, [connected, publicKey]);

  const verifyAccess = async () => {
    if (!connected) {
      setError('Please connect your wallet first');
      return;
    }
    if (!publicKey) {
      setError('No public key found');
      return;
    }
    if (!signTransaction) {
      setError('No sign transaction function found');
      return;
    }
    if (!connection) {
      setError('No RPC connection available');
      return;
    }

    setError(null);
    
    try {
      setVerifying(true);
      
      if (publicKey.toBase58() === TREASURY_ADDRESS) {
        setHasAccess(true);
        return;
      }

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(TREASURY_ADDRESS),
          lamports: PAYMENT_AMOUNT
        })
      );

      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;

      const signedTx = await signTransaction(transaction);
      const signature = await connection.sendRawTransaction(
        signedTx.serialize()
      );

      await connection.confirmTransaction(signature);
      
      setHasAccess(true);
      localStorage.setItem('tribify-access', 'true');
      
    } catch (err) {
      console.error('Access verification failed:', err);
      setError(err instanceof Error ? err.message : 'Transaction failed. Please try again.');
    } finally {
      setVerifying(false);
    }
  };

  if (!connected) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <ConnectWallet />
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={verifyAccess}
            disabled={verifying || !connection}
            className="px-8 py-3 bg-white text-black border border-black text-lg rounded-lg font-medium hover:bg-gray-50 disabled:opacity-50 transition-all duration-200 dark:bg-black dark:text-white dark:border-white dark:hover:bg-gray-900"
          >
            {verifying ? 'Processing...' : '/tribify.ai'}
          </button>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
        </div>
      </div>
    );
  }

  return <TokenCounter />;
} 
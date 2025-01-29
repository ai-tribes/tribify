'use client';

import { useEthereum } from '../hooks/useEthereum';

export function Web3Component() {
  const ethereum = useEthereum();

  if (!ethereum) {
    return <div>No Web3 wallet detected</div>;
  }

  return (
    <div>
      {/* Your Web3 component content */}
    </div>
  );
} 
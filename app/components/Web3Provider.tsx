'use client';

import { useState } from 'react';

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [_ethereum, _setEthereum] = useState<unknown>(null);
  return <>{children}</>;
} 
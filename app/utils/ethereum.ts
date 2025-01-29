export function getEthereum() {
  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    return window.ethereum;
  }
  return null;
} 
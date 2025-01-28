'use client'

import { useStyle } from '../../contexts/StyleProvider'
import { RadixHeader } from './variants/RadixHeader'
import { ShadcnHeader } from './variants/ShadcnHeader'

export const Header = () => {
  const { styleTheme } = useStyle()
  
  return styleTheme === 'radix' ? <RadixHeader /> : <ShadcnHeader />
} 
'use client'

import { useStyle } from '../../contexts/StyleProvider'
import { RadixFooter } from './variants/RadixFooter'
import { ShadcnFooter } from './variants/ShadcnFooter'

export const Footer = () => {
  const { styleTheme } = useStyle()
  
  return styleTheme === 'radix' ? <RadixFooter /> : <ShadcnFooter />
} 
'use client'

import { useStyle } from '../contexts/StyleProvider'
import { Button } from '../../components/ui/button'

export const StyleToggle = () => {
  const { styleTheme, toggleStyle } = useStyle()
  
  return (
    <Button onClick={toggleStyle} variant="outline">
      {styleTheme === 'radix' ? 'Try shadcn' : 'Try Radix'}
    </Button>
  )
} 
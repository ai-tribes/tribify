'use client'

import { createContext, useContext, useState } from 'react'

type StyleTheme = 'radix' | 'shadcn'

interface StyleContextType {
  styleTheme: StyleTheme
  toggleStyle: () => void
}

const StyleContext = createContext<StyleContextType | undefined>(undefined)

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [styleTheme, setStyleTheme] = useState<StyleTheme>('radix')

  const toggleStyle = () => {
    setStyleTheme(current => current === 'radix' ? 'shadcn' : 'radix')
  }

  return (
    <StyleContext.Provider value={{ styleTheme, toggleStyle }}>
      {children}
    </StyleContext.Provider>
  )
}

export const useStyle = () => {
  const context = useContext(StyleContext)
  if (!context) throw new Error('useStyle must be used within StyleProvider')
  return context
} 
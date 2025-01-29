'use client'

import { Button } from 'flowbite-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

export const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="!p-2 h-9 w-9 flex items-center justify-center bg-transparent dark:hover:bg-dark-lighter hover:bg-gray-100 
        text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
    >
      {theme === 'light' ? (
        <HiMoon className="h-5 w-5" />
      ) : (
        <HiSun className="h-5 w-5" />
      )}
    </Button>
  )
} 
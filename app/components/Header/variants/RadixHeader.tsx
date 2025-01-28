'use client'

import Link from 'next/link'
import { Switch } from '@radix-ui/react-switch'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const RadixHeader = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              /tribify.ai
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Features
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {mounted && (
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="bg-gray-200 dark:bg-gray-700 relative inline-flex h-6 w-11 items-center rounded-full"
              />
            )}
            <Link 
              href="/login"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 
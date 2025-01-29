'use client'

import { Button } from 'flowbite-react'
import Link from 'next/link'
import { HiOutlineMenu } from 'react-icons/hi'
import { DarkModeToggle } from '../DarkModeToggle'

export const Header = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed w-full z-50 border-b bg-white/80 backdrop-blur-md dark:bg-[#0f1629]/80 border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Left side - Logo & Nav */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              /tribify.ai
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollTo('about')} className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition">
              About
            </button>
            <button onClick={() => scrollTo('vision')} className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition">
              Vision
            </button>
            <button onClick={() => scrollTo('features')} className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition">
              Features
            </button>
            <button onClick={() => scrollTo('strategy')} className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition">
              Strategy
            </button>
            <button onClick={() => scrollTo('contact')} className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition">
              Contact
            </button>
          </nav>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              as={Link} 
              href="/login" 
              className="bg-transparent dark:hover:bg-dark-lighter hover:bg-gray-100 
                text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            >
              Sign in
            </Button>
            <Button 
              as={Link} 
              href="/signup" 
              className="bg-dark hover:bg-dark-lighter text-white dark:bg-white dark:text-dark 
                dark:hover:bg-gray-100 font-medium"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu */}
          <Button className="md:hidden" color="gray" size="sm">
            <HiOutlineMenu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
} 
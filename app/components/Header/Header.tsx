'use client'

import { Button, Dropdown } from 'flowbite-react'
import Link from 'next/link'
import { HiChevronDown, HiOutlineMenu } from 'react-icons/hi'
import { ConnectWallet } from '../ConnectWallet'
import { DarkModeToggle } from '../DarkModeToggle'

const mainNavItems = [
  { name: 'About', id: 'about' },
  { name: 'Vision', id: 'vision' },
  { name: 'Features', id: 'features' },
  { name: 'Strategy', id: 'strategy' },
];

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
            <div className="relative">
              <Dropdown
                label={
                  <div className="flex items-center text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition cursor-pointer">
                    Menu
                    <HiChevronDown className="ml-1 h-4 w-4" />
                  </div>
                }
                inline
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                {mainNavItems.map((item) => (
                  <Dropdown.Item
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                  >
                    {item.name}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </div>

            <Link href="/resources" className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition">
              Resources
            </Link>
            <button onClick={() => scrollTo('contact')} className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition">
              Contact
            </button>
          </nav>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          
          <div className="hidden md:flex items-center space-x-2">
            <ConnectWallet />
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
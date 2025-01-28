'use client'

import { Button } from 'flowbite-react'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0f1629] border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                /tribify.ai
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Building the future of AI tribes. Connect, collaborate, and create with AI-powered communities.
            </p>
            <Button color="gray" className="mt-4" size="sm">
              <span>Join our newsletter</span>
              <HiArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Links sections */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Product</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link href="/features" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Company</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link href="/about" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Legal</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} tribify.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 
'use client'

import { Button } from 'flowbite-react'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <section className="relative bg-white dark:bg-dark overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 grid max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-48 mx-auto">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900 dark:text-white mb-8">
            Building the future of AI tribes
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-12">
            Connect, collaborate, and create with AI-powered communities. Join tribify.ai to be part of the next generation of digital tribes.
          </p>
          <div className="flex space-x-4">
            <Button 
              as={Link} 
              href="/signup" 
              className="bg-dark hover:bg-dark-lighter text-white dark:bg-white dark:text-dark 
                dark:hover:bg-gray-100 font-medium px-8 py-3"
            >
              Get started
            </Button>
            <Button 
              as={Link} 
              href="/web3strategy" 
              className="bg-transparent dark:hover:bg-dark-lighter hover:bg-gray-100 
                text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-8 py-3"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 
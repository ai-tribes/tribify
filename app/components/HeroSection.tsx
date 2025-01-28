'use client'

import { Button } from 'flowbite-react'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <section className="relative bg-white dark:bg-dark overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-brand-accent/20 to-brand-stone/20 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 grid max-w-screen-xl px-4 py-24 mx-auto lg:gap-8 xl:gap-0 lg:py-36 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900 dark:text-white">
            Building the future of AI tribes
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Connect, collaborate, and create with AI-powered communities. Join tribify.ai to be part of the next generation of digital tribes.
          </p>
          <div className="space-x-4">
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
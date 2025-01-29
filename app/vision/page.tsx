import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vision | tribify.ai",
  description: "Our vision for the future of AI-powered digital communities",
}

export default function VisionPage() {
  return (
    <div className="relative">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-brand-accent/20 to-brand-stone/20 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Our Vision
        </h1>

        {/* Executive Summary */}
        <section className="mb-12">
          <div className="bg-white dark:bg-dark rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Executive Summary</h2>
            <p className="text-gray-600 dark:text-gray-400">
              tribify.ai is building a next-generation platform that combines AI and Web3 technologies to create 
              and empower digital communities. Our platform enables seamless collaboration, fair value distribution, 
              and AI-powered community growth.
            </p>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="mb-12">
          <div className="space-y-6">
            <div className="bg-white dark:bg-dark rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">The Problem</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                    Traditional Communities Lack
                  </h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                    <li>True ownership and governance</li>
                    <li>Fair value distribution</li>
                    <li>Intelligent member matching</li>
                    <li>Automated content moderation</li>
                    <li>Scalable engagement tools</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                    Current Challenges
                  </h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                    <li>Centralized control</li>
                    <li>Limited monetization options</li>
                    <li>Manual community management</li>
                    <li>Poor member retention</li>
                    <li>Fragmented tools and platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-dark rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Solution</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                    AI-Powered Community Tools
                  </h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                    <li>Intelligent member matching</li>
                    <li>Automated content moderation</li>
                    <li>Personalized engagement feeds</li>
                    <li>Smart community insights</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                    Web3 Infrastructure
                  </h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                    <li>Token-based governance</li>
                    <li>NFT membership system</li>
                    <li>Decentralized storage</li>
                    <li>Smart contract automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market & Business */}
        <section className="mb-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white dark:bg-dark rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Market Size</h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Global Community Management: $1.2B (2023)</li>
                <li>Web3 Community Market: $500M</li>
                <li>Projected Growth: 25% CAGR</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-dark rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Business Model</h2>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li>Subscription tiers</li>
                <li>Transaction fees</li>
                <li>AI services</li>
                <li>Professional services</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Join the Future of Community
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Be part of the revolution in digital communities. Join tribify.ai and help shape 
            the future of AI-powered collaboration.
          </p>
          <a 
            href="/signup"
            className="inline-block bg-dark hover:bg-dark-lighter text-white dark:bg-white dark:text-dark 
              dark:hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition"
          >
            Get Started
          </a>
        </section>
      </div>
    </div>
  )
} 
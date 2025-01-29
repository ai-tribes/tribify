'use client'

// Remove unused import
// import { resourceCategories } from '../data/resources'

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
        Resources
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Get tribify tokens
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Available on Pump.fun
          </p>
          <a 
            href="https://pump.fun/coin/672PLqkiNdmByS6N1BQT5YPbEpkZte284huLUCxupump"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#AB9FF2] hover:text-[#9D8FE5] font-medium"
          >
            View on Pump.fun →
          </a>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            GitHub Repository
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Contribute to tribify.ai development
          </p>
          <a 
            href="https://github.com/ai-tribes/tribify"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#AB9FF2] hover:text-[#9D8FE5] font-medium"
          >
            View on GitHub →
          </a>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Documentation
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Learn more about tribify.ai and how to use it
          </p>
          <a 
            href="/docs"
            className="text-[#AB9FF2] hover:text-[#9D8FE5] font-medium"
          >
            View Documentation →
          </a>
        </div>
      </div>
    </div>
  )
} 
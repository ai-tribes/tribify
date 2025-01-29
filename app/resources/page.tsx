'use client'

import { resourceCategories } from '../data/resources'

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Build AI on Web3
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Access tools, frameworks and communities to build AI applications on the blockchain. Join a tribe, contribute code, and earn value for your contributions.
        </p>
      </div>

      {resourceCategories.map((category, idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {category.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {category.description}
          </p>

          {category.sections.map((section, sIdx) => (
            <div key={sIdx} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                {section.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {section.items.map((item, iIdx) => (
                  <div key={iIdx} className="bg-white/50 dark:bg-dark/50 backdrop-blur-sm rounded-lg p-6 border border-gray-100 dark:border-gray-800">
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center text-gray-600 dark:text-gray-400">
                          <span className="w-1 h-1 bg-gray-900/80 dark:bg-white/80 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
} 
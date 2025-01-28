import { Metadata } from "next"
import Link from 'next/link'
import { HiChip, HiGlobe, HiLightBulb, HiUsers } from 'react-icons/hi'

export const metadata: Metadata = {
  title: "About | tribify.ai",
  description: "Learn about tribify.ai's mission to revolutionize digital communities with AI",
}

const values = [
  {
    icon: HiLightBulb,
    title: "Innovation First",
    description: "We push the boundaries of AI and Web3 technology to create unprecedented community experiences."
  },
  {
    icon: HiGlobe,
    title: "Decentralized Future",
    description: "We believe in a future where communities own and govern their digital spaces."
  },
  {
    icon: HiUsers,
    title: "Community Driven",
    description: "Every decision we make is guided by our commitment to empower community members."
  },
  {
    icon: HiChip,
    title: "AI Ethics",
    description: "We develop AI responsibly, prioritizing transparency, fairness, and human values."
  }
]

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-brand-accent/20 to-brand-stone/20 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About tribify.ai
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building the future of AI-powered digital communities
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-white dark:bg-dark rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              tribify.ai is on a mission to revolutionize how communities form, interact, and create value 
              in the digital age. By combining the power of artificial intelligence with Web3 technologies, 
              we're building a platform where communities can truly own their digital spaces and benefit 
              from their contributions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We envision a world where AI serves as a catalyst for human connection, where technology 
              amplifies community potential, and where value flows freely to those who create it.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-dark rounded-lg p-6 shadow-sm">
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-primary/10 via-brand-accent/10 to-brand-stone/10 rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Our Vision</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              We're building towards a future where:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p className="text-gray-600 dark:text-gray-400">
                  Communities harness AI to enhance human connection and creativity
                </p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p className="text-gray-600 dark:text-gray-400">
                  Value creation and distribution is transparent and fair
                </p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p className="text-gray-600 dark:text-gray-400">
                  Technology empowers rather than exploits community members
                </p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p className="text-gray-600 dark:text-gray-400">
                  Digital spaces are owned and governed by their communities
                </p>
              </li>
            </ul>
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
          <Link 
            href="/signup"
            className="inline-block bg-dark hover:bg-dark-lighter text-white dark:bg-white dark:text-dark 
              dark:hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition"
          >
            Get Started
          </Link>
        </section>
      </div>
    </div>
  )
} 
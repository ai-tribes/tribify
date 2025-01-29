'use client'

import { useRef } from 'react'
import { Button } from 'flowbite-react'
import { HeroSection } from './components/HeroSection'
import { 
  HiChip,
  HiCube, 
  HiCurrencyDollar,
  HiShieldCheck,
  HiSparkles,
  HiUserGroup 
} from 'react-icons/hi'

const features = [
  {
    icon: HiUserGroup,
    title: "AI-Powered Communities",
    description: "Create and join specialized communities with AI-driven collaboration tools and content curation.",
    benefits: [
      "Intelligent member matching",
      "Automated content moderation",
      "Personalized engagement feeds",
      "Smart community insights"
    ]
  },
  {
    icon: HiChip,
    title: "Advanced AI Integration",
    description: "Leverage cutting-edge AI models to enhance community interaction and value creation.",
    benefits: [
      "Custom AI model training",
      "Natural language processing",
      "Computer vision capabilities",
      "Predictive analytics"
    ]
  },
  {
    icon: HiCube,
    title: "Web3 Infrastructure",
    description: "Built on decentralized technology for true ownership and fair value distribution.",
    benefits: [
      "Token-based governance",
      "NFT membership system",
      "Decentralized storage",
      "Smart contract automation"
    ]
  },
  {
    icon: HiShieldCheck,
    title: "Security & Privacy",
    description: "Enterprise-grade security with privacy-preserving AI technology.",
    benefits: [
      "End-to-end encryption",
      "Secure AI computation",
      "Data sovereignty",
      "Compliance frameworks"
    ]
  },
  {
    icon: HiCurrencyDollar,
    title: "Tokenized Economy",
    description: "Create value and earn rewards through community participation and contribution.",
    benefits: [
      "Revenue sharing",
      "Staking rewards",
      "Contribution incentives",
      "Market mechanisms"
    ]
  },
  {
    icon: HiSparkles,
    title: "Innovation Tools",
    description: "Access powerful tools for community innovation and development.",
    benefits: [
      "AI-assisted ideation",
      "Collaborative workspaces",
      "Resource allocation",
      "Progress tracking"
    ]
  }
]

const strategyContent = {
  implementation: {
    title: "Implementation",
    items: [
      {
        title: "Phase 1: Foundation",
        points: [
          "Core infrastructure development",
          "Basic AI integration",
          "Community token launch",
          "Initial governance framework"
        ]
      },
      {
        title: "Phase 2: Growth",
        points: [
          "Advanced AI features",
          "Cross-chain integration",
          "Partnership program",
          "Community expansion"
        ]
      }
    ]
  },
  economics: {
    title: "Economics",
    items: [
      {
        title: "Token ($tribify.ai)",
        points: [
          "Community governance",
          "Revenue sharing",
          "Premium features",
          "Staking rewards"
        ]
      },
      {
        title: "Value Distribution",
        points: [
          "Community rewards",
          "Development funding",
          "Partnership incentives",
          "Sustainability pool"
        ]
      }
    ]
  }
}

const visionPoints = [
  {
    title: "Future of Communities",
    points: [
      "Decentralized ownership of community platforms",
      "AI-enhanced human connections and creativity",
      "Fair value distribution to all contributors",
      "Borderless, global collaboration networks"
    ]
  },
  {
    title: "Technology Impact",
    points: [
      "Democratized access to advanced AI tools",
      "Transparent and automated governance",
      "Secure, privacy-preserving interactions",
      "Interoperable community ecosystems"
    ]
  },
  {
    title: "Social Impact",
    points: [
      "Reduced barriers to community building",
      "Equitable distribution of digital wealth",
      "Enhanced cross-cultural collaboration",
      "Sustainable community economies"
    ]
  }
]

const values = [
  {
    title: "Innovation First",
    description: "We push the boundaries of AI and Web3 technology to create unprecedented community experiences."
  },
  {
    title: "Decentralized Future",
    description: "We believe in a future where communities own and govern their digital spaces."
  },
  {
    title: "Community Driven",
    description: "Every decision we make is guided by our commitment to empower community members."
  },
  {
    title: "AI Ethics",
    description: "We develop AI responsibly, prioritizing transparency, fairness, and human values."
  }
]

export default function HomePage() {
  const aboutRef = useRef<HTMLElement>(null)
  const visionRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const strategyRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const scrollTo = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add form submission logic
  }

  return (
    <>
      <HeroSection />

      <section id="about" ref={aboutRef} className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              tribify.ai is revolutionizing online communities by combining AI and Web3 technologies. In today's digital world, community members create value but lack true ownership and fair rewards. We're changing that.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our platform empowers communities with AI-driven tools and decentralized ownership, creating intelligent ecosystems where contributors directly share in their community's success. By making collaboration more equitable and rewarding, we're building the foundation for the next generation of human connection and value creation.
            </p>
          </div>
        </div>
      </section>

      <section id="vision" ref={visionRef} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Vision & Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              tribify.ai is on a mission to revolutionize how communities form, interact, and create value in the digital age. By combining the power of artificial intelligence with Web3 technologies, we're building a platform where communities can truly own their digital spaces and benefit from their contributions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We envision a world where AI serves as a catalyst for human connection, where technology amplifies community potential, and where value flows freely to those who create it.
            </p>
          </div>

          <div className="space-y-8">
            {visionPoints.map((section, idx) => (
              <div
                key={idx}
                className="bg-white/50 dark:bg-dark/50 backdrop-blur-sm rounded-lg p-6 border border-gray-100 dark:border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{section.title}</h3>
                <ul className="space-y-4">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1 h-1 bg-gray-900/80 dark:bg-white/80 rounded-full mt-2 mr-2" />
                      <p className="text-gray-600 dark:text-gray-400">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" ref={featuresRef} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/50 dark:bg-dark/50 backdrop-blur-sm rounded-lg p-6 border border-gray-100 dark:border-gray-800">
                <feature.icon className="w-12 h-12 text-gray-900 dark:text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                      <span className="w-1 h-1 bg-gray-900/80 dark:bg-white/80 rounded-full mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="strategy" ref={strategyRef} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Strategy</h2>
          <div className="space-y-8">
            {Object.values(strategyContent).map((section, idx) => (
              <div key={idx} className="bg-white/50 dark:bg-dark/50 backdrop-blur-sm rounded-lg p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white tracking-tight">
                  {section.title}
                </h3>
                <div className="space-y-6">
                  {section.items.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">
                        {item.title}
                      </h4>
                      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                        {item.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              tribify.ai is on a mission to revolutionize how communities form, interact, and create value in the digital age. By combining the power of artificial intelligence with Web3 technologies, we're building a platform where communities can truly own their digital spaces and benefit from their contributions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We envision a world where AI serves as a catalyst for human connection, where technology amplifies community potential, and where value flows freely to those who create it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/50 dark:bg-dark/50 backdrop-blur-sm rounded-lg p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" ref={contactRef} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Contact</h2>
          <div className="bg-white/50 dark:bg-dark/50 backdrop-blur-sm rounded-lg p-6 border border-gray-100 dark:border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                    bg-white dark:bg-dark-lighter focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                    bg-white dark:bg-dark-lighter focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                    bg-white dark:bg-dark-lighter focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-dark hover:bg-dark-lighter text-white dark:bg-white dark:text-dark 
                  dark:hover:bg-gray-100 font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

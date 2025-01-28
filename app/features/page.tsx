import { Metadata } from "next"
import { HiChip, HiCube, HiCurrencyDollar, HiShieldCheck, HiSparkles, HiUserGroup } from 'react-icons/hi'

export const metadata: Metadata = {
  title: "Features | tribify.ai",
  description: "Discover the powerful features of tribify.ai's AI-powered communities",
}

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

export default function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Features
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Discover how tribify.ai empowers communities with AI and Web3 technology
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <feature.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {feature.description}
            </p>
            <ul className="space-y-2">
              {feature.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
} 
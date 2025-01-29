import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web3 Strategy | tribify.ai",
  description: "Our vision for building AI-powered decentralized communities",
}

export default function Web3StrategyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        Web3 Strategy
      </h1>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Overview</h2>
        <p className="text-gray-600 dark:text-gray-400">
          tribify.ai aims to build AI-powered communities using Web3 technologies to ensure decentralization, 
          ownership, and fair value distribution among community members.
        </p>
      </section>

      {/* Core Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Core Components</h2>
        
        {/* Tokenomics */}
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">1. Tokenomics</h3>
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Community Token ($tribify.ai)</h4>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-400">
              <li>Governance rights</li>
              <li>Revenue sharing</li>
              <li>Access to premium features</li>
              <li>Staking rewards</li>
            </ul>
            <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Distribution</h4>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>40% Community rewards</li>
              <li>30% Treasury</li>
              <li>20% Team (vested)</li>
              <li>10% Early adopters</li>
            </ul>
          </div>
        </div>

        {/* Smart Contracts */}
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">2. Smart Contracts</h3>
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Membership NFTs</h4>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-400">
              <li>Tiered access levels</li>
              <li>Unique AI-generated art</li>
              <li>Reputation tracking</li>
              <li>Revenue sharing rights</li>
            </ul>
            <h4 className="font-medium mb-2 text-gray-900 dark:text-white">DAO Governance</h4>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Proposal submission</li>
              <li>Voting mechanisms</li>
              <li>Treasury management</li>
              <li>Protocol upgrades</li>
            </ul>
          </div>
        </div>

        {/* Infrastructure */}
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">3. Decentralized Infrastructure</h3>
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Storage</h4>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-400">
              <li>IPFS for content</li>
              <li>Arweave for permanent storage</li>
            </ul>
            <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Computation</h4>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Decentralized AI inference</li>
              <li>Edge computing network</li>
            </ul>
          </div>
        </div>

        {/* Complete Roadmap phases */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Phase 1: Foundation (Q1-Q2 2024)</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Smart contract development</li>
              <li>Token design and economics</li>
              <li>Basic DAO structure</li>
              <li>Community building</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Phase 2: Launch (Q3 2024)</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Token Generation Event</li>
              <li>NFT membership launch</li>
              <li>Governance activation</li>
              <li>Initial AI features</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Phase 3: Expansion (Q4 2024)</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Advanced AI integration</li>
              <li>Cross-chain bridges</li>
              <li>Partnership program</li>
              <li>Developer tools</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Phase 4: Maturity (2025)</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Full decentralization</li>
              <li>Advanced DAO features</li>
              <li>Ecosystem grants</li>
              <li>Enterprise solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Revenue Streams</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">1. Membership Fees</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Tiered subscription models</li>
              <li>Pay-as-you-go options</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">2. AI Services</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Custom model training</li>
              <li>API access</li>
              <li>Compute resources</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">3. Transaction Fees</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Market fees</li>
              <li>Bridge fees</li>
              <li>Service fees</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Security Measures</h2>
        <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>Regular smart contract audits</li>
            <li>Bug bounty program</li>
            <li>Multi-sig wallets</li>
            <li>Insurance coverage</li>
          </ul>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Community Engagement</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">1. Governance</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Protocol decisions</li>
              <li>Treasury allocation</li>
              <li>Feature prioritization</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">2. Rewards</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Contribution incentives</li>
              <li>Staking rewards</li>
              <li>Referral program</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">3. Education</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Web3 workshops</li>
              <li>AI training</li>
              <li>Documentation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Success Metrics</h2>
        <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>Active users</li>
            <li>Token utility metrics</li>
            <li>Governance participation</li>
            <li>Revenue growth</li>
            <li>Community satisfaction</li>
          </ul>
        </div>
      </section>

      {/* Risk Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Risk Management</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">1. Technical Risks</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Smart contract vulnerabilities</li>
              <li>AI model failures</li>
              <li>Network congestion</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">2. Market Risks</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Token volatility</li>
              <li>Competition</li>
              <li>Regulatory changes</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">3. Mitigation Strategies</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Insurance</li>
              <li>Legal compliance</li>
              <li>Community feedback</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final sections */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Partnerships</h2>
        <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>AI infrastructure providers</li>
            <li>Web3 platforms</li>
            <li>Educational institutions</li>
            <li>Enterprise clients</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Legal & Compliance</h2>
        <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>Token classification</li>
            <li>Data protection</li>
            <li>AI ethics</li>
            <li>Jurisdictional compliance</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Future Vision</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Building the largest network of AI-powered decentralized communities, where value creation and distribution 
          are transparent, fair, and community-driven.
        </p>
      </section>
    </div>
  )
} 
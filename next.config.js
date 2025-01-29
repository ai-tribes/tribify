/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove or comment out the experimental section for now
  // experimental: {
  //   optimizeCss: true
  // },
  // Reduce memory usage
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Reduce build time
  compress: false, // Disable compression during development
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  }
}

module.exports = nextConfig 
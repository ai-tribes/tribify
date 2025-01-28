import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: [
    "../app/**/*.mdx",
    "../app/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: false,
  },
}

export default config

// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require("path")

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../pages/**/*.stories.mdx",
    "../pages/**/*.stories.@(ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, '../lib')
    }

    return config
  }
}
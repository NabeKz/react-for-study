module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../pages/**/*.stories.@(ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}
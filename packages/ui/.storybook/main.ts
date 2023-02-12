import type { StorybookConfig } from '@storybook/svelte-vite';
import fg from "fast-glob"
import path from "path"

const stories = fg.sync([
  "../components/**/*.stories.svelte",
  // "../components/**/*.mdx",
  // "../components/**/*.stories.@(js|jsx|ts|tsx|svelte)",

  // important!
  '!**/node_modules'
], { globstar: true, cwd: path.resolve(__dirname) })

const config: StorybookConfig = {
  "stories": stories,
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf",
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    }
  ],
  "framework": {
    "name": "@storybook/svelte-vite",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  }
};
export default config;
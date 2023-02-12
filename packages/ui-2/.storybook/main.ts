import type { StorybookConfig } from '@storybook/svelte-vite';

const config: StorybookConfig = {
  "stories": [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx|svelte)",
    "../components/**/*.stories.svelte"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf"
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
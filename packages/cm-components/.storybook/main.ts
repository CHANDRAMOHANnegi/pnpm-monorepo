import type { StorybookConfig } from '@storybook/nextjs';
const path = require("path");

const config: StorybookConfig = {
  stories: [
    '../**/*.mdx',
    '../**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
};
export default config;

import { ComponentStoryObj } from '@storybook/react';

import Page from './index.page';

export default {
  title: 'Page/User',
  component: Page,
} as ComponentStoryObj<typeof Page>;


const defaultArgs = {
};

export const Normal = {
  args: {
    ...defaultArgs
  }
}


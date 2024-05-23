import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Header } from './Header';

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut = {};

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'See details',
    onClick: () => {
      return;
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Edit delivery',
    variant: 'secondary',
    onClick: () => {
      return;
    },
  },
};

export const AsLink: Story = {
  args: { children: 'Edit delivery', as: 'a', href: 'https://catfood.com' },
};

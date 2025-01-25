import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <main>
        <Story />
      </main>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'See details',
    onClick: () => {
      return;
    },
  },
};

export const Secondary: Story = {
  args: {
    label: 'Edit delivery',
    variant: 'secondary',
    onClick: () => {
      return;
    },
  },
};

export const AsLink: Story = {
  args: { label: 'Edit delivery', as: 'a', href: 'https://catfood.com' },
};

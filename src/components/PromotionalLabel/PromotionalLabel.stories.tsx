import type { Meta, StoryObj } from '@storybook/react';

import { PromotionalLabel } from './PromotionalLabel';

const meta: Meta<typeof PromotionalLabel> = {
  component: PromotionalLabel,
};
export default meta;

type Story = StoryObj<typeof PromotionalLabel>;

export const Default: Story = {
  args: {
    label: 'Free gift',
  },
};

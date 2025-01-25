import type { Meta, StoryObj } from '@storybook/react';

import { DeliveryCard } from './DeliveryCard';

const meta: Meta<typeof DeliveryCard> = {
  component: DeliveryCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <main>
        <Story />
      </main>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof DeliveryCard>;

export const Default: Story = {
  args: {
    deliveryData: {
      title: 'Your next delivery for Tom & Jerry',
      message:
        "Hey Sonya! In two days' time, we'll be charging you for your next order for Tom and Jerry's fresh food.",
      freeGift: true,
      totalPrice: 135,
    },
  },
};

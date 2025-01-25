import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { DeliveryCard } from './DeliveryCard';
import { DeliverySchemaType } from '../../schemas/delivery';

describe('DeliveryCard', () => {
  const defaultProps: DeliverySchemaType = {
    title: 'Your next delivery for Betsy',
    message:
      "Hey Cordell! In two days' time, we'll be charging you for your next order for Betsy's fresh food.",
    totalPrice: 123,
    freeGift: true,
  };

  it('renders free gift label if eligible', async () => {
    const screen = render(<DeliveryCard deliveryData={defaultProps} />);
    const freeGiftLabel = await screen.getByText('Free gift').element();
    await expect(freeGiftLabel).toBeInTheDocument();
  });
});

import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
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
    const freeGiftLabel = await screen.queryByText('Free gift');
    await expect(freeGiftLabel).toBeInTheDocument();
  });

  it('does not render free gift label if not eligible', async () => {
    const screen = render(
      <DeliveryCard deliveryData={{ ...defaultProps, freeGift: false }} />,
    );
    const freeGiftLabel = await screen.queryByText('Free gift');
    await expect(freeGiftLabel).not.toBeInTheDocument();
  });

  it('renders details button', async () => {
    const screen = render(<DeliveryCard deliveryData={defaultProps} />);
    const button = await screen.queryByRole('button', { name: 'See details' });
    expect(button).toBeInTheDocument();
  });

  it('renders edit link', async () => {
    const screen = render(<DeliveryCard deliveryData={defaultProps} />);
    const link = await screen.queryByRole('link', {
      name: 'Edit delivery',
    });
    expect(link).toBeInTheDocument();
  });
});

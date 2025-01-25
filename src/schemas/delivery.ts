import { z } from 'zod';

export const deliverySchema = z.object({
  title: z.string(),
  message: z.string(),
  totalPrice: z.number(),
  freeGift: z.boolean(),
});

export type DeliverySchemaType = z.infer<typeof deliverySchema>;

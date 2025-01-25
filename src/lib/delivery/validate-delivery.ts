import { deliverySchema, DeliverySchemaType } from '../../schemas/delivery';

export function validateDelivery(
  data: unknown,
): DeliverySchemaType | undefined {
  const validation = deliverySchema.safeParse(data);
  if (validation.success) {
    return validation.data;
  } else {
    console.error(
      'Validation of delivery data failed',
      JSON.stringify(validation.error.errors),
    );
  }
}

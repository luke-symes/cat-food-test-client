import useSWR from 'swr';
import { DeliverySchemaType } from '../../schemas/delivery';
import { validateDelivery } from './validate-delivery';

export function useDelivery(userId: string) {
  const url = `http://localhost:3000/comms/your-next-delivery/${userId}`;

  const fetcher = (url: string): Promise<DeliverySchemaType | undefined> =>
    fetch(url).then(async (response) => {
      const data = await response.json();
      const validated = validateDelivery(data);
      if (validated) return data;
    });

  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) {
    const defaultErrorMessage = `Error fetching delivery for user id ${userId}`;
    if (error instanceof Error) {
      console.error(`${defaultErrorMessage}: ${error.message}`);
    } else {
      console.error(defaultErrorMessage);
    }
  }

  return { data, error, isLoading };
}

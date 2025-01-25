import { DeliveryResponse } from '../types/delivery';
import cat from '../assets/cat.png';

interface Props {
  deliveryData: DeliveryResponse;
}

export function DeliveryCard({ deliveryData }: Props) {
  const { title, message, freeGift, totalPrice } = deliveryData;

  return (
    <div className="border-[1px] border-neutral-300 flex h-[244px] min-w-[752px]">
      <div
        className="bg-cover bg-center flex-1"
        style={{ backgroundImage: `url(${cat})` }}
      />
      <div className="flex-[1.5]">
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}

import { DeliveryResponse } from '../../types/delivery';
import cat from '../../assets/cat.png';

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
      <div className="flex-[1.5] p-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-emerald-500 font-semibold text-lg">{title}</h2>
          <div>{message}</div>
          <div className="font-semibold">
            Total price: £{totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

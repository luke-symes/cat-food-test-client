import { DeliveryResponse } from '../../types/delivery';
import cat from '../../assets/cat.png';
import { Button } from '../Button';

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
      <div className="flex-[1.5] flex flex-col p-4 justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-emerald-500 font-semibold text-lg">{title}</h2>
          <div>{message}</div>
          <div className="font-semibold">
            Total price: £{totalPrice.toFixed(2)}
          </div>
        </div>

        <div className="flex gap-4">
          <Button label="See details" />
          <Button label="Edit delivery" />
        </div>
      </div>
    </div>
  );
}

import { DeliveryResponse } from '../../types/delivery';
import cat from '../../assets/cat.png';
import { Button } from '../Button';
import { PromotionalLabel } from '../PromotionalLabel';

interface Props {
  deliveryData: DeliveryResponse;
}

export function DeliveryCard({ deliveryData }: Props) {
  const { title, message, freeGift, totalPrice } = deliveryData;

  function handleClick() {
    // TODO: open dialog for delivery details
  }

  return (
    <div className="border-[1px] border-neutral-300 flex h-[244px] md:w-[752px] relative">
      <div
        className="bg-cover bg-center flex-1"
        style={{ backgroundImage: `url(${cat})` }}
      />
      <div className="flex-[1.5] flex flex-col p-6 justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-emerald-500 font-semibold text-lg">{title}</h2>
          <div>{message}</div>
          <div className="font-semibold">
            Total price: £{totalPrice.toFixed(2)}
          </div>
        </div>

        <div className="flex gap-4">
          <Button label="See details" onClick={handleClick} />
          <Button
            as="a"
            label="Edit delivery"
            href="https://catfood.com/edit"
          />
        </div>
      </div>

      {freeGift && (
        <PromotionalLabel
          label="Free gift"
          className="md:-top-2 md:-right-2 md:left-auto md:translate-x-0 -bottom-4 left-1/2 -translate-x-1/2"
        />
      )}
    </div>
  );
}

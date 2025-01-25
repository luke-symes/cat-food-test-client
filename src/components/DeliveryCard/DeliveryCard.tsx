import cat from '../../assets/cat.png';
import { DeliverySchemaType } from '../../schemas/delivery';
import { Button } from '../Button';
import { PromotionalLabel } from '../PromotionalLabel';

interface Props {
  deliveryData: DeliverySchemaType;
}

export function DeliveryCard({ deliveryData }: Props) {
  const { title, message, freeGift, totalPrice } = deliveryData;

  function handleClick() {
    // TODO: open dialog for delivery details
  }

  return (
    <div className="border-[1px] border-neutral-300 flex md:min-h-[244px] md:max-w-[752px] relative md:text-left text-center bg-white">
      <div
        className="bg-cover bg-center md:flex-1 md:rounded-none md:block rounded-full absolute -top-6 md:translate-x-0 left-1/2 -translate-x-1/2 md:w-auto md:h-auto w-12 h-12 md:static"
        style={{ backgroundImage: `url(${cat})` }}
      />
      <div className="flex-[1.5] flex flex-col p-6 gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-emerald-500 font-semibold text-lg">{title}</h2>
          <div>{message}</div>
          <div className="font-semibold">
            Total price: £{totalPrice.toFixed(2)}
          </div>
        </div>

        <div className="flex gap-4 md:justify-start justify-center flex-wrap">
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

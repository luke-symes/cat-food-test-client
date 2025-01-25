import { DeliveryCard } from './components/DeliveryCard';
import { useDelivery } from './lib/delivery/useDelivery';

function App() {
  const userId = '618f4ed6-1c5b-4993-a149-f64700bf31dd';

  const { data, error } = useDelivery(userId);

  if (error) console.error(error);

  return (
    <div className="w-screen h-screen md:p-24 p-8 bg-neutral-200">
      {data && <DeliveryCard deliveryData={data} />}
    </div>
  );
}

export default App;

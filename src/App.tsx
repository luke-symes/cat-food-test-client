import { DeliveryCard } from './components/DeliveryCard';
import { mockDelivery } from './mocks/delivery';

function App() {
  return (
    <div className="w-screen h-screen md:p-24 p-8 bg-neutral-200">
      <DeliveryCard deliveryData={mockDelivery} />
    </div>
  );
}

export default App;

import { DeliveryCard } from './components/DeliveryCard';
import { mockDelivery } from './mocks/delivery';

function App() {
  return (
    <div className="w-screen h-screen p-24">
      <DeliveryCard deliveryData={mockDelivery} />
    </div>
  );
}

export default App;

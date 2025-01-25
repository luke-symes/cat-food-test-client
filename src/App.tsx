import { DeliveryCard } from './components/DeliveryCard';
import { mockDelivery } from './mocks/delivery';

function App() {
  return (
    <div>
      <DeliveryCard deliveryData={mockDelivery} />
    </div>
  );
}

export default App;

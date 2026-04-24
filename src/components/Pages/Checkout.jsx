import { useCartStore } from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, getTotal } = useCartStore();
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white shadow-lg rounded-xl mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Resumen de Compra</h1>
      <div className="space-y-4 mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between border-b pb-2">
            <span>{item.title} (x{item.quantity})</span>
            <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="text-xl font-bold text-right mb-8">
        Total a pagar: ${getTotal().toFixed(2)}
      </div>
      <button 
        onClick={() => {
          alert("¡Compra simulada con éxito!");
          navigate("/");
        }}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
      >
        Confirmar y Pagar
      </button>
    </div>
  );
};

export default Checkout;
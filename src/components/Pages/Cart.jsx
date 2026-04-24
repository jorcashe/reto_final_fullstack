import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, getTotal } = useCartStore();

  if (cart.length === 0) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold">Tu carrito está vacío</h2>
        <Link to="/" className="text-blue-500 underline">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-4">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>Cantidad: {item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 font-bold"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t pt-4 text-right">
        <h2 className="text-2xl font-bold">Total: ${getTotal().toFixed(2)}</h2>
        <Link 
          to="/checkout" 
          className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
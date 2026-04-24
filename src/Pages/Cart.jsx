import React from 'react';
import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";


const Cart = () => {
  const { cart, removeFromCart, getTotal } = useCartStore();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Tu carrito está vacío 😢</h2>
        <Link to="/" className="text-blue-600 hover:underline">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Tu Carrito</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Lista de productos */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-500">Cantidad: {item.quantity}</p>
                  <p className="text-blue-600 font-bold">${item.price * item.quantity}</p>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        {/* Resumen del pedido */}
        <div className="bg-white p-6 rounded-xl shadow-md border h-fit">
          <h2 className="text-xl font-bold mb-4">Resumen</h2>
          <div className="flex justify-between mb-4 text-lg">
            <span>Total:</span>
            <span className="font-bold text-blue-600">${getTotal()}</span>
          </div>
          <Link 
            to="/checkout" 
            className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Finalizar Compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
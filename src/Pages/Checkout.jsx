import React from 'react';
import { useCartStore } from "../store/useCartStore";


const Checkout = () => {
  const { getTotal } = useCartStore();

  const handleFinish = (e) => {
    e.preventDefault();
    alert("¡Pedido realizado con éxito! Gracias por tu compra.");
    window.location.href = "/"; // Redirigir al inicio
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-lg">
      <div className="bg-white p-8 rounded-2xl shadow-xl border">
        <h1 className="text-2xl font-bold mb-6 text-center">Datos de Envío</h1>
        <form onSubmit={handleFinish} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
            <input type="text" required className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Dirección</label>
            <input type="text" required className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ciudad</label>
            <input type="text" required className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="pt-4 border-t">
            <div className="flex justify-between text-xl font-bold mb-6">
              <span>Total a pagar:</span>
              <span className="text-blue-600">${getTotal()}</span>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 shadow-lg transition"
            >
              Confirmar Pedido
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
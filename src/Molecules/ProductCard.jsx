import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";


const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={product.image} 
        alt={product.name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-blue-600 font-bold text-xl mt-2">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
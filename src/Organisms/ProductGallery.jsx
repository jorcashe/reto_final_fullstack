import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { products } from "../mockdata/products";
import ProductCard from "../Molecules/ProductCard";


const ProductGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGallery;
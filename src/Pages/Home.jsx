import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductGallery from "../Organisms/ProductGallery";

const Home = () => {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Nuestros Productos
      </h1>
      <ProductGallery />
    </main>
  );
};

export default Home;


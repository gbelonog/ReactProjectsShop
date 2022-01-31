import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage';
import { DeliveryPage } from './pages/DeliveryPage';
import { CartPage } from './pages/CartPage';
import { CatalogPage } from './pages/CatalogPage';
import { ProductPage } from './pages/ProductPage';
import { OrederPageStepFirst } from './pages/OrederPageStepFirst';
import { OrederPageStepSecond } from './pages/OrederPageStepSecond';
import { OrederPageStepThird } from './pages/OrederPageStepThird';

export function App() {
  return (

      <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/order/1" element={<OrederPageStepFirst/>} />
        <Route path="/order/2" element={<OrederPageStepSecond/>} />
        <Route path="/order/3" element={<OrederPageStepThird/>} />
      </Routes>
      </div>


  );
}

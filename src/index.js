import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Products from './component/Products';
import About from './component/About';
import Cart from './component/Cart';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "https://kit.fontawesome.com/6c6b04d9b0.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

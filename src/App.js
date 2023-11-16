import React, { useState } from "react";
import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import CartTotal from './Components/CartTotal';
import productData from "./Components/productData";
import CatGif from "./Components/CatGif";
import "./Components/CSS/ProductDetail.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  return (
    <div className="justify-content-center container">
      <ProductDetail
        productModel={productData.productModel}
        onAddToCart={addToCart}
      />
      <Cart cartItems={cart} />
      <CartTotal cartItems={cart} />
      <CatGif></CatGif>
    </div>
  );
}
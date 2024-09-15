import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import ProductPage from "./ProductPage";
import ShoppingCart from "./ShoppingCart";
import FeaturedProducts from './FeaturedProducts';
import Popup from "./Popup";
import CheckOut from "./CheckOut";
import CYOC from "./CYOC";
import Gifting from "./Gifting";
import TrackOrder from "./TrackOrder";
import SearchResult from "./SearchResult";
import AboutUs from "./AboutUs";
import ShopAll from "./ShopAll";
import Whoweare from "./Whoweare";

const AppRouter = () => {

  // const [cart, setCart] = useState([])

  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    return savedCart ? savedCart : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    const updatedCart = [...cart];
    // console.log("updatedCart from Router", updatedCart)
    // console.log("product from Router", product)
    // console.log("quantity from Router", quantity)
    

    const cartProductId = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    cartProductId !== -1
      ? (updatedCart[cartProductId].quantity += quantity)
      : updatedCart.push({ ...product, quantity });

    setCart(updatedCart);
  };

  const increaseQuantity = (productID) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productID ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  console.log("cart after update from router", cart);

  const decreaseQuantity = (productID) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productID && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (productID) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productID));
  };

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<FeaturedProducts />} /> */}
        <Route path="/" element={<HomePage addToCart={addToCart} cart={cart}/>} />
        <Route
          path="/product/:id"
          element={<ProductPage addToCart={addToCart} cart={cart}/>}
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              deleteItem={deleteItem}
            />
          }
        />
        <Route
          path="/checkout" element={<CheckOut cart={cart}/>}/>
        <Route element={< Popup cart={cart}/>} />
        <Route path="/cyoc" element={< CYOC cart={cart} addToCart={addToCart}/>}/>
        <Route path="/gifting" element={<Gifting cart={cart}/>} />
        <Route path="/track" element={<TrackOrder cart={cart}/>} />
        <Route path="/about" element={ <AboutUs cart={cart}/>}/>
        <Route path="/shopall" element={<ShopAll cart={cart}/>}/>
        <Route path="/Whoweare" element={<Whoweare cart={cart}/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const Cart = ({ islogged, setIsLogged }) => {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = async () => {
    const res = await axios.get("http://localhost:5000/cart");
    setCartItems(res.data);
  };
  useEffect(() => {
    getCartItems();
  }, []);

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/cart/${id}`);
    console.log(res.data);
    if (res.data._id) {
      setCartItems(cartItems.filter((p) => p._id !== res.data._id));
    }
  };

  return (
    <>
      <NavBar islogged={islogged} setIsLogged={setIsLogged} />

      <Hero
        Data={cartItems}
        head="YOUR CART ITEMS"
        clickbtn="remove"
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Cart;

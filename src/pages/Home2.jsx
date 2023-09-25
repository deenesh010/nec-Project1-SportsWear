import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import "../components/heroStyle.css";
import NavBar from "../components/NavBar";

const Home = ({ islogged, setIsLogged }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:5000/products");
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/products/${id}`);
    console.log(res.data);
    if (res.data._id) {
      setProducts(products.filter((p) => p._id !== res.data._id));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar islogged={islogged} setIsLogged={setIsLogged} />

      <Hero
        Data={products}
        head="Get All Items At Sports Pitch"
        handleDelete={handleDelete}
        // getOneProduct={getOneProduct}
        clickbtn="buy"
      />
    </div>
  );
};

export default Home;

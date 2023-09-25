import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import { NavLink } from "react-router-dom";

const DeleteProduct = () => {
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
      <NavLink to="/admin" className="btn btn-si">
        GO BACK
      </NavLink>
      <Hero
        Data={products}
        head="Delete Unavailable Items"
        handleDelete={handleDelete}
        clickbtn="delete"
      />
    </div>
  );
};

export default DeleteProduct;

import { useState } from "react";
import axios from "axios";
import "./addProduct.css";
import { NavLink } from "react-router-dom";

const AddProduct = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    addProduct(inputs);
  };
  const addProduct = async (inputs) => {
    const res = await axios.post("http://localhost:5000/products", inputs);
    console.log(res.data);
  };

  return (
    <>
      <h1>ADD AN ITEMS</h1>
      <NavLink to="/admin" className="btn btn-si">
        GO BACK
      </NavLink>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a product name:
          <input
            type="text"
            name="name"
            //   value={inputs.name}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Enter price:
          <input
            type="number"
            name="price"
            //   value={inputs.price}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="desc"
            //   value={inputs.desc}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            //   value={inputs.image}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default AddProduct;

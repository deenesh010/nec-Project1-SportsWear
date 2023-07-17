import React from "react";
import "./heroStyle.css";
import axios from "axios";

const Hero = ({ Data, head, handleDelete, clickbtn }) => {
  const getOneProduct = async (name, price, image, desc) => {
    // const res = await axios.get(`http://localhost:5000/products/${id}`);
    // let oneItem = res.data;
    // console.log(oneItem);

    let ip = { name, price, image, desc };
    await axios.post("http://localhost:5000/cart", ip);
  };

  return (
    <div>
      <div className="productTitle">{head}</div>
      <div className="products">
        {Data.map((d) => {
          return (
            <div className="product">
              <img src={d.image} alt=".." />
              <div className="description">
                <p>
                  <b>{d.name}</b>
                  <p className="text-primary">{d.desc}</p>
                </p>
                <p>Rs.{d.price}</p>
              </div>

              {(() => {
                if (clickbtn === "delete") {
                  return (
                    <button
                      className="addToCartBttn"
                      onClick={() => handleDelete(d._id)}
                    >
                      {clickbtn}
                    </button>
                  );
                } else if (clickbtn === "remove") {
                  return (
                    <button
                      className="addToCartBttn"
                      onClick={() => handleDelete(d._id)}
                    >
                      Remove from cart
                    </button>
                  );
                } else {
                  return (
                    <button
                      className="addToCartBttn"
                      onClick={() => {
                        getOneProduct(d.name, d.price, d.image, d.desc);
                      }}
                    >
                      {clickbtn}
                    </button>
                  );
                }
              })()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;

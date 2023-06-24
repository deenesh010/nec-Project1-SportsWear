import React from "react";
import "./heroStyle.css";

const Hero = ({ Data, head, handleDelete }) => {
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
              <button
                className="addToCartBttn"
                onClick={() => handleDelete(d._id)}
              >
                Delete Item
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;

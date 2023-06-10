import React from "react";
import "./heroStyle.css";

const Hero = ({ Data, head }) => {
  return (
    <div>
      <div className="productTitle">{head}</div>
      <div className="products">
        {Data.map((d, key) => {
          return (
            <div className="product">
              <img src={d.image} alt=".." />
              <div className="description">
                <p>
                  <b>{d.title}</b>
                  <p className="text-primary">{d.desc}</p>
                </p>
                <p>Rs.{d.price}</p>
              </div>
              <button className="addToCartBttn">Add To Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;

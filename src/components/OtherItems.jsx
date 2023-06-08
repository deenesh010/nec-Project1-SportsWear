import React from "react";
import "./heroStyle.css";
import otherData from "../data.js/otherData"

const Hero = () => {
  return (
    <>
      <h2 className="heroTitle">Other Sporting Items</h2>
      <div className="hero">
        {otherData.map((other, key) => {
          return (
            <div key={key} className="h">
              <div className="card column" style={{ width: "18rem" }}>
                <img src={other.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{other.title}</h5>
                  <p className="card-text text-primary">{other.desc}</p>
                  <div className="cardfoot">
                    <h3>Rs.{other.price}</h3>
                    <button className="cart">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Hero;

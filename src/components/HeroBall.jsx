import React from "react";
import jerseyData from "../data.js/jerseyData";
import "./heroStyle.css";

const Hero = () => {
  return (
    <>
      <h2 className="heroTitle" style={{ color: "red" }}>
        Get Playing Items At Sports Pitch
      </h2>
      <div className="hero">
        {jerseyData.map((jersey, key) => {
          return (
            <div key={key} className="h">
              <div className="card column" style={{ width: "18rem" }}>
                <img src={jersey.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{jersey.title}</h5>
                  <p className="card-text text-primary">{jersey.desc}</p>
                  <div className="cardfoot">
                    <h3>Rs.{jersey.price}</h3>
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

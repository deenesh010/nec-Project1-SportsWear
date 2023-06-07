import React from "react";
import jerseyData from "../data.js/jerseyData";
import "./heroStyle.css";

const Hero = () => {
  return (
    <>
      <h2 className="heroTitle">Get Player's Grade Jersey At Sports Pitch</h2>
      <div className="hero">
        {jerseyData.map((jersey, key) => {
          return (
            <div className="h">
              <div class="card column" style={{ width: "18rem" }}>
                <img src={jersey.ig} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{jersey.title}</h5>
                  <p class="card-text text-primary">{jersey.desc}</p>
                  <div className="cardfoot">
                    <h3>Rs.2000</h3>
                    <button className="cart">
                      <i class="fa-solid fa-cart-shopping"></i>
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

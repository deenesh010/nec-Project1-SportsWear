import React from "react";
import "./heroStyle.css";

const Hero = ({ Data, head }) => {
  return (
    <>
      <h2 className="heroTitle">{head}</h2>
      <div className="hero">
        {Data.map((d, key) => {
          return (
            <div key={key} className="h">
              <div className="card column" style={{ width: "18rem" }}>
                <img src={d.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{d.title}</h5>
                  <p className="card-text text-primary">{d.desc}</p>
                  <div className="cardfoot">
                    <h3>Rs.{d.price}</h3>
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

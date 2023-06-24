import React from "react";
import "./aboutStyle.css";
import a1 from "../data.js/a1.jpg";
import a2 from "../data.js/a2.jpg";
import a3 from "../data.js/a3.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide about">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={a1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="h2">Sports</h2>
            <p className="p">
              Sport pertains to any form of physical activity or game, often
              competitive and organized, that aims to use, maintain, or improve
              physical ability and skills Sport pertains to any form of physical
              activity or game, often competitive and organized, that aims to
              use, maintain, or improve physical ability and skills while
              providing enjoyment to participants and, in some cases,
              entertainment to spectators. Sports can, through casual or
              organized participation, improve participants' physical health.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={a2} class="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            {/* <h2 className="h2"></h2> */}
            <p className="p">
              Sports Pitch is a websites where buyers can see a catalog of
              products and make online purchases.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={a3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            {/* <h2 className="h2"></h2> */}
            <p className="p">
              Connect With us by sending us a message
              <br />
              <NavLink to="/contact">here</NavLink>
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default About;

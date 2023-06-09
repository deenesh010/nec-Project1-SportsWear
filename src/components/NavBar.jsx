import React from "react";
import "./navStyle.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="NavbarItems">
        <h1>
          <NavLink
            className="logo"
            to="/"
          >
            Sports Pitch
          </NavLink>
        </h1>
        <ul className="nav-menu">
          <li>
            <NavLink
              className="nav-links"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "blue" : "black",
              })}
            >
              <i className="fa-solid fa-house"></i>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-links"
              style={({ isActive }) => ({
                color: isActive ? "blue" : "black",
              })}
            >
              <i className="fa-solid fa-circle-info"></i>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-links"
              style={({ isActive }) => ({
                color: isActive ? "blue" : "black",
              })}
            >
              <i className="fa-solid fa-address-book"></i>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-links"
              to="/cart"
              style={({ isActive }) => ({
                color: isActive ? "blue" : "black",
              })}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              Cart Items
            </NavLink>
          </li>
        </ul>
        <div className="button">
          {/* <button>Sign Up</button>
          <button className="btn-si">Sign In</button> */}
          <NavLink
            to="/signup"
            className="btn"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
            })}
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/signin"
            className="btn btn-si"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
            })}
          >
            Sign In
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

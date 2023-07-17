import React from "react";
import "./navStyle.css";
import { NavLink } from "react-router-dom";

function NavBar({ islogged, setIsLogged }) {
  return (
    <div>
      <nav className="NavbarItems">
        <h1>
          <NavLink className="logo" to="/">
            Sports Pitch
          </NavLink>
        </h1>
        <ul className="nav-menu">
          <li>
            <NavLink
              className="nav-links"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "skyblue" : "black",
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
                color: isActive ? "skyblue" : "black",
              })}
            >
              <i className="fa-solid fa-circle-info"></i>
              About
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              to="/contact"
              className="nav-links"
              style={({ isActive }) => ({
                color: isActive ? "skyblue" : "black",
              })}
            >
              <i className="fa-solid fa-address-book"></i>
              Contact
            </NavLink> */}
          </li>
          <li>
            <NavLink
              className="nav-links"
              to="/cart"
              style={({ isActive }) => ({
                color: isActive ? "skyblue" : "black",
              })}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              Cart Items
            </NavLink>
          </li>
        </ul>

        {(() => {
          if (islogged === true) {
            return (
              <>
                <NavLink
                  to="/add"
                  className="nav-links"
                  style={({ isActive }) => ({
                    color: isActive ? "green" : "black",
                  })}
                >
                  Add Products
                </NavLink>
                <NavLink
                  to="/delete"
                  className="nav-links"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                  })}
                >
                  Delete Product
                </NavLink>
                <div className="button">
                  <NavLink to="/login" className="btn btn-si">
                    Log Out
                  </NavLink>
                </div>
              </>
            );
          } else if (islogged === false) {
            return (
              <div className="button">
                <NavLink to="/signup" className="btn">
                  Sign Up
                </NavLink>
                <NavLink to="/login" className="btn btn-si">
                  Log In
                </NavLink>
              </div>
            );
          }
        })()}
      </nav>
    </div>
  );
}

export default NavBar;

import React from "react";
import "./navStyle.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="NavbarItems">
        <h1 >
          <Link className="logo" to="/">Sports Pitch</Link>
        </h1>
        <ul className="nav-menu">
          <li>
            <Link className="nav-links" to="/">
              <i className="fa-solid fa-house"></i>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links">
              <i className="fa-solid fa-circle-info"></i>
              About
            </Link>
          </li>
          <li>
            <Link className="nav-links">
              <i className="fa-solid fa-address-book"></i>
              Contact
            </Link>
          </li>
          <li>
            <Link className="nav-links">
              <i className="fa-solid fa-cart-shopping"></i>
              Cart Items
            </Link>
          </li>
        </ul>
        <div className="button">
          {/* <button>Sign Up</button>
          <button className="btn-si">Sign In</button> */}
          <Link className="btn">Sign Up</Link>
          <Link className="btn btn-si">Sign In</Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

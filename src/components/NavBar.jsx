import React from "react";
import "./navStyle.css";

function NavBar() {
  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="logo">Sports Pitch</h1>
        <ul className="nav-menu">
          <li>
            <a className="nav-links">
              <i class="fa-solid fa-house"></i>
              Home
            </a>
          </li>
          <li>
            <a className="nav-links">
              <i class="fa-solid fa-circle-info"></i>
              About
            </a>
          </li>
          <li>
            <a className="nav-links">
              <i class="fa-solid fa-address-book"></i>
              Contact
            </a>
          </li>
          <li>
            <a className="nav-links">
              <i class="fa-solid fa-cart-shopping"></i>
              Cart Items
            </a>
          </li>
        </ul>
        <div className="button">
          <button>Sign Up</button>
          <button className="btn-si">Sign In</button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

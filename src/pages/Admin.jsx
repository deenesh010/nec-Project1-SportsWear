import React from "react";
import { NavLink } from "react-router-dom";
import "./adminStyles.css";
const Admin = () => {
  return (
    <div>
      <h1>ADMIN PANEL</h1>
      <ol class="list-group list-group-numbered">
        <li class="list-group-item">
          <NavLink to="/users" className="nav-links">
            REGISTERED USERS
          </NavLink>
        </li>
        <li class="list-group-item">
          <NavLink to="/add" className="nav-links">
            Add a New Item
          </NavLink>
        </li>
        <li class="list-group-item">
          <NavLink to="/delete" className="nav-links">
            Delete Items
          </NavLink>
        </li>
      </ol>
      <NavLink to="/" className="btn btn-si">
        Log Out
      </NavLink>
    </div>
  );
};

export default Admin;

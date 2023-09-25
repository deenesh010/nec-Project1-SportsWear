import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./userStyle.css";

const Users = () => {
  const [users, setusers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:5000/user");
    setusers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>REGISTERED USERS</h1>
      <table>
        <tr>
          <th>NAME </th>
          <th>EMAIL </th>
          {/* <th>Remove user</th> */}
        </tr>
        {users.map((user) => {
          return (
            <>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>remove</td> */}
              </tr>
            </>
          );
        })}
      </table>
      <NavLink to="/admin" className="btn btn-si">
        GO BACK
      </NavLink>
    </div>
  );
};

export default Users;

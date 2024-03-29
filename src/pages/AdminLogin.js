import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { NavLink } from "react-router-dom";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/admin", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/admin", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("Plese enter the correct credentials");
          }
        })
        .catch((e) => {
          //   alert(e);
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <NavLink to="/" className="btn btn-si">
        GO TO HOME
      </NavLink>
      <div className="login">
        <h1>Login As an ADMIN</h1>

        <form action="POST">
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <input className="submit" type="submit" onClick={submit} />
        </form>

        <br />
        <p>OR</p>
        <br />
      </div>
    </>
  );
}

export default Login;

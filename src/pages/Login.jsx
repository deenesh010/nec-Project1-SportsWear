import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
import NavBar from "../components/NavBar";

function Login({ islogged, setIsLogged }) {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/user", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/", { state: { id: email } });
            setIsLogged(true);
          } else if (res.data === "notexist") {
            alert("Plese enter the correct credentials");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <NavBar islogged={islogged} setIsLogged={setIsLogged} />
      <div className="login">
        <h1>Login</h1>

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

        <Link to="/signup" className="link">
          Signup Page
        </Link>
      </div>
    </>
  );
}

export default Login;

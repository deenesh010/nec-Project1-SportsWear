import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function Register({ islogged, setIsLogged }) {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/user/signup", {
          name: username,
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            history("/", { state: { id: email } });
            setIsLogged(true);
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
        <h1>Signup</h1>

        <form action="POST">
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="user name"
          />
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

        <Link className="link" to="/login">
          Login Page
        </Link>
      </div>
    </>
  );
}

export default Register;

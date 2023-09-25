// import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";

// import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import DeleteProduct from "./pages/DeleteProduct";
import { useState } from "react";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import AdminLogin from "./pages/AdminLogin";

function App() {
  const [islogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar islogged={islogged} setIsLogged={setIsLogged} /> */}
        <Routes>
          {islogged ? (
            <Route
              path="/"
              element={<Home islogged={islogged} setIsLogged={setIsLogged} />}
            />
          ) : (
            <Route
              path="/"
              element={<Home2 islogged={islogged} setIsLogged={setIsLogged} />}
            />
          )}

          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/isadmin" element={<AdminLogin />} />

          <Route
            path="/login"
            element={<Login islogged={islogged} setIsLogged={setIsLogged} />}
          />
          <Route
            path="/signup"
            element={<Register islogged={islogged} setIsLogged={setIsLogged} />}
          />
          <Route
            path="/about"
            element={<About islogged={islogged} setIsLogged={setIsLogged} />}
          />
          {islogged ? (
            <Route
              path="/cart"
              element={<Cart islogged={islogged} setIsLogged={setIsLogged} />}
            />
          ) : (
            <Route
              path="/login"
              element={<Login islogged={islogged} setIsLogged={setIsLogged} />}
            />
          )}

          <Route path="/add" element={<AddProduct />} />
          <Route path="/delete" element={<DeleteProduct />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

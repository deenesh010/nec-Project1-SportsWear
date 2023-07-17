import NavBar from "./components/NavBar";
import Home from "./pages/Home";
// import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import DeleteProduct from "./pages/DeleteProduct";
import { useState } from "react";

function App() {
  const [islogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar islogged={islogged} setIsLogged={setIsLogged} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route
            path="/login"
            element={<Login islogged={islogged} setIsLogged={setIsLogged} />}
          />
          <Route
            path="/signup"
            element={<Register islogged={islogged} setIsLogged={setIsLogged} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/delete" element={<DeleteProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

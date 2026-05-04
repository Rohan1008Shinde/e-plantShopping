import { useState } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && (
        <div>
          <h1>🌿 Paradise Nursery</h1>
          <button onClick={() => setPage("products")}>Get Started</button>
          <AboutUs />
        </div>
      )}

      {page === "products" && <ProductList />}
      {page === "cart" && <CartItem setPage={setPage} />}
    </div>
  );
}

export default App;
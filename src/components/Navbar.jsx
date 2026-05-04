import { useSelector } from "react-redux";

function Navbar({ setPage }) {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div style={{ display: "flex", gap: "20px", background: "#333", color: "white", padding: "10px" }}>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("products")}>Plants</button>
      <button onClick={() => setPage("cart")}>Cart ({total})</button>
    </div>
  );
}

export default Navbar;
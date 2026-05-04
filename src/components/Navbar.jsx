import { useSelector } from "react-redux";

function Navbar() {
  const count = useSelector(state =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <div style={{ background: "#333", color: "white", padding: "10px" }}>
      <span style={{ marginRight: "20px" }}>Home</span>
      <span style={{ marginRight: "20px" }}>Plants</span>
      <span>Cart ({count})</span>
    </div>
  );
}

export default Navbar;
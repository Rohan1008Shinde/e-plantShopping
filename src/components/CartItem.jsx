import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";

function CartItem({ setPage }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      <h3>Total Amount: ${total}</h3>

      {items.map((item) => (
        <div key={item.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          {item.quantity}
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <button onClick={() => setPage("products")}>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
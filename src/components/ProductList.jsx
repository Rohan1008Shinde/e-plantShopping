import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const plants = [
  // Indoor (6 plants)
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 12, category: "Indoor" },
  { id: 4, name: "Spider Plant", price: 11, category: "Indoor" },
  { id: 5, name: "ZZ Plant", price: 18, category: "Indoor" },
  { id: 6, name: "Rubber Plant", price: 20, category: "Indoor" },

  // Outdoor (6 plants)
  { id: 7, name: "Rose", price: 20, category: "Outdoor" },
  { id: 8, name: "Tulip", price: 18, category: "Outdoor" },
  { id: 9, name: "Sunflower", price: 14, category: "Outdoor" },
  { id: 10, name: "Lavender", price: 16, category: "Outdoor" },
  { id: 11, name: "Hibiscus", price: 19, category: "Outdoor" },
  { id: 12, name: "Daisy", price: 13, category: "Outdoor" },

  // Succulent (6 plants)
  { id: 13, name: "Cactus", price: 8, category: "Succulent" },
  { id: 14, name: "Jade Plant", price: 11, category: "Succulent" },
  { id: 15, name: "Aloe Juvenna", price: 9, category: "Succulent" },
  { id: 16, name: "Agave", price: 13, category: "Succulent" },
  { id: 17, name: "Echeveria", price: 10, category: "Succulent" },
  { id: 18, name: "Haworthia", price: 12, category: "Succulent" },
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const isAdded = (id) => cart.find((item) => item.id === id);

  return (
    <div>
      <h2>Plants</h2>

      {["Indoor", "Outdoor", "Succulent"].map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          {plants
            .filter((p) => p.category === category)
            .map((p) => (
              <div key={p.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                <h4>{p.name}</h4>
                <p>${p.price}</p>

                <button
                  disabled={isAdded(p.id)}
                  onClick={() => dispatch(addToCart(p))}
                >
                  {isAdded(p.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
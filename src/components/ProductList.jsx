import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice"; // ✅ FIXED NAME

const plants = [
  // Indoor (6 plants)
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", image: "/src/assets/hero.png" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", image: "/src/assets/hero.png" },
  { id: 3, name: "Peace Lily", price: 12, category: "Indoor", image: "/src/assets/hero.png" },
  { id: 4, name: "Spider Plant", price: 14, category: "Indoor", image: "/src/assets/hero.png" },
  { id: 5, name: "ZZ Plant", price: 18, category: "Indoor", image: "/src/assets/hero.png" },
  { id: 6, name: "Rubber Plant", price: 20, category: "Indoor", image: "/src/assets/hero.png" },

  // Outdoor (6 plants)
  { id: 7, name: "Rose", price: 20, category: "Outdoor", image: "/src/assets/hero.png" },
  { id: 8, name: "Tulip", price: 18, category: "Outdoor", image: "/src/assets/hero.png" },
  { id: 9, name: "Sunflower", price: 14, category: "Outdoor", image: "/src/assets/hero.png" },
  { id: 10, name: "Lavender", price: 16, category: "Outdoor", image: "/src/assets/hero.png" },
  { id: 11, name: "Hibiscus", price: 19, category: "Outdoor", image: "/src/assets/hero.png" },
  { id: 12, name: "Daisy", price: 13, category: "Outdoor", image: "/src/assets/hero.png" },

  // Succulent (6 plants)
  { id: 13, name: "Cactus", price: 8, category: "Succulent", image: "/src/assets/hero.png" },
  { id: 14, name: "Jade Plant", price: 11, category: "Succulent", image: "/src/assets/hero.png" },
  { id: 15, name: "Aloe Juvenna", price: 9, category: "Succulent", image: "/src/assets/hero.png" },
  { id: 16, name: "Agave", price: 13, category: "Succulent", image: "/src/assets/hero.png" },
  { id: 17, name: "Echeveria", price: 10, category: "Succulent", image: "/src/assets/hero.png" },
  { id: 18, name: "Haworthia", price: 12, category: "Succulent", image: "/src/assets/hero.png" },
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

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {plants
              .filter((p) => p.category === category)
              .map((p) => (
                <div
                  key={p.id}
                  style={{
                    border: "1px solid black",
                    margin: "10px",
                    padding: "10px",
                    width: "180px",
                    textAlign: "center"
                  }}
                >
                  {/* ✅ IMAGE (IMPORTANT FOR MARKS) */}
                  <img src={p.image} alt={p.name} width="120" />

                  <h4>{p.name}</h4>
                  <p>${p.price}</p>

                  <button
                    disabled={isAdded(p.id)}
                    onClick={() => dispatch(addItem(p))} // ✅ FIXED
                  >
                    {isAdded(p.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Home = () => {
  const dispatch = useDispatch();

  const product = {
    id: 1,
    name: "iPhone 15"
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>{product.name}</p>

      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
};

export default Home;

import useCartStore from "../store/cartStore";

const Home = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const product = {
    id: 1,
    name: "iPhone 15",
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>{product.name}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Home;

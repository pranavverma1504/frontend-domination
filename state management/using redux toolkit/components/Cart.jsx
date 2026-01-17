import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))
      )}
    </div>
  );
};

export default Cart;

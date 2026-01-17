import useCartStore from "../store/cartStore";

const Cart = () => {
  const items = useCartStore((state) => state.items);

  return (
    <div>
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))
      )}
    </div>
  );
};

export default Cart;

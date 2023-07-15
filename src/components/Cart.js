import { useSelector } from "react-redux";
import { CartFoodItem } from "./CartFoodItem";
import { useDispatch } from "react-redux";
import { clearCart } from "./utils/cartSlice";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
const dispatch = useDispatch()
  const handleClearCart = () =>{
    dispatch(clearCart())
  }
  return (
    <div>
      <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {" "}
        {cartItems.map((item) => (
          <CartFoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

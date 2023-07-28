import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnlineStatus from "./CustomHook/useOnlineStatus";
import { useSelector } from "react-redux";
import { store } from "./utils/Store";
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector(store => store.cart.items);


  return (
    <div className="flex justify-between bg-orange-500 shadow-xl text-white text-xl">
      <Title />
      <div className="flex">
        <ul className="flex items-center">
          <li data-testid="onlinestat" className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <Link className="px-4" to="/">
            <li>Home</li>
          </Link>
          <Link className="px-4" to="/about">
            <li>About us</li>
          </Link>
          <Link className="px-4" to="/contact">
            <li>Contact</li>
          </Link>
          <Link className="px-4" to="/cart" >
            <li data-testid="cart">Cart - {cartItems.length}</li>
          </Link>
        </ul>
      </div>
      <button className="">
        {isLogin ? (
          <button onClick={() => setIsLogin(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLogin(true)}>Login</button>
        )}
      </button>
    </div>
  );
};

export default Header;

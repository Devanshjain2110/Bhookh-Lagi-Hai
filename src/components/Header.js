import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnlineStatus from "./CustomHook/useOnlineStatus";
import { useSelector } from "react-redux";
import { store } from "./utils/Store";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector(store => store.cart.items);


  return (
    <div className="flex justify-between sticky top-0 z-50 bg-orange-500 shadow-xl text-white text-lg max-h-24">
      <Title />
      <div className="flex -ml-12 ">
        <ul className="flex items-center">
          <li data-testid="onlinestat" className="px-5">Online : {onlineStatus ? "🟢" : "🔴"}</li>
          <Link className="px-5 hover:bg-white hover:text-black hover:rounded-xl h-10 pt-[6]
          " to="/">
            <li>Home</li>
          </Link>
          <Link className="px-5 hover:bg-white hover:text-black hover:rounded-xl h-10 pt-[6]
          " to="/about">
            <li>About us</li>
          </Link>
          <Link className="px-5 hover:bg-white hover:text-black hover:rounded-xl h-10 pt-[6]
          " to="/contact">
            <li>Contact</li>
          </Link>
          <Link className="px-5 hover:bg-white hover:text-black hover:rounded-xl h-10 pt-[6]
          " to="/cart" >
            <li data-testid="cart" className="flex"><BsCart2 className="mt-[6] mr-1"/> - {cartItems.length}</li>
          </Link>
        </ul>
      </div>
      <button className="mr-10 bg-orange-950 my-7 py-2 px-3 rounded-md hover:bg-white hover:text-black">
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

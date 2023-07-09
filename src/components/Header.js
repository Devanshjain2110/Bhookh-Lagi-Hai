import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnlineStatus from "./CustomHook/useOnlineStatus";
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-gray-400 shadow-xl">
      <Title />
      <div className="flex">
        <ul className="flex items-center">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <Link className="px-4" to="/">
            <li>Home</li>
          </Link>
          <Link className="px-4" to="/about">
            <li>About us</li>
          </Link>
          <Link className="px-4" to="/contact">
            <li>Contact</li>
          </Link>
          <li className="px-4">Cart</li>
         
        </ul>
      
       
      </div>
      <button className="">{isLogin ? (
        <button onClick={() => setIsLogin(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogin(true)}>Login</button>
      )}</button>

     
    </div>
  );
};

export default Header;

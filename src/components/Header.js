import { useContext, useEffect, useState } from "react";
import chef from "../assets/chef.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";

const Title = () => (
  <a href="/">
    <img
      className="h-14 w-14  md:w-14 md:h-14  lg:h-20 lg:w-20"
      alt="logo"
      src={chef}
    />
  </a>
);

const Header = () => {
  const token = localStorage.getItem("token");
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(
    token?.length === 100 ? true : false
  );
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const isOnline = useOnline();
  const { user } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  const path = useLocation();
  console.log(path)
  const isLogin = path.state?.data;

  useEffect(() => {}, [isLogin]);

  return (
    <div className="sticky z-50 top-0 w-full flex justify-between items-center px-2 lg:px-6 md:px-8 py-1 shadow bg-[#fd9133] text-white">
      <Title />
      <ul className="flex gap-5 lg:gap-6 md:gap-12 text-sm font-medium">
       
        <Link
          to="/"
          className={`  hover:text-orange-900 hover:bg-gray-200 hover:rounded px-1  transition-all duration-300 ease-in-out `}
        >
          <li>Home</li>
        </Link>

        <Link
          to="/about"
          className={` ${path.pathname==='/about' && `bg-gray-200 text-orange-900 rounded` } hover:text-orange-900 hover:bg-gray-200 hover:rounded px-1  transition-all duration-300 ease-in-out`}
        >
          <li>About</li>
        </Link>

        <Link
          to="/instamart"
          className={` ${path.pathname==='/instamart' && `bg-gray-200 text-orange-900 rounded` } hover:text-orange-900 hover:bg-gray-200 hover:rounded px-1  transition-all duration-300 ease-in-out`}
        >
          <li>Instamart</li>
        </Link>
        <li>
          <Link to="/cart" className={` ${path.pathname==='/cart' && `bg-gray-200 text-orange-900 rounded` } relative `}>
            <i className="fa-solid fa-cart-shopping">
              <span
                className="absolute top-[-8px] right-[-12px] bg-white text-yellow-400 w-4 p-1  h-4 rounded-full text-[10px] flex justify-center items-center"
                data-testid="cart"
              >
                {cartItems.length}
              </span>
            </i>
          </Link>
        </li>

        <li>
          {/* use conditional rendering for login and logout */}
          {isLoggedin ? (
            <button
              className="logout-btn"
              onClick={() => {
                localStorage.removeItem("token");
                setIsLoggedin(!isLoggedin);
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="login-btn"
              onClick={() => {
                navigate("/login", { state: { data: isLoggedin } });
                setIsLoggedin(!isLoggedin);
              }}
            >
              login
            </button>
          )}
        </li>
      </ul>
      {/* <ul>
        <li>{isOnline ? "✅" : "🔴"}</li>
        {/* <li className="font-bold text-purple-900">{user.name}</li> *
      </ul> */}
    </div>
  );
};

export default Header;

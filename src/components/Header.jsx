import React, { useState, useEffect,useContext } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "./UseOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  

  useEffect(() => {
    console.log("Useeffect called");
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="FoodCourt Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-gray-800">FoodCourt</span>
          </div>

          {/* Container for Online Status and Hamburger button, no gap */}
          <div className="flex items-center text-gray-900 md:hidden">
            <div>{onlineStatus ? "🟢" : "🔴"}</div>
            <button
              className="relative flex flex-col justify-center items-center ml-2 bg-white rounded-xl shadow-md p-2 border border-gray-200 focus:outline-none transition-all hover:shadow-lg hover:scale-105"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {/* Top bar */}
              <span
                className={`block w-8 h-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>

              {/* Middle bar (hidden when open) */}
              <span
                className={`block w-8 h-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>

              {/* Bottom bar */}
              <span
                className={`block w-8 h-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Navigation */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-white md:static md:block md:w-auto mt-4 md:mt-0 z-40 shadow-md md:shadow-none`}
          >
            <ul className="flex flex-col md:flex-row gap-6 items-center text-lg text-gray-700 font-medium px-6 py-4 md:p-0">
              {/* Online status inside nav for larger screens */}
              <li className="hidden md:block">{onlineStatus ? "🟢" : "🔴"}</li>

              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/about" onClick={closeMenu}>
                  About Us
                </Link>
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/contact" onClick={closeMenu}>
                  Contact us
                </Link>
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/cart" onClick={closeMenu}>
                  Cart
                </Link>
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/grocery" onClick={closeMenu}>
                  Grocery
                </Link>
              </li>
              <button
                className="login px-4 py-1 border border-orange-500 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                onClick={() => {
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {btnName}
              </button>
              <li className="hover:text-orange-500 cursor-pointer">
                {loggedInUser}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "./UseOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

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
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                alt="FoodCourt Logo"
                className="h-12 w-auto cursor-pointer"
              />
              <span className="text-2xl font-bold text-gray-800">
                FoodCourt
              </span>
            </Link>
          </div>

          {/* Online status + Hamburger */}
          <div className="flex items-center text-gray-900 md:hidden">
            <div>{onlineStatus ? "✅" : "🔴"}</div>
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

              {/* Middle bar */}
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
            <ul className="flex flex-col md:flex-row gap-6 items-center text-lg font-medium px-6 py-4 md:p-0">
              {/* Online status for larger screens */}
              <li className="hidden md:block">{onlineStatus ? "🟢" : "🔴"}</li>

              <li>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="text-gray-800 no-underline hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="text-gray-800 no-underline hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="text-gray-800 no-underline hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>

              {/* Cart with badge */}
              <li className="relative">
                <Link
                  to="/cart"
                  onClick={closeMenu}
                  className="flex items-center gap-1 text-gray-800 no-underline hover:text-orange-500 transition-colors"
                >
                  Cart
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </li>

              <li>
                <Link
                  to="/grocery"
                  onClick={closeMenu}
                  className="text-gray-800 no-underline hover:text-orange-500 transition-colors"
                >
                  Grocery
                </Link>
              </li>

              {/* Login / Logout */}
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

              {/* Logged in User */}
              <li className="text-gray-800">{loggedInUser}</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

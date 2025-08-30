import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useEffect } from "react";
import{Link} from "react-router-dom"

const Header = () => {
const [btnName,setBtnName] = useState("Login")

useEffect(()=>{
  console.log("Useeffect called")
},[])

  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="FoodCourt Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-gray-800">FoodCourt</span>
          </div>

          {/* Navigation */}
          <nav className="w-full mt-4 md:mt-0 md:w-auto">
            <ul className="flex gap-6 items-center text-lg text-gray-700 font-medium">
              <li className="hover:text-orange-500 cursor-pointer ">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/contact">Contact us</Link>
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                <Link to ="/grocery">Grocery</Link>
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
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

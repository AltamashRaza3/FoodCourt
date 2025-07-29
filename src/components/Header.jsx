import React from "react";
import logo from "../assets/logo.png";


const Header = () => {
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
          <nav>
            <ul className="flex gap-8 items-center text-lg text-gray-700 font-medium">
              <li className="hover:text-orange-500 cursor-pointer">Home</li>
              <li className="hover:text-orange-500 cursor-pointer">About Us</li>
              <li className="hover:text-orange-500 cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-orange-500 cursor-pointer">Cart</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

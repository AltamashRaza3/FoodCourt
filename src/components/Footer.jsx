import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 shadow-inner mt-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Side */}
        <p className="text-sm md:text-base">
          © {year} <span className="font-semibold">Food Court</span>. All rights
          reserved.
        </p>

        {/* Center */}
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <span>Made with</span>
          <i className="fa-solid fa-heart text-red-500 animate-pulse"></i>
          <span>by</span>
          <a
            href="https://www.linkedin.com/in/altamashraza3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 font-semibold transition-colors"
          >
            Altamash Raza
          </a>
        </div>

        {/* Right Side - Social Links */}
        <div className="flex gap-4 mt-3 md:mt-0">
          <a
            href="https://github.com/altamashraza3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="fa-brands fa-github text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/altamashraza3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

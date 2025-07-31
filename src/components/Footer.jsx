import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer text-2xl font-bold text-gray-800 mt-2.5 left-0 w-full bg-white shadow-md z-50">
      <div className="lex items-center justify-between">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a
          href="https://www.linkedin.com/in/altamashraza3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Altamash Raza
        </a>
        <i className="fa-solid fa-copyright"></i>&nbsp;
        {year}
        <strong>Food Court</strong>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      Created By&nbsp;
      <i className="fa-solid fa-heart"></i>&nbsp;
      <a
        href="https://www.linkedin.com/in/altamashraza3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Altamash Raza
      </a>
      &nbsp;
      <i className="fa-solid fa-copyright"></i>&nbsp;
      {year}
      <strong>
        FoodCourt
      </strong>
    </div>
  );
};

export default Footer;

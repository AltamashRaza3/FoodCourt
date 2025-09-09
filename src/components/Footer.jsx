import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: "FoodCourt",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Explore",
      links: [
        { name: "Restaurants", path: "/" },
        { name: "Cart", path: "/cart" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/contact" },
        { name: "Privacy Policy", path: "#" },
        { name: "Terms of Service", path: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 min-h-[220px] flex flex-col justify-between">
      
      {/* Top Grid */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-lg font-semibold mb-4 text-white">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith("http") || link.path === "#" ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `transition-colors ${
                          isActive
                            ? "text-yellow-400 font-semibold"
                            : "hover:text-white"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social Icons */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6 flex justify-center space-x-8">
          <a
            href="https://github.com/AltamashRaza3"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/altamashraza3/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-400 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p className="mb-2 md:mb-0">
            © {year}{" "}
            <span className="font-semibold text-gray-200">FoodCourt</span>. All
            rights reserved.
          </p>
          <p className="flex items-center gap-1 mb-2 md:mb-0">
            Made with{" "}
            <FaHeart className="text-red-500 animate-pulse" aria-hidden="true" /> by{" "}
            <a
              href="https://www.linkedin.com/in/altamashraza3/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-200 hover:text-white transition-colors"
            >
              Altamash Raza
            </a>
          </p>
          <div className="flex space-x-4">
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-gray-200 transition-colors"
              }
            >
              Privacy Policy 
            </NavLink>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-gray-200 transition-colors"
              }
            >
              Terms of Service
            </NavLink>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-gray-200 transition-colors"
              }
            >
              Cookie Policy
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

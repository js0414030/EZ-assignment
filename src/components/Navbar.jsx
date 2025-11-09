import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import menuIcon from "../assets/Menu.svg";
import logo from "../assets/VFilms Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/about/team" },
    { name: "Brands", path: "/portfolio" },
    { name: "Our Story", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-[#fffaf5]/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        
        {/* ✅ Logo replaces text */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="V Films Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <img src={menuIcon} alt="Menu" className="w-6 h-6" />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-[#2e2e2e] font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#a43f0f] underline underline-offset-4"
                    : "hover:text-[#a43f0f] transition"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="bg-[#ff7a00] text-white px-5 py-2 rounded-full shadow hover:shadow-md transition font-semibold"
            >
              Let’s Talk
            </Link>
          </li>
        </ul>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="absolute top-16 right-6 bg-white shadow-lg rounded-md p-6 flex flex-col space-y-4 md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-[#a43f0f] transition"
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-[#ff7a00] text-white px-4 py-2 rounded-full text-center font-medium"
              onClick={() => setOpen(false)}
            >
              Let’s Talk
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

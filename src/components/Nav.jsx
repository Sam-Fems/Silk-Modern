import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { navItems } from "../constants";
import { FaCartArrowDown } from "react-icons/fa6";
import { useCart } from "../context/cartContext";

const Nav = ({ onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-neutral-200/10 px-6 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-3xl h2 font-bold text-white tracking-wide">
          Silk<span className="text-[#BFA27A]">Modern</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-10 h2 text-white font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-[#BFA27A] hover:border-b-2 hover:border-[#BFA27A] transition"
            >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="relative max-sm:hidden w-96 max-w-[400px]">
          <input
            className="bg-[#f2f3f5] border-none outline-one h2 px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search Product..."
          />
          <Search
            className="absolute top-0 right-0 mt-3 mr-4 text-gray-500"
            size={25}
          />
        </div>

        <div className="flex items-center gap-4 text-white">
          <div className="relative">
            <FaCartArrowDown
              onClick={onCartClick}
              className="cursor-pointer hover:text-[#BFA27A] transition border border-[#BFA27A] rounded-full w-[30px] h-[30px] grid place-items-center"
            />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 h1 -right-2 bg-[#BFA27A] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </div>

          <button
            className="lg:hidden  cursor-pointer hover:text-[#BFA27A] transition"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden mt-4 space-y-4 text-center text-white font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-[#BFA27A] transition">
              <Link to={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;

// src/components/Navbar.jsx
import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import AutoScrollHeader from "./AutoScrollHeader";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#header" },
    { name: "About Us", href: "#aboutus" },
    { name: "Services", href: "#services" },
    { name: "About Me", href: "#aboutme" },
    { name: "Contact Us", href: "#contactus" },
  ];

  return (
    <>
      <nav className="w-full bg-white shadow-sm  top-0 left-0 z-50">
            <AutoScrollHeader/>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="bg-black text-white font-bold text-sm lg:text-base px-3 py-1 rounded-full">
             EBONY  
            </div>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-black font-medium text-sm lg:text-base">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#af8a4a] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {/* <button className="bg-[#af8a4a] hover:bg-[#af8a4a] text-white font-semibold px-4 lg:px-6 py-2 rounded text-sm lg:text-base">
              Portfolio Login
            </button> */}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center gap-3">
            <button className="bg-[#af8a4a] hover:bg-[#af8a4a] text-white font-semibold px-3 py-2 rounded text-sm">
              Portfolio Login
            </button>
            <button onClick={() => setIsMenuOpen(true)}>
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end p-4">
  <div className="bg-white w-full sm:w-full h-full relative transition-transform duration-300 ease-in-out">

    {/* ✅ Full-width black row */}
    <div className="w-full bg-black p-4 flex justify-end items-center">

      {/* ✅ Close Button */}
      <button onClick={() => setIsMenuOpen(false)}>
        <XMarkIcon className="h-8 w-8 text-white" />
      </button>

    </div>

    {/* ✅ Menu Links */}
    <ul className="mt-8 space-y-6 text-black text-lg font-medium p-6">
      {navLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="block hover:text-[#af8a4a] transition-colors duration-200"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>

  </div>
</div>

      )}
    </>
  );
};

export default Navbar;

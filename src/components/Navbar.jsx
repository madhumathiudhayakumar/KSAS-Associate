import React, { useEffect, useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

import AutoScrollHeader from "./AutoScrollHeader";
import logo from "../assets/logo_circle_image.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const currentHash = location.hash || (location.pathname === "/" ? "#header" : "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("Current Hash:", location.hash, location.pathname, currentHash);

  const navLinks = [
    { name: "Home", href: "#header" },
    { name: "About Us", href: "#aboutus" },
    { name: "Services", href: "#services" },
    { name: "About Me", href: "#aboutme" },
    { name: "Terms & Conditions", href: "/terms-condition" },
    { name: "Contact Us", href: "#contactus" },
  ];
  const handleNavClick = (href) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (location.pathname === "/") {
      // already on home → scroll smoothly
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // navigate to home first
      navigate("/");

      // wait for React to render Home, then scroll
      setTimeout(() => {
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // delay for home render
    }
  };

  return (
    <>
      <nav className="w-full bg-[var(--brand-light)] shadow-sm  top-0 left-0 z-50">
        {location?.pathname !== "/privacy-policy" && location?.pathname !== "/terms-condition" && <AutoScrollHeader />}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4">
          {/* Logo Section */}
          {/* <div className="flex items-center gap-2">
            <div className="flex items-center space-x-2 px-4 py-2"> */}
          <div className="bg-[var(--brand-dark)] rounded-full w-20 h-20 flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-24 h-24 object-contain rounded-full p-2"
            />
          </div>
          {/* </div>
          </div> */}

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-[var(--brand-dark)] font-medium text-sm lg:text-base">
            {navLinks.map((link) => {
              const isSectionLink = link.href.startsWith("#");

              const isActive = isSectionLink
                ? currentHash === link.href          // highlight for home/sections
                : location.pathname === link.href;
              console.log("isActive", isSectionLink, isActive, currentHash, link.href);
              return (
                <li key={link.name}>
                  <Link to={isSectionLink ? "/" : link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`transition-colors duration-200 ${isActive ? "text-[var(--brand-gold)] font-semibold" : "hover:text-[var(--brand-gold-dark)]"
                      }`}>
                    {link.name}</Link>
                  {/* <a
                  href={link.href}
                  className="hover:text-[#af8a4a] transition-colors duration-200"
                > */}
                  {/* </a> */}
                </li>
              )
            })}
            {/* <button className="bg-[#af8a4a] hover:bg-[#af8a4a] text-white font-semibold px-4 lg:px-6 py-2 rounded text-sm lg:text-base">
              Portfolio Login
            </button> */}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center gap-3">
            {/* <button className="bg-[#af8a4a] hover:bg-[#af8a4a] text-white font-semibold px-3 py-2 rounded text-sm">
              Portfolio Login
            </button> */}
            <button onClick={() => setIsMenuOpen(true)}>
              <Bars3Icon className="h-6 w-6 text-[var(--brand-dark)]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[var(--brand-dark)] bg-opacity-50 z-50 flex justify-end p-4">
          <div className="bg-[var(--brand-light)] w-full sm:w-full h-full relative transition-transform duration-300 ease-in-out">

            {/* ✅ Full-width black row */}
            <div className="w-full bg-[var(--brand-dark)] p-4 flex justify-end items-center">

              {/* ✅ Close Button */}
              <button onClick={() => setIsMenuOpen(false)}>
                <XMarkIcon className="h-8 w-8 text-[var(--brand-light)]" />
              </button>

            </div>

            {/* ✅ Menu Links */}
            <ul className="mt-8 space-y-6 text-[var(--brand-dark)] text-lg font-medium p-6">
              {navLinks.map((link) => {
                const isSectionLink = link.href.startsWith("#");

                const isActive = isSectionLink
                  ? currentHash === link.href          // highlight for home/sections
                  : location.pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link to={isSectionLink ? "/" : link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`transition-colors duration-200 ${isActive ? "text-[var(--brand-gold)] font-semibold" : "hover:text-[var(--brand-gold-dark)]"
                        }`}>
                      {link.name}</Link>
                    {/* <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                       className={`transition-colors duration-200 ${
                  isActive ? "text-[var(--brand-gold)] font-semibold" : "hover:text-[var(--brand-gold-dark)]"
                }`}
                  >
                    {link.name}
                  </a> */}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

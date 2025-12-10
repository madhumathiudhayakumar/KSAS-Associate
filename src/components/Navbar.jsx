import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { IoLogoWhatsapp } from "react-icons/io";
import AutoScrollHeader from "./AutoScrollHeader";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", href: "#header" },
  { name: "About Us", href: "#aboutus" },
  { name: "About Me", href: "#aboutme" },
  { name: "Services", href: "#services" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-condition" },
  { name: "Blogs", href: "/blogs" },
  { name: "Resources", href: "/resources" },
  { name: "Contact Us", href: "#contactus" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentHash =
    location.hash || (location.pathname === "/" ? "#header" : "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (location.pathname === "/") {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      // wait for React to render Home, then scroll
      setTimeout(() => {
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <AutoScrollHeader />
      </div>

      <nav className="fixed w-full bg-[var(--brand-light)] shadow-sm top-8 left-0 z-40">
        <div className="w-full px-4 flex items-center justify-between">
          {/* Logo Section */}
          {/* <div className="flex items-center gap-2">
            <div className="flex items-center space-x-2 px-4 py-2"> */}
          <div className="w-25 h-25 rounded-full flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-25 h-25 object-contain rounded-full p-2 cursor-pointer"
            />
          </div>

          {/* </div>
          </div> */}

          {/* Desktop Nav Links */}
          <ul
            className="
  hidden sm:flex 
  flex-wrap 
  items-center 
  justify-center 
  gap-3 sm:gap-4 lg:gap-6
  text-[var(--brand-dark)] 
  font-medium 
  text-xs sm:text-sm lg:text-base
  px-2
"
          >
            {navLinks.map((link) => {
              const isSectionLink = link.href.startsWith("#");

              const isActive = isSectionLink
                ? currentHash === link.href
                : location.pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    to={isSectionLink ? "/" : link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "text-[var(--brand-gold)] font-semibold"
                        : "hover:text-[var(--brand-gold-dark)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <div
                className="   border border-[var(--brand-gold)]
      rounded-xl
      flex items-center gap-2
      text-[var(--brand-dark)]
      hover:text-[var(--brand-gold)]
      hover:border-[var(--brand-gold-dark)]
      py-2 px-4
      cursor-pointer
      transition-all"
                onClick={() =>
                  window.open("https://wa.me/918248947995", "_blank")
                }
              >
                <IoLogoWhatsapp className="text-green-500 text-xl" />
                <span className="font-medium">+91 8248947995</span>
              </div>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="flex sm:hidden items-center gap-3">
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
                  ? currentHash === link.href
                  : location.pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      to={isSectionLink ? "/" : link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`transition-colors duration-200 ${
                        isActive
                          ? "text-[var(--brand-gold)] font-semibold"
                          : "hover:text-[var(--brand-gold-dark)]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

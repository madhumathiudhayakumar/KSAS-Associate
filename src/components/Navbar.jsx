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
      <nav className="fixed w-full bg-[var(--brand-light)] shadow-sm  top-0 left-0 z-50">
        <AutoScrollHeader />
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          {/* <div className="flex items-center gap-2">
            <div className="flex items-center space-x-2 px-4 py-2"> */}
          <div className="rounded-full w-25 h-25 flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-34 h-34 object-contain rounded-full p-2 cursor-pointer"
              onClick={() => handleNavClick("#header")}
            />
          </div>
          {/* </div>
          </div> */}

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-[var(--brand-dark)] font-medium text-sm lg:text-base">
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
                onClick={() => (window.location.href = "tel:+919080391749")}
              >
                <IoLogoWhatsapp className="text-green-500 text-xl" />
                <span className="font-medium">+91 9080391749</span>
              </div>
            </li>
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

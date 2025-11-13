import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import amfilogo from "../assets/amfi-logo.webp";
import mutualfundlogo from "../assets/mutualfund-logo.webp";
import logo from "../assets/logo_circle_image.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const Links = [
    { name: "Home", href: "#header" },
    { name: "About Us", href: "#aboutus" },
    { name: "Services", href: "#services" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const handleNavClick = (href) => {
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
    <footer className="bg-[var(--brand-gray-dark)] text-[var(--brand-gray-light)] pt-10 mt-15">
      <div className="bg-[var(--brand-gray-dark)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center">
            <div className="bg-[var(--brand-dark)] rounded-full w-30 h-30 flex items-center justify-center">
              <img
                src={logo}
                alt="Logo"
                className="w-24 h-24 object-contain rounded-full"
              />
            </div>
          </div>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base mb-8">
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href.startsWith("#") ? "/" : link.href}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-[var(--brand-gold)] transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <hr className="border-[var(--brand-light)] mb-8" />

        {/* Description Section */}
        <div className="px-4 md:px-8 pb-8">
          <div className="mx-auto text-left space-y-4">
            <p className="font-semibold text-[var(--brand-light)] text-left">
              Ebony is an AMFI Registered Mutual Fund Distributor.
            </p>

            <p className="text-sm text-[var(--brand-gray-light)] leading-relaxed text-left">
              Disclaimer: Mutual fund investments are subject to market risks. Please read
              the scheme information and other related documents carefully before investing.
              Past performance is not indicative of future returns. Please consider your
              specific investment requirements before choosing a fund, or designing a
              portfolio that suits your needs.
            </p>

            <p className="text-sm text-[var(--brand-gray-light)] leading-relaxed text-left">
              Ebony makes no warranties or representations, express
              or implied, on products offered through the platform of Ebony.
              It accepts no liability for any damages or losses, however
              caused, in connection with the use of, or on the reliance of its product or
              related services. Terms and conditions of the website are applicable.
            </p>
          </div>
        </div>


        {/* Logos */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-6">
          <div className="bg-[var(--brand-light)] p-2 rounded">
            <img
              src={amfilogo}
              alt="AMFI Logo"
              className="h-12 object-contain"
            />
          </div>

          <p className=" text-sm text-center mt-1">AMFI Registered ARN - 194729</p>

          <div className="bg-[var(--brand-light)] p-2 rounded">
            <img
              src={mutualfundlogo}
              alt="Mutual Funds Logo"
              className="h-12 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[var(--brand-dark)] border-t border-[var(--brand-gray)] mt-10 pt-6 pb-4 text-sm px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          {/* Left side text */}
          <div>
            <p className="text-[var(--brand-gray-light)]">
              © Copyright 2025{" "}
              <span className="font-semibold text-[var(--brand-light)]">
                Ebony.
              </span>{" "}
              All rights reserved.
            </p>
            <p className="text-[var(--brand-gray-light)] mt-1">
              Designed by{" "}
              <span className="text-[var(--brand-gold)] font-semibold">LAKZURA Tech</span>
            </p>
          </div>

          {/* Right side social icons */}
          {/* <div className="flex justify-center sm:justify-end gap-4">
      <a
        href="#"
        className="bg-gray-800 p-2 rounded hover:bg-yellow-600 transition"
      >
        <FaFacebookF className="text-white" />
      </a>
      <a
        href="#"
        className="bg-gray-800 p-2 rounded hover:bg-yellow-600 transition"
      >
        <FaTwitter className="text-white" />
      </a>
      <a
        href="#"
        className="bg-gray-800 p-2 rounded hover:bg-yellow-600 transition"
      >
        <FaInstagram className="text-white" />
      </a>
    </div> */}
        </div>
      </div>

    </footer>
  );
};

export default Footer;

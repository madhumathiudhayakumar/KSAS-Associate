import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import amfilogo from "../assets/amfi-logo.webp";
import mutualfundlogo from "../assets/mutualfund-logo.webp";
import logo from "../assets/logo.png";

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
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <footer className="bg-[var(--brand-gray-dark)] text-[var(--brand-gray-light)] pt-10 mt-15">
      <div className="bg-[var(--brand-gray-dark)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center">
            <div className=" rounded-full w-30 h-30 flex items-center justify-center">
              <img
                src={logo}
                alt="Logo"
                className="w-26 h-26 object-contain rounded-full cursor-pointer"
                onClick={() => handleNavClick("#header")}
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
            {/* <p className="font-semibold text-[var(--brand-light)] text-left">
              <span className="font-semibold text-[var(--brand-light)]">Fortuna Wealth Management</span> is an AMFI-registered Mutual Fund Distributor.
            </p> */}

            <p className="text-sm text-[var(--brand-gray-light)] leading-relaxed text-left">
              <span className="font-semibold text-[var(--brand-light)]">Fortuna Wealth Management</span> makes no
              warranties or representations, expressed or implied, regarding the products or services offered
              through its platform. The firm shall not be held liable for any loss or damage arising from the
              use of, or reliance on, any information, products, or related services provided. All website terms
              and conditions apply.
            </p>

            <p className="text-sm text-[var(--brand-gray-light)] leading-relaxed text-left">
              We are not SEBI-registered investment advisors. We do not provide account handling services,
              stock tips, trading calls, etc. All information shared is intended for general awareness
              and educational purposes only.
            </p>

            <p className="text-sm text-[var(--brand-gray-light)] leading-relaxed text-left">
              Investors are strongly advised to conduct their own research before making any investment
              decisions. You are solely responsible for your investment decisions.
            </p>

            <p className="text-sm text-[var(--brand-gray-light)] leading-relaxed text-left">
              Investments in securities markets are subject to market risks; please read all associated
              documents carefully before making any investment decisions.
            </p>

          </div>
        </div>


        {/* Logos */}
        {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-6">
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
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="bg-[var(--brand-dark)] border-t border-[var(--brand-gray)] mt-10 pt-6 pb-4 text-sm px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          {/* Left side text */}
          <div>
            <p className="text-[var(--brand-gray-light)]">
              © Copyright 2025{" "}
              <span className="font-semibold text-[var(--brand-light)]">
                Fortuna Wealth Management —
              </span>{" "}
              All rights reserved.
            </p>
            <p className="text-[var(--brand-gray-light)] mt-1">
              Designed by{" "}
              <span className="text-[var(--brand-gold)] font-semibold">LAKZURA Tech</span>
            </p>
          </div>

          {/* Right side social icons */}
          <div className="flex justify-center sm:justify-end gap-4">
            <a
              href="https://wa.me/919080391749"
              target="_blank"
              className="bg-gray-800 p-2 rounded hover:bg-[var(--brand-gold)] transition"
            >
              <FaWhatsapp className="text-[var(--brand-light)] text-xl" />
            </a>
            <a
              href="https://facebook.com/fortuna.wealth.org@gmail.com"
              target="_blank"
              className="bg-gray-800 p-2 rounded hover:bg-[var(--brand-gold)] transition"
            >
              <FaFacebookF className="text-[var(--brand-light)] text-xl" />
            </a>
            <a
              href="https://instagram.com/fortuna.wealth.mgmt"
              target="_blank"
              className="bg-gray-800 p-2 rounded hover:bg-[var(--brand-gold)] transition"
            >
              <FaInstagram className="text-[var(--brand-light)] text-xl" />
            </a>
            <a
               href="https://mail.google.com/mail/?view=cm&to=fortuna.wealth.org@gmail.com"
               target="_blank"
              className="bg-gray-800 p-2 rounded hover:bg-[var(--brand-gold)] transition"
            >
              <BiLogoGmail className="text-[var(--brand-light)] text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

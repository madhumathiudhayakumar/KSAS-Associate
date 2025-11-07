import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#444] text-gray-300 pt-10">
      <div className="bg-[#444] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center">
            <div className="bg-black border-2 border-[#af8a4a] rounded-full w-30 h-30 flex items-center justify-center">
              <span className="text-[#af8a4a] font-bold text-lg">KSAS ASSOCIATE</span>
            </div>
          </div>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base mb-8">
          <li><a href="#" className="hover:text-[#af8a4a]">Home</a></li>
          <li><a href="#" className="hover:text-[#af8a4a]">About us</a></li>
          <li><a href="#" className="hover:text-[#af8a4a]">Services</a></li>
          <li><a href="#" className="hover:text-[#af8a4a]">Privacy policy</a></li>
          <li><a href="#" className="hover:text-[#af8a4a]">Commission Disclosures</a></li>
        </ul>

        <hr className="border-white-600 mb-8" />

{/* Description Section */}
<div className="px-4 md:px-8 pb-8">
  <div className="mx-auto text-left space-y-4">
    <p className="font-semibold text-white text-left">
      Fin and Me Wealth Partners LLP is an AMFI Registered Mutual Fund Distributor.
    </p>

    <p className="text-sm text-gray-300 leading-relaxed text-left">
      Disclaimer: Mutual fund investments are subject to market risks. Please read
      the scheme information and other related documents carefully before investing.
      Past performance is not indicative of future returns. Please consider your
      specific investment requirements before choosing a fund, or designing a
      portfolio that suits your needs.
    </p>

    <p className="text-sm text-gray-300 leading-relaxed text-left">
      Fin and Me Wealth Partners LLP makes no warranties or representations, express
      or implied, on products offered through the platform of Fin and Me Wealth
      Partners LLP. It accepts no liability for any damages or losses, however
      caused, in connection with the use of, or on the reliance of its product or
      related services. Terms and conditions of the website are applicable.
    </p>
  </div>
</div>


        {/* Logos */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-6">
          <div className="bg-white p-2 rounded">
            <img
              src="https://www.amfiindia.com/images/AMFI-Logo.jpg"
              alt="AMFI Logo"
              className="h-12 object-contain"
            />
          </div>
          
          <p className=" text-sm text-center mt-1">AMFI Registered ARN - 194729</p>
          
          <div className="bg-white p-2 rounded">
            <img
              src="https://mutualfundssahihai.com/sites/default/files/2022-10/Mutual-Funds-Sahi-Hai-Logo.png"
              alt="Mutual Funds Logo"
              className="h-12 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
<div className="bg-[#111] border-t border-gray-700 mt-10 pt-6 pb-4 text-sm px-16">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
    {/* Left side text */}
    <div>
      <p className="text-gray-400">
        © Copyright 2024{" "}
        <span className="font-semibold text-white">
          Fin and Me Wealth Partners LLP.
        </span>{" "}
        All rights reserved.
      </p>
      <p className="text-gray-500 mt-1">
        Designed by{" "}
        <span className="text-[#af8a4a] font-semibold">REDVisiontech</span>
      </p>
    </div>

    {/* Right side social icons */}
    <div className="flex justify-center sm:justify-end gap-4">
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
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;

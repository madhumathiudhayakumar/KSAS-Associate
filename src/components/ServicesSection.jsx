import React from "react";
import { FaBuffer, FaSuitcase, FaSearch } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { BiSolidVideoRecording, BiAnalyse } from "react-icons/bi";

const services = [
  { name: "Expense Analytics", icon: <FaBuffer /> },
  { name: "MF Portfolio Analysis", icon: <BiAnalyse /> },
  { name: "Budgeting Assistance", icon: <IoStatsChart /> },
  { name: "Goal-based MF Investing", icon: <FaSuitcase /> },
  { name: "Asset Allocation", icon: <BiSolidVideoRecording /> },
  { name: "Portfolio Rebalancing", icon: <FaSearch /> },
];

const ServicesSection = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative bg-black text-white text-center pt-10 pb-6 rounded-xl shadow-md hover:bg-[#af8a4a] transition-all duration-300"
            >
              {/* Floating Icon Circle */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#fff] text-[#af8a4a] w-12 h-12 flex items-center justify-center rounded-full shadow-md text-2xl font-bold">
                {service.icon}
              </div>

              <h3 className="font-semibold text-sm md:text-base mt-2">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import React from "react";
import ContactImage from "../assets/contactus.jpg";

const Contactus = () => {
    return(
         <section className="bg-black py-12">
      <h2 className="text-center text-white text-2xl md:text-3xl font-bold">
        CONTACT US
      </h2>

      {/* Underline */}
      <div className="w-14 h-1 bg-[#af8a4a] mx-auto mt-2 mb-10 rounded-full"></div>

      <div className="container mx-auto mt-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <div className="bg-[#fff] text-white rounded-xl p-8 shadow-xl">
                      <img
              src={ContactImage}
              alt="contact us"
              // className="h-12 object-contain"
            />
          {/* <div className="flex items-center gap-3 mb-4">
            <GiMoneyStack className="text-[#af8a4a] text-3xl" />
            <h3 className="text-xl font-semibold">Money Management</h3>
          </div>

          <ul className="space-y-3 text-black leading-relaxed">
            <li className="flex gap-3 text-[#fff]">
              <BsSunFill className="text-[#af8a4a] mt-1" />
                Monthly Budgeting Assistance: Helping you save more while spending mindfully.
            </li>

            <li className="flex gap-3 text-[#fff]">
              <BsSunFill className="text-[#af8a4a] mt-1" />
              Financial Health Checks: Offering spend analytics to understand your current financial standing.
            </li>

            <li className="flex gap-3 text-[#fff]">
              <BsSunFill className="text-[#af8a4a] mt-1" />
              Debt Guidance: Assisting you in managing costly loans and focusing on increasing your savings.
            </li>
          </ul> */}
        </div>

        {/* Card 2 */}
        <div className="bg-[#fff] text-white rounded-xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <h5 className="text-xl font-semibold text-black">Mr.S.Kalimuthu </h5>
          </div>
                    <div className="flex items-center gap-3 mb-4">
            <p className="text-xl font-semibold text-black">+91-9080391749</p>
          </div>
          {/* <div className="flex items-center gap-3 mb-4">
            <FaChartPie className="text-[#af8a4a] text-3xl" />
            <h3 className="text-xl font-semibold">Investment Services</h3>
          </div>

          <ul className="space-y-3 text-black leading-relaxed">
            <li className="flex gap-3 text-[#fff]">
              <BsSunFill className="text-[#af8a4a] mt-1" />
              Goal-Based Investing: Planning investments to achieve financial milestones such as retirement, children’s 
              education or weddings, and wealth building for long-term abundance.         
            </li>

            <li className="flex gap-3 text-[#fff]">
              <BsSunFill className="text-[#af8a4a] mt-1" />
              Risk Management: Prioritizing investment risk mitigation over mere high returns by maintaining
              proper asset allocation and periodic portfolio rebalancing.           
              </li>
          </ul> */}
        </div>

      </div>
      </section>
    )
} 
export default Contactus;  
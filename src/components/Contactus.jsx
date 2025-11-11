import React, { useState } from "react";
import ContactImage from "../assets/contactus.jpg";

const Contactus = () => {
  const [contactData,setContactData] = useState({})

  const handleChange = (e) => {
    setContactData({...contactData,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactData,"Submitted Contact Data");
  }

  return (
    <section id="contact" className="bg-black py-16">
      {/* Heading */}
      <h2 className="text-center text-white text-2xl md:text-4xl font-bold">
        CONTACT
      </h2>

      {/* Underline */}
      <div className="w-16 h-1 bg-[#af8a4a] mx-auto mt-2 mb-10 rounded-full"></div>

      {/* GRID */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE — IMAGE CARD */}
        <div className="relative">
          {/* Golden Frame */}
          <div className="absolute -top-6 -left-6 w-64 h-64 border-t-8 border-l-8 border-[#af8a4a] rounded-lg"></div>

          <div className="bg-white rounded-xl shadow-xl p-4 relative z-10">
            <img
              src={ContactImage}
              alt="Contact"
              className="rounded-lg w-full h-125 object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE — FORM CARD */}
        <div className="bg-white rounded-xl p-8 shadow-xl">
          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Name */}
            <input
              type="text"
              required
              placeholder="Name"
              name="name"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#af8a4a] focus:border-[#af8a4a] outline-none"
            />

            {/* Mobile */}
            <input
              type="tel"
              required
              placeholder="Mobile"
              name="mobile"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#af8a4a] focus:border-[#af8a4a] outline-none"
            />

            {/* Email */}
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#af8a4a] focus:border-[#af8a4a] outline-none"
            />

            {/* Select Service */}
            <select
              required
              name="service"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-500 focus:ring-[#af8a4a] focus:border-[#af8a4a] outline-none"
            >
              <option value="">Select Service</option>
              <option>Money Management</option>
              <option>Investment Planning</option>
              <option>Retirement Planning</option>
              <option>Mutual Funds</option>
            </select>

            {/* Message */}
            <textarea
              required
              rows="4"
              placeholder="Message"
              name="message"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:ring-[#af8a4a] focus:border-[#af8a4a] outline-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#af8a4a] text-white font-semibold px-8 py-2 rounded-lg w-full md:w-auto hover:bg-[#9b7a40] transition cursor-pointer"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;

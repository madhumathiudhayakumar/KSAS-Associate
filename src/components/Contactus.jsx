import React, { useState } from "react";

import emailjs from '@emailjs/browser';
import ContactImage from "../assets/contact-image.jpg";
import { AiFillCheckCircle } from "react-icons/ai";

const Contactus = () => {
  const [contactData, setContactData] = useState({})
  const [errors, setErrors] = useState({
    mobile: "",
    email: "",
  })
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_kzhssal";
    const templateID = "template_6bh6ysj";
    const publicKey = "4m8p-p-kTmfG9R_Ue";

    const templateParams = {
      name: contactData.name,
      email: contactData.email,
      mobile: contactData.mobile,
      service: contactData.service,
      message: contactData.message,
      website_name: "Ebony Wealth Management",
    };
    const mobileError = /^\d{10}$/.test(contactData.mobile)
      ? ""
      : "Mobile number must be exactly 10 digits.";
    const emailError = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(contactData.email)
      ? ""
      : "Email must be a valid Gmail address (e.g., name@gmail.com).";

    setErrors({ mobile: mobileError, email: emailError });

    if (mobileError || emailError) return;
    setLoading(true);
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setLoading(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        }); setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
        setContactData({});
      }, (err) => {
        setLoading(false);
        alert("Failed to send message, please try again later.");
        console.log("FAILED...", err);
      });
  }

  return (
    <>
      {showSuccessMessage &&
        <div
          className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-auto   /* responsive width */ flex items-center gap-2 p-4 text-sm text-green-800 rounded-lg bg-[var(--brand-light)] text-center shadow-lg z-50"
          role="alert"
        >
          <AiFillCheckCircle size={20} />
          <p className="font-medium">
            Email sent successfully! <br className="sm:hidden" />
            <span className="font-normal">We’ve received your message and will get back to you soon.</span>
          </p>
        </div>
      }

      <section id="contact" className="bg-[var(--brand-dark)] py-16">
        {/* Heading */}
        <div data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <h2 className="text-center text-[var(--brand-light)] text-2xl md:text-4xl font-bold">
            CONTACT US
          </h2>

          {/* Underline */}
          <div className="w-16 h-1 bg-[var(--brand-gold)] mx-auto mt-2 mb-10 rounded-full"></div>

          {/* GRID */}
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* LEFT SIDE — IMAGE CARD */}
            <div className="relative">
              {/* Golden Frame */}
              <div className="absolute -top-6 -left-6 w-64 h-64 border-t-8 border-l-8 border-[var(--brand-gold)] rounded-lg"></div>

              <div className="bg-[var(--brand-light)] rounded-xl shadow-xl p-4 relative z-10">
                <img
                  src={ContactImage}
                  alt="Contact"
                  className="rounded-lg w-full h-125 object-cover"
                />
              </div>
            </div>

            {/* RIGHT SIDE — FORM CARD */}
            <div className="bg-[var(--brand-light)] rounded-xl p-8 shadow-xl">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={contactData.name || ""}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[var(--brand-gold)] focus:border-[var(--brand-gold)] outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Mobile"
                  name="mobile"
                  onChange={handleChange}
                  value={contactData.mobile || ""}
                  className={`w-full border ${errors.mobile ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-3 focus:ring-[var(--brand-gold)] focus:border-[var(--brand-gold)] outline-none`}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile}</p>
                )}
                <input
                  type="email"
                  required
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={contactData.email || ""}
                  className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-3 focus:ring-[var(--brand-gold)] focus:border-[var(--brand-gold)] outline-none`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
                <select
                  required
                  name="service"
                  onChange={handleChange}
                  value={contactData.service || ""}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-500 focus:ring-[var(--brand-gold)] focus:border-[var(--brand-gold)] outline-none"
                >
                  <option value="">Select Service</option>
                  <option>Mutual Fund</option>
                  <option>Financial Planner</option>
                  <option>Tax Planning</option>
                </select>
                <textarea
                  required
                  rows="4"
                  placeholder="Message"
                  name="message"
                  value={contactData.message || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:ring-[var(--brand-gold)] focus:border-[var(--brand-gold)] outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[var(--brand-gold)] text-[var(--brand-light)] font-semibold 
             px-8 py-2 rounded-lg w-full md:w-auto
             hover:bg-[var(--brand-gold-dark)] transition cursor-pointer
             flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;


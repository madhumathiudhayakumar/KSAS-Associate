import React, { useState } from "react";

import emailjs from "@emailjs/browser";
import ContactImage from "../assets/contact-image.jpeg";
import { AiFillCheckCircle } from "react-icons/ai";
import ownerImage from "../assets/owner.jpg";

const Contactus = () => {
  const [contactData, setContactData] = useState({});
  const [errors, setErrors] = useState({
    mobile: "",
    email: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_16do2qd";
    const templateID = "template_b4mu60l";
    const publicKey = "sGu-fOKmy5CJVkFOa";

    const templateParams = {
      name: contactData.name,
      email: contactData.email,
      mobile: contactData.mobile,
      service: contactData.service,
      message: contactData.message,
      website_name: "Fortuna Wealth Management",
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
    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        setLoading(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
        setContactData({});
      },
      (err) => {
        setLoading(false);
        alert("Failed to send message, please try again later.");
        console.log("FAILED...", err);
      }
    );
  };

  return (
    <>
      {showSuccessMessage && (
        <div
          className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-auto   /* responsive width */ flex items-center gap-2 p-4 text-sm text-green-800 rounded-lg bg-[var(--brand-light)] text-center shadow-lg z-50"
          role="alert"
        >
          <AiFillCheckCircle size={20} />
          <p className="font-medium">
            Email sent successfully! <br className="sm:hidden" />
            <span className="font-normal">
              We’ve received your message and will get back to you soon.
            </span>
          </p>
        </div>
      )}

      <section
        id="contact"
        className="bg-[var(--brand-dark)] text-[var(--brand-light)] py-20"
      >
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight relative inline-block">
              <span className="relative z-10">CONTACT US</span>
              <span
                className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-48 h-12 rounded-full opacity-10 blur-lg"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(216,146,106,0.35), rgba(96,111,97,0.2))",
                }}
              />
            </h2>
            <div className="mx-auto mt-4 w-20 h-1 bg-[var(--brand-gold)] rounded-full" />
          </div>

          {/* MAIN GRID: PROFILE | FORM  (info cards removed) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* LEFT — PROFILE CARD */}
            {/* PROFILE / IMAGE (left) */}
            <div className="flex flex-col h-full">
              <div className="w-full h-full rounded-2xl p-6 backdrop-blur-md bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] relative ">
                {/* ✨ Gold Outer Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(215,154,106,0.25)] to-transparent blur-2xl opacity-40 pointer-events-none"></div>

                {/* Profile Content */}
                <div className="relative z-10">
                  {/* Header Section */}
                  <div className="flex items-center gap-4">
                    <div className="h-24 w-20 rounded-full bg-red overflow-hidden  shadow-[0_0_12px_rgba(215,154,106,0.6)]">
                      <img
                        src={ownerImage}
                        alt="avatar"
                        className="w-24 h-27 object-cover mt-0"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[var(--brand-light)]">
                        S. Kalimuthu, M.Com
                      </h3>
                      <p className="text-sm text-gray-300">Financial Advisor</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mt-5 text-sm text-gray-300 space-y-1">
                    <p>Lakshmana Perumal Kovil Street</p>
                    <p>Rajapalayam – 626 117, Tamil Nadu</p>
                    <p>India</p>
                  </div>

                  {/* Contact */}
                  <div className="mt-5">
                    <div className="text-xs text-gray-400">
                      Mobile / WhatsApp
                    </div>
                    <a
                      href="https://wa.me/919080391749"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-1 text-[var(--brand-gold)] font-semibold"
                    >
                      +91 90803 91749
                    </a>
                  </div>

                  {/* Timings */}
                  <div className="mt-5">
                    <div className="text-xs text-gray-400">Office Timings</div>
                    <div className="text-gray-300">
                      Mon–Sat: 9:00 AM — 6:00 PM IST
                    </div>
                    <p className="mt-1 text-gray-400 italic text-xs">
                      For other timezones, send a WhatsApp message to schedule
                      the meeting accordingly.
                    </p>
                  </div>
                </div>
                {/* ✨ Motivational Quote Section */}
                <div
                  className="
        relative z-10 
        bg-[rgba(255,255,255,0.08)] 
        border border-[rgba(215,154,106,0.3)] 
        rounded-xl p-4 mt-6 
        shadow-inner
      "
                >
                  <p className="text-sm italic text-[var(--brand-light)] leading-relaxed text-center">
                    “Great financial decisions are built through smart planning,
                    discipline, and the right guidance.”
                  </p>
                </div>
                {/* Divider */}
                <div className="my-6 border-t border-[rgba(255,255,255,0.06)]"></div>

                {/* Buttons */}
                <div className="relative z-10 flex gap-3">
                  <a
                    href="https://wa.me/919080391749"
                    target="_blank"
                    className="
          flex-1 inline-flex items-center justify-center gap-2 
          bg-[var(--brand-gold)]
          text-[var(--brand-light)]
          py-3 rounded-lg font-semibold 
          hover:bg-[var(--brand-gold-dark)]
        "
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="flex">
              <div className="w-full h-full rounded-2xl p-6 backdrop-blur-md bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(215,154,106,0.25)] to-transparent blur-2xl opacity-40 pointer-events-none"></div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2">Get in touch</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Leave your details and we will contact you to schedule a
                    meeting.
                  </p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                      name="name"
                      value={contactData.name || ""}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                      className="w-full rounded-lg px-4 py-3 bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[var(--brand-gold)]"
                    />

                    <input
                      name="mobile"
                      value={contactData.mobile || ""}
                      onChange={handleChange}
                      placeholder="Mobile"
                      required
                      className={`w-full rounded-lg px-4 py-3 bg-white/5 border ${errors.mobile ? "border-red-500" : "border-white/10"
                        } text-white focus:ring-2 focus:ring-[var(--brand-gold)]`}
                    />
                    {errors.mobile && (
                      <p className="text-xs text-red-400">{errors.mobile}</p>
                    )}

                    <input
                      name="email"
                      value={contactData.email || ""}
                      onChange={handleChange}
                      placeholder="Email address"
                      required
                      className={`w-full rounded-lg px-4 py-3 bg-white/5 border ${errors.email ? "border-red-500" : "border-white/10"
                        } text-white focus:ring-2 focus:ring-[var(--brand-gold)]`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400">{errors.email}</p>
                    )}

                    <select
                      name="service"
                      value={contactData.service || ""}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg px-4 py-3 bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[var(--brand-gold)]"
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                      <option className="text-black">Equity</option>
                      <option className="text-black">F&O</option>
                      <option className="text-black">Mutual Fund </option>
                      <option className="text-black">
                        Insurance ( Term, Health, Motor.etc )
                      </option>
                      <option className="text-black">Bonds</option>
                      <option className="text-black">Others</option>
                    </select>

                    <textarea
                      name="message"
                      value={contactData.message || ""}
                      onChange={handleChange}
                      placeholder="Message"
                      rows={4}
                      required
                      className="w-full rounded-lg px-4 py-3 bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[var(--brand-gold)]"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-4 bg-[var(--brand-gold)] text-[var(--brand-light)] font-semibold px-6 py-3 rounded-lg hover:bg-[var(--brand-gold-dark)] cursor-pointer flex justify-center items-center"
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-[var(--brand-light)] border-t-transparent rounded-full animate-spin mx-auto" />
                      ) : (
                        "Submit Request"
                      )}
                    </button>
                  </form>
                </div>

                <div className="mt-4 text-xs text-gray-400">
                  We respect your privacy — contact details are used only to
                  schedule and follow up.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;

import React from "react";
import { BsSunFill } from "react-icons/bs";
import ownerImage from "../assets/owner.JPG";

const AboutMe = () => {
  return (
    <section className="py-16 bg-[var(--brand-dark)]">
      <div
        // data-aos="fade-up"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        className="text-center flex flex-col items-center relative rounded-xl transition-all duration-300"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-[var(--brand-light)]">
          ABOUT ME
        </h2>

        {/* Underline */}
        <div className="w-14 h-1 bg-[var(--brand-gold)] mx-auto mt-2 mb-6 rounded-full"></div>

        {/* --- Top Section --- */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-20 items-start px-4 md:px-6">
          {/* LEFT — IMAGE */}
          <div className="flex flex-col items-center md:items-center mt-10">
            <img
              src={ownerImage}
              alt="Profile"
              className="w-50 h-auto rounded-xl shadow-lg object-cover"
            />
            <h3 className="mt-6 text-xl font-semibold text-[var(--brand-light)] text-center w-150 md:text-center">
              Mr. S. KALIMUTHU, M.Com
            </h3>
            <div className="mt-4 space-y-3 text-[var(--brand-light)] w-100">
              {/* <div className="flex justify-between border-b border-[var(--brand-gold)] pb-0.5">
                <span className="font-semibold">Qualifications</span>
                <span>M.Com</span>
              </div> */}

              <div className="flex justify-between border-b border-[var(--brand-gold)] pb-0.5">
                <span className="font-semibold">Experience</span>
                <span>20+ years</span>
              </div>

              {/* <div className="flex justify-between border-b border-[var(--brand-gold)] pb-0.5">
                <span className="font-semibold">Availability</span>
                <span>MON – SAT (09:00 AM – 06:00 PM)</span>
              </div> */}
            </div>
          </div>

          {/* RIGHT — DETAILS */}
          <div className="text-left">
            {/* Bullet Points Section */}
            <div className="mt-6 text-[var(--brand-light)] leading-relaxed">
              <ul className="space-y-4 text-left">
                {[
                  "Completed M.Com in 2003.",
                  "Over 20 years of experience in Wealth Management, serving individuals and families in building, protecting, and growing their financial future.",
                  "Combines strong financial expertise with practical, client-focused guidance to deliver tailored solutions.",
                  "Specializes in Insurance, Fixed Deposits, Mutual Funds, and the Stock Market—including Equity and F&O.",
                  "Employs a disciplined approach to Portfolio Management, effective Money Management, and comprehensive Risk Management strategies.",
                  "Serves clients across the globe, reflecting long-term trust and relationships built through transparent, reliable, and personalized financial planning.",
                  "Committed to providing clear, customized financial solutions that empower clients to achieve sustainable wealth and financial stability.",
                ].map((text, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <BsSunFill className="text-[var(--brand-gold)] mt-1 flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

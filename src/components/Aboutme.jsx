import React from "react";
import { BsSunFill } from "react-icons/bs";


const AboutMe = () => {
  return (
    <section className="py-16 bg-[var(--brand-light)]">
<div
  data-aos="fade-down"
  data-aos-easing="linear"
  data-aos-duration="1500"
  className="text-center flex flex-col items-center relative pt-8 pb-6 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all duration-300"
>
    <h2 className="text-2xl md:text-4xl font-bold text-[var(--brand-dark)]">
      ABOUT ME
        </h2>

        {/* Underline */}
        <div className="w-14 h-1 bg-[var(--brand-gold)] mx-auto mt-2 mb-6 rounded-full"></div>


  {/* --- Top Section --- */}
<div className="container mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-20 items-start px-4 md:px-6">

  {/* LEFT — IMAGE */}
<div className="flex flex-col items-center md:items-start">
  <img
    src="https://icon-library.com/images/default-profile-icon/default-profile-icon-6.jpg"
    alt="Profile"
    className="w-100 h-auto rounded-xl shadow-lg object-cover"
  />

  {/* NAME BELOW THE IMAGE */}
  <h3 className="mt-10 px-25 text-xl font-semibold text-[var(--brand-dark)] text-center w-100 md:text-left">
    MR. S.KALIMUTHU
  </h3>
</div>

  {/* RIGHT — DETAILS */}
  <div className="text-left">
  <div className="mt-0 space-y-3 text-[var(--brand-dark)] w-100">

    <div className="flex justify-between border-b border-[var(--brand-gold)] pb-0.5">
      <span className="font-semibold">Qualifications</span>
      <span >M.Com</span>
    </div>

    <div className="flex justify-between border-b border-[var(--brand-gold)] pb-0.5">
      <span className="font-semibold">Experience</span>
      <span>20+ years</span>
    </div>

    <div className="flex justify-between border-b border-[var(--brand-gold)] pb-0.5">
      <span className="font-semibold">Availability</span>
      <span>MON – SAT (09:00 AM – 06:00 PM)</span>
    </div>

  </div>

    {/* Bullet Points Section */}
<div className="mt-6 text-[var(--brand-dark)] leading-relaxed">
  <ul className="space-y-4 text-left">
    {[
      "Completed M.Com in 2003.",
      "Over 20 years of experience in Wealth Management, serving individuals and families in building, protecting, and growing their financial future.",
      "Combines strong financial expertise with practical, client-focused guidance to deliver tailored solutions.",
      "Specializes in Insurance, Fixed Deposits, Mutual Funds, and the Stock Market—including Equity and F&O.",
      "Employs a disciplined approach to Portfolio Management, effective Money Management, and comprehensive Risk Management strategies.",
      "Serves clients across the globe, reflecting long-term trust and relationships built through transparent, reliable, and personalized financial planning.",
      "Committed to providing clear, customized financial solutions that empower clients to achieve sustainable wealth and financial stability."
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

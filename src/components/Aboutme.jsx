import React from "react";

const Aboutme = () => {
  return (
    <section className="py-16  bg-[var(--brand-light)]">
      {/* Heading */}
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-center px-6 relative bg-[var(--brand-light)] pt-8 pb-6 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all duration-300">
        <h2 className="text-2xl md:text-4xl font-bold text-[var(--brand-dark)]">
          ABOUT ME
        </h2>

        {/* Underline */}
        <div className="w-14 h-1 bg-[var(--brand-gold)] mx-auto mt-2 mb-6 rounded-full"></div>
        <div className="px-4 md:px-8 pb-8">
          <div className="mx-auto text-left space-y-4">

            <p className="text-md text-[var(--brand-dark)] leading-relaxed text-left">
              With over <span className="font-semibold text-[var(--brand-dark)]">15 years of experience</span> in the field of <span>money management,</span> I specialize in helping
              individuals and families achieve financial stability and growth. My expertise covers a
              wide range of investment and protection solutions, including <span className="font-semibold text-[var(--brand-dark)]">intraday trading,
                term insurance, health insurance, mutual funds, bonds, fixed deposits, gold investments,</span>
              and <span className="font-semibold text-[var(--brand-dark)]">real estate planning.</span>
            </p>

            <p className="text-md text-[var(--brand-dark)] leading-relaxed text-left">
              I believe in a balanced approach to wealth creation—focusing on both <span className="font-semibold text-[var(--brand-dark)]">risk management
                and long-term growth.</span> My goal is to provide clear, practical, and personalized financial
              strategies that help clients make informed decisions and build a secure financial future.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
};
export default Aboutme;
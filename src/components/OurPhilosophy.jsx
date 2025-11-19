import React from "react";
import fortunaImage from "../assets/logo.png";

const OurPhilosophy = () => {
  return (
        // <section className="py-16  bg-[var(--brand-light)]">
<section className="py-16 bg-[var(--brand-light)] ">
  <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className="text-center px-6 relative bg-[var(--brand-light)] pt-8 pb-6 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all duration-300">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE IMAGE */}
    <div className="relative">
      <img
        src={fortunaImage}
        alt="Fortuna Goddess"
        className="rounded-xl shadow-xl w-50 h-50"
      />
      {/* <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[var(--brand-gold)]/30 rounded-xl -z-10"></div> */}
    </div>

    {/* RIGHT SIDE CONTENT */}
    <div className="text-[var(--brand-dark)]">
      <p className="italic text-center md:text-left text-[var(--brand-gray)] mb-3">
        "Be wise. Be disciplined. Build your luck."
      </p>

      <h2 className="text-3xl font-bold mb-6 text-left md:text-left">
        What Does Fortuna Mean?
      </h2>

      <div className="w-16 h-1 bg-[var(--brand-gold)] mb-6 md:mx-0 mx-auto"></div>

      <p className="mb-4 text-left md:text-left">
        <strong>Fortuna</strong> is the ancient Roman goddess of 
        <strong> prosperity, destiny, and good fortune</strong>—a timeless reminder
        that life’s greatest rewards come to those who are prepared.
        She symbolizes the belief that good luck is <em>not random</em> but the
        result of clarity, effort, and wise choices.
      </p>

      <p className="mb-4 text-left md:text-left">
        At <strong>Fortuna Wealth Management</strong>, my goal is to provide
        clear, practical, and personalized financial planning.  
        We embrace this philosophy.  
        We believe that <strong>Knowledge, Discipline, and Patience bring Good Luck</strong>—the
        qualities that transform opportunities into long-term success.
      </p>

      <p className="mb-4 text-left md:text-left">
        Like the guidance of the goddess herself, my approach helps you navigate 
        your financial journey with confidence, purpose, and strategy.
      </p>

      <p className="font-semibold text-left md:text-left">
        <strong>Fortuna:</strong> Where wisdom meets wealth, and preparation creates prosperity.
      </p>
    </div>

  </div>
  </div>
</section>


  )
}
export default OurPhilosophy;
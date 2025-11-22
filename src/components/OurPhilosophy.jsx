import React from "react";
import fortunaImage from "../assets/fortuna-img.jpeg";

const OurPhilosophy = () => {
  return (
    // <section className="py-16  bg-[var(--brand-light)]">
    <section className="py-6 bg-[var(--brand-light)]">
      <div
        // data-aos="fade-up"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        className="text-center px-6 relative bg-[var(--brand-light)] pt-8 pb-6 rounded-xl transition-all duration-300"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE IMAGE */}
          <div className="relative">
            <img
              src={fortunaImage}
              alt="Fortuna Goddess"
              className="rounded-xl shadow-xl "
            />
            {/* <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[var(--brand-gold)]/30 rounded-xl -z-10"></div> */}
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="text-[var(--brand-dark)]">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold ">About Us</h2>
              <p className="italic text-[var(--brand-gray)] mb-3">
                "Be wise. Be disciplined. Build your luck."
              </p>
            </div>
            {/* <div className="w-16 h-1 bg-[var(--brand-gold)] mt-2 mb-6 md:mx-0 mx-auto"></div> */}
            <p className="mb-4 text-left md:text-left">
              <strong>Fortuna</strong> is the ancient Roman goddess of
              <strong> prosperity, destiny, and good fortune</strong>—a timeless
              reminder that life’s greatest rewards come to those who are
              prepared. She symbolizes the belief that good luck is{" "}
              <em>not random</em> but the result of clarity, effort, and wise
              choices.
            </p>

            <p className="mb-4 text-left md:text-left">
              At <strong>Fortuna Wealth Management</strong>, my goal is to
              provide clear, practical, and personalized financial planning. We
              embrace this philosophy. We believe that{" "}
              <strong>
                Knowledge, Discipline, and Patience bring Good Luck
              </strong>
              —the qualities that transform opportunities into long-term
              success.
            </p>

            <p className="mb-4 text-left md:text-left">
              Like the guidance of the goddess herself, my approach helps you
              navigate your financial journey with confidence, purpose, and
              strategy.
            </p>

            <p className="text-left md:text-left mb-4">
              <strong>Fortuna:</strong> Where wisdom meets wealth, and
              preparation creates prosperity.
            </p>

            <p className="mb-4 text-left md:text-left">
              At <strong>Fortuna Wealth Management,</strong> we are dedicated to
              helping you build a healthy and mindful relationship with money.
              Our comprehensive services cover end-to-end money management and
              investment solutions designed to help you spend wisely, save
              strategically, and invest purposefully. Acting as your lifelong
              partner in financial growth, we guide you on the journey towards
              financial independence and long-term wealth creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurPhilosophy;

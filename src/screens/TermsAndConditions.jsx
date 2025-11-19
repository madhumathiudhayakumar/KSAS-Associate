import React from "react";
import { Link } from "react-router-dom";
import { BsSunFill } from "react-icons/bs";
import ScrollToTopButton from "../components/ScrollToTopButton";

const TermsAndCondition = () => {
  return (
    <div>
      <ScrollToTopButton />
      <div className="bg-[var(--brand-light)] text-[var(--brand-dark)]">
        {/* ======= Header Banner ======= */}
        {/* <section className="relative bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-light)] h-56 flex items-center shadow-md">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-[var(--brand-dark)] tracking-wide">
              Privacy Policy
            </h1>
            <nav className="mt-2 text-sm text-[var(--brand-dark)]">
              <Link to="/" className="hover:text-[var(--brand-gold)] font-medium">
                Home
              </Link>{" "}
              / <span className="text-[var(--brand-light)] font-semibold">Privacy Policy</span>
            </nav>
          </div>

          <div className="hidden md:block">
            <img
              src="https://niscpub.com/images/1403/08/30/privacy-policy_2.jpg"
              alt="Privacy Illustration"
              className="w-52 h-auto object-contain drop-shadow-md"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-gold)]/50 to-[var(--brand-light)]/30"></div>
      </section> */}

        {/* ======= Main Content ======= */}
        <section className="py-16 px-6 md:px-20 lg:px-32">
          <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="max-w-5xl mx-auto bg-[var(--brand-light)]/60 backdrop-blur-sm rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)] p-8 md:p-12 leading-relaxed">

            <blockquote className="text-3xl font-bold text-[var(--brand-dark)] mb-6 border-l-4 border-[var(--brand-gold)] pl-4">
              Terms and Conditions
            </blockquote>

            <p className="text-[var(--brand-dark)] mb-6">
              Welcome to <span className="text-[var(--brand-dark)] font-bold">Fortuna Wealth Management System</span> (“we,” “our,” “us”). By accessing or using our platform,
              services, or submitting your information to Fortuna Wealth Management, you agree to comply with and
              be bound by the following Terms and Conditions. Please read them carefully before proceeding.
            </p>

            <h2 className="text-xl font-semibold text-[var(--brand-gold)] mt-8 mb-4 tracking-wide">1. Definitions</h2>
            <ul className="space-y-3">
              {[
                <>
                  <strong>Client / User:</strong> Any individual or entity that uses the services of Fortuna Wealth Management.
                </>,
                <>
                  <strong>Services:</strong> Financial advisory, investment planning, insurance guidance, and other wealth management-related offerings.
                </>,
                <>
                  <strong>Platform:</strong> The Fortuna Wealth Management System website, mobile application, and all digital interfaces associated with our services.
                </>
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-[var(--brand-gold)] mt-8 mb-4 tracking-wide">2. Scope of Services</h2>
            <p className="mb-2">Fortuna Wealth Management provides:</p>
            <ul className="space-y-3">
              {[
                "Financial and investment advisory services.",
                "Wealth management Financial planning, including mutual funds, bonds, fixed deposits, insurance, etc guidance.",
                "Risk profiling, goal tracking, and portfolio management.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">All recommendations are <strong>based on the information provided by the client</strong> and should not be treated as guaranteed returns or investment advice for speculative purposes.</p>

            <h2 className="text-xl font-semibold text-[var(--brand-gold)] mt-8 mb-4 tracking-wide">3. Eligibility</h2>
            <p className="mb-2">To use our services, you must:</p>
            <ul className="space-y-3">
              {[
                <>
                  Be at least <strong>18 years of age.</strong>
                </>,
                <>
                  Provide <strong>accurate and complete information</strong> during registration and KYC processes.
                </>,
                <>
                  Comply with all applicable financial and tax laws in India.</>
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-[var(--brand-gold)] mt-8 mb-4 tracking-wide">4. Client Responsibilities</h2>
            <p className="mb-2">By using our services, the client agrees to:</p>
            <ul className="space-y-3">
              {[
                "Provide truthful, current, and complete information.",
                "Notify us of any changes in financial status, employment, or investment preferences.",
                "Understand that all investment decisions carry market risks, and past performance is not indicative of future results."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-[var(--brand-gold)] mt-8 mb-4 tracking-wide">5. Confidentiality and Data Protection</h2>
            <ul className="space-y-3">
              {[
                <>
                  All personal, financial, and contact information shared with Fortuna Wealth Management will remain <strong>strictly confidential.</strong>
                </>,
                <>
                  Data will be used <strong>solely for financial analysis, planning, and communication</strong> related to the client’s account.
                </>
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-[var(--brand-gold)] mt-8 mb-4 tracking-wide">6. Risk Disclosure</h2>
            <ul className="space-y-3">
              {[
                <>
                  Investments in securities, mutual funds, bonds, and other financial instruments are subject to <strong>market risks.</strong>
                </>,
                "Fortuna Wealth Management does not guarantee any fixed returns or capital protection.",
                "The client acknowledges that all investment decisions are made at their own discretion and risk."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-[var(--brand-gold)] mt-8 mb-4 tracking-wide">7. Limitation of Liability</h2>
            <ul className="space-y-3">
              {[
                "Fortuna Wealth Management shall not be held liable for any direct or indirect losses, damages, or claims arising from:",
                "Market fluctuations",
                "Third-party platform failures",
                "Client misrepresentation or delay in providing information.",
                "Force Majeure events (natural disasters, system failures, etc.)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-[var(--brand-gold)] mt-8 mb-4 tracking-wide">8. Termination of Services</h2>
            <ul className="space-y-3">
              {[
                "Either party may terminate the engagement by providing written notice.",
                "Fortuna Wealth Management reserves the right to suspend or terminate services for non-compliance, misuse, or fraudulent activity."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-[var(--brand-gold)] mt-8 mb-4 tracking-wide">9. Amendments</h2>
            <p>
              Fortuna Wealth Management reserves the right to <strong>update or modify</strong> these Terms and Conditions at any time.
              Clients will be notified of major updates through email or official communication channels.    </p>
          </div>
        </section>
      </div>
    </div>
  );
}
export default TermsAndCondition;

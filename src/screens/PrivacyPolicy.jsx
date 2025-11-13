import React from "react";
import { Link } from "react-router-dom";
import { BsSunFill } from "react-icons/bs";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function PrivacyPolicy() {
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
        <div className="max-w-5xl mx-auto bg-[var(--brand-light)]/60 backdrop-blur-sm rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)] p-8 md:p-12 leading-relaxed">
          {/* Quote */}
          <blockquote className="text-lg italic text-[var(--brand-dark)] mb-6 border-l-4 border-[var(--brand-gold)] pl-4">
            “Trust is the currency of wealth management. At Ebony, we safeguard
            both — your assets and your confidence.”
          </blockquote>

          <p className="text-[var(--brand-dark)] mb-6">
            At <span className="font-semibold text-[var(--brand-dark)]">Ebony Wealth Management</span>, 
            we value your trust above all else. Protecting your personal and financial 
            information is our highest priority. This Privacy Policy outlines how we 
            collect, use, share, and safeguard your information in accordance with 
            SEBI, RBI, and AMFI guidelines.
          </p>

          {/* Helper function style */}
          {[
            {
              title: "A. Personal Information",
              items: [
                "Full Name, Date of Birth, Gender",
                "Contact Details (Address, Email ID, Mobile Number)",
                "Identification Details",
              ],
            },
            {
              title: "B. Financial Information",
              items: [
                "Income details, investment portfolio, and transaction records",
                "Bank account details for investment, redemption, or advisory services",
                "Risk profile and investment preferences",
              ],
            },
            {
              title: "C. KYC & Compliance Data",
              items: ["Proofs submitted for Know Your Customer (KYC) verification"],
            },
          ].map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-xl font-semibold text-[var(--brand-gold)] mt-8 mb-4 tracking-wide">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Other sections */}
          <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10 mb-3">
            2. How We Use Your Information
          </h2>
          <p className="mb-3">We use your information to:</p>
          <ul className="space-y-3">
            {[
              "Provide financial planning, investment advisory, and wealth management services",
              "Execute and track investment or insurance transactions",
              "Conduct KYC verification and comply with SEBI, AMFI, and RBI guidelines",
              "Communicate portfolio insights, reports, and updates",
              "Enhance user experience and website functionality",
              "Detect and prevent fraud or unauthorized transactions",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10 mb-3">
            3. Sharing and Disclosure of Information
          </h2>
          <p className="mb-3">
            We do not sell or rent your personal information. However, to ensure compliance and seamless services, we may share data with:
          </p>
          <ul className="space-y-3">
            {[
              "Regulatory Authorities such as SEBI, AMFI, IRDAI, RBI, Income Tax Department, etc.",
              "Authorized Partners — Mutual fund houses, registrars, banks, depositories, and technology providers",
              "Professional Advisors — Auditors, compliance consultants, or legal advisors under confidentiality agreements",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10 mb-3">
            4. Data Retention
          </h2>
          <ul className="space-y-3">
            {[
              "Fulfill contractual obligations and comply with regulations",
              "Meet legal or taxation requirements",
              "Resolve disputes or enforce agreements",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10 mb-3">
            5. Your Rights
          </h2>
          <ul className="space-y-3">
            {[
              "Access and review your personal information",
              "Request correction or deletion of outdated data",
              "Withdraw consent for marketing communications",
              "File grievances or complaints regarding data handling",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-3">
            To exercise these rights, please contact our compliance team through the contact section below.
          </p>

          <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10 mb-3">
            6. Updates to this Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in regulations or our services. The latest version will always be available on our website. Continued use of our services implies acceptance of the updated terms.
          </p>
        </div>
      </section>
    </div>
    </div>
  );
}

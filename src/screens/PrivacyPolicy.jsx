import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsSunFill } from "react-icons/bs";
import ScrollToTopButton from "../components/ScrollToTopButton";

const PrivacyPolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <section className="py-16 px-6 md:px-20 lg:px-32 ">
          <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="max-w-5xl mx-auto bg-[var(--brand-light)] backdrop-blur-sm rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)] p-8 md:p-12 leading-relaxed">
            {/* Quote */}
            <blockquote className="text-3xl font-bold text-[var(--brand-dark)] mb-6  pl-4">
              Privacy Policy
            </blockquote>
            <blockquote className="text-lg italic text-[var(--brand-dark)] mb-6 border-l-4 border-[var(--brand-gold)] pl-4">
              “Trust is the currency of wealth management. At Fortuna, we safeguard both — your assets and your confidence”
            </blockquote>

            <p className="text-[var(--brand-dark)] mb-6">
              At <span className="font-semibold text-[var(--brand-dark)]">Fortuna Wealth Management</span>, we value your trust above all else.
              Protecting your personal and financial information is our highest priority.
              This Privacy Policy outlines how we collect, use, share, and safeguard your information
              when you interact with our services, in accordance with applicable laws and regulations,
              including those prescribed by <span className="font-semibold text-[var(--brand-dark)]">SEBI, RBI </span>
              and <span className="font-semibold text-[var(--brand-dark)]">AMFI.</span>
            </p>

            {[
              {
                title: "A. Personal Information",
                items: [
                  "Full Name, Date of Birth, Gender",
                  "Contact Details (Address, Email ID, Mobile Number)",
                  "Identification Details ",
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

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="space-y-3">
              {[
                <>
                  Provide <span className="font-semibold text-[var(--brand-dark)]">financial planning, investment advisory, and wealth management</span> services
                </>,
                "Execute and track investment or insurance transactions",
                <>
                  Conduct KYC verification and comply with <span className="font-semibold text-[var(--brand-dark)]">SEBI, AMFI, and RBI</span> guidelines
                </>,
                "Communicate portfolio insights, reports, and updates",
                "Enhance user experience and website functionality",
                "Detect and prevent fraud, unauthorized transactions, or data misuse",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">Your information helps us deliver personalized, compliant, and efficient financial services.</p>

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10 mb-3">
              3. Sharing and Disclosure of Information
            </h2>
            <p className="mb-3">
              We <span className="font-semibold text-[var(--brand-dark)]">do not sell or rent</span> your personal information. However, to provide seamless services and regulatory compliance, we may share data with:            </p>
            <ul className="space-y-3">
              {[
                <>
                  <span className="font-semibold text-[var(--brand-dark)]">Regulatory Authorities:</span> SEBI, AMFI, IRDAI, RBI, Income Tax Department, etc.
                </>,
                <>
                  <span className="font-semibold text-[var(--brand-dark)]">Authorized Partners:</span> Mutual fund houses, registrars, banks, depositories, and technology providers
                </>,
                <>
                  <span className="font-semibold text-[var(--brand-dark)]">Professional Advisors:</span> Auditors, compliance consultants, or legal advisors under confidentiality agreements
                </>
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">All partners and vendors are contractually obligated to maintain strict confidentiality and data protection standards.</p>

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10 mb-3">
              4. Data Retention
            </h2>
            <p className="mb-3">Your data will be retained for as long as:</p>
            <ul className="space-y-3">
              {[
                "Required to fulfill our contractual obligations",
                "Mandated by regulatory or tax laws",
                "Necessary to resolve disputes or enforce agreements",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">After the retention period, we securely delete or anonymize your data in accordance with industry best practices.</p>

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10 mb-3">
              5. Your Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="space-y-3">
              {[
                "Access and review your personal information",
                "Request correction or deletion of inaccurate or outdated data",
                "Withdraw consent for marketing communications",
                "File a grievance or complaint regarding data handling practices",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-3">
              To exercise these rights, please contact us through the details below.
            </p>

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10 mb-3">
              6. Updates to this Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect regulatory changes or service
              enhancements. The latest version will always be available on our website. Continued use
              of our services constitutes acceptance of the updated policy.            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
export default PrivacyPolicy;

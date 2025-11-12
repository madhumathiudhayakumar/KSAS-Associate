import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-800">
      {/* ======= Header Banner ======= */}
      <section className="relative bg-gradient-to-r from-[#e8d3a3] to-[#fdf5e6] h-56 flex items-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-black">Privacy Policy</h1>
            <nav className="mt-2 text-sm text-gray-700">
              <Link to="/" className="hover:text-[#af8a4a]">
                Home
              </Link>{" "}
              / <span className="text-[#af8a4a]">Privacy Policy</span>
            </nav>
          </div>

          <div className="hidden md:block">
            <img
              src="/privacy-banner.png"
              alt="Privacy Illustration"
              className="w-48 h-auto object-contain"
            />
          </div>
        </div>

        {/* Optional overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8d3a3]/60 to-[#ffffff]/20"></div>
      </section>

      {/* ======= Main Content ======= */}
      <section className="py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-5xl mx-auto px-6 py-12 leading-relaxed">
          {/* Quote */}
          <p className="text-lg italic text-gray-700 mb-6 border-l-4 border-[#af8a4a] pl-4">
            “Trust is the currency of wealth management. At Ebony, we safeguard
            both — your assets and your confidence.”
          </p>

          <p className="text-gray-700 mb-6">
            At <span className="font-semibold text-gray-900">Ebony Wealth Management</span>, we value your trust above all else. Protecting your personal and financial information is our highest priority. This Privacy Policy outlines how we collect, use, share, and safeguard your information when you interact with our services, in accordance with applicable laws and regulations, including those prescribed by SEBI, RBI, and AMFI.
          </p>

          {/* Section 1 */}
          <h2 className="text-xl font-semibold text-[#af8a4a] mt-8 mb-3">
            A. Personal Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full Name, Date of Birth, Gender</li>
            <li>Contact Details (Address, Email ID, Mobile Number)</li>
            <li>Identification Details</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#af8a4a] mt-8 mb-3">
            B. Financial Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Income details, investment portfolio, and transaction records</li>
            <li>Bank account details for investment, redemption, or advisory services</li>
            <li>Risk profile and investment preferences</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#af8a4a] mt-8 mb-3">
            D. KYC & Compliance Data
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proofs submitted for Know Your Customer (KYC) verification</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
            2. How We Use Your Information
          </h2>
          <p className="mb-3">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide financial planning, investment advisory, and wealth management services</li>
            <li>Execute and track investment or insurance transactions</li>
            <li>Conduct KYC verification and comply with SEBI, AMFI, and RBI guidelines</li>
            <li>Communicate portfolio insights, reports, and updates</li>
            <li>Enhance user experience and website functionality</li>
            <li>Detect and prevent fraud, unauthorized transactions, or data misuse</li>
          </ul>
          <p className="mt-3">
            Your information helps us deliver personalized, compliant, and efficient financial services.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
            3. Sharing and Disclosure of Information
          </h2>
          <p className="mb-3">
            We do not sell or rent your personal information. However, to provide seamless services and ensure regulatory compliance, we may share data with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Regulatory Authorities: SEBI, AMFI, IRDAI, RBI, Income Tax Department, etc.</li>
            <li>Authorized Partners: Mutual fund houses, registrars, banks, depositories, and technology providers</li>
            <li>Professional Advisors: Auditors, compliance consultants, or legal advisors under confidentiality agreements</li>
          </ul>
          <p className="mt-3">
            All partners and vendors are contractually obligated to maintain strict confidentiality and data protection standards.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
            4. Data Retention
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Required to fulfill our contractual obligations</li>
            <li>Mandated by regulatory or tax laws</li>
            <li>Necessary to resolve disputes or enforce agreements</li>
          </ul>
          <p className="mt-3">
            After the retention period, we securely delete or anonymize your data in accordance with industry best practices.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
            5. Your Rights
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access and review your personal information</li>
            <li>Request correction or deletion of inaccurate or outdated data</li>
            <li>Withdraw consent for marketing communications</li>
            <li>File a grievance or complaint regarding data handling practices</li>
          </ul>
          <p className="mt-3">
            To exercise these rights, please contact us through the details below.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
            6. Updates to this Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically to reflect regulatory changes or service enhancements. The latest version will always be available on our website. Continued use of our services constitutes acceptance of the updated policy.
          </p>
        </div>
      </section>
    </div>
  );
}

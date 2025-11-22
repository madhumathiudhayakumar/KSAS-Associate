import React from "react";
import {
  CurrencyRupeeIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const AboutUsSection = () => {
  return (
    <section className="relative bg-[var(--brand-dark)] text-[var(--brand-light)] py-16 overflow-hidden">
      {/* Background diagonal shape */}
      <div className="absolute inset-0 bg-[var(--brand-dark)] transform -skew-y-3 origin-top-left"></div>

      {/* Content */}
      <div
        // data-aos="fade-up"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        className="relative container mx-auto px-6 md:px-12"
      >
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Right Side Info Grid */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <CurrencyRupeeIcon className="w-6 h-6 text-[var(--brand-gold)]" />
              <h3 className="font-semibold text-lg">Vision</h3>
            </div>
            <p className="text-[var(--brand-light)] text-sm leading-relaxed">
              As India progresses towards a $10 Trillion economy, our vision is
              to ensure sufficient financial literacy and financial inclusion
              for normal retail investors to tap into this growth.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <UsersIcon className="w-6 h-6 text-[var(--brand-gold)]" />
              <h3 className="font-semibold text-lg">Mission</h3>
            </div>
            <p className="text-[var(--brand-light)] text-sm leading-relaxed">
              Our mission is to assist you with the right choice and mix of
              investment products relevant to your financial goals, aligned to
              your ability and necessity for risk, with proper porfolio-level
              risk and returns management
            </p>
          </div>
          {/* Overview */}
          {/* <div>
              <div className="flex items-center gap-3 mb-2">
                <ClipboardDocumentListIcon className="w-6 h-6 text-[#af8a4a]" />
                <h3 className="font-semibold text-lg">Overview</h3>
              </div>
              <ul className="text-light-300 text-sm list-disc ml-6 space-y-1">
                <li>AMFI-registered MFDs (ARN: 194729)</li>
                <li>SEBI NISM V-A Certified</li>
              </ul>
            </div> */}

          <div>
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheckIcon className="w-6 h-6 text-[var(--brand-gold)]" />
              <h3 className="font-semibold text-lg">Our Solution</h3>
            </div>
            <ul className="text-[var(--brand-light)] text-sm list-disc ml-6 space-y-1">
              <li>Understand your current financial health</li>
              <li>Identify your financial goals and timeframes</li>
              <li>
                Work with you to design a customized plan to achieve your goals
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

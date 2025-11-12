import {
  CurrencyRupeeIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const AboutUsSection = () => {
  return (
    <section className="relative bg-black text-white py-16 overflow-hidden">
      {/* Background diagonal shape */}
      <div className="absolute inset-0 bg-black transform -skew-y-3 origin-top-left"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* About Us Text */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              At Ebony Wealth Management, we are dedicated to helping you build a healthy and mindful
              relationship with money. Our comprehensive services cover end-to-end money management and
              investment solutions designed to help you spend wisely, save strategically,
              and invest purposefully. Acting as your lifelong partner in financial growth,
              we guide you on the journey towards financial independence and long-term wealth creation.
            </p>
            {/* <button className="border border-[#af8a4a] text-[#af8a4a] hover:bg-[#af8a4a] hover:text-black px-6 py-2 rounded-full font-semibold transition">
              ABOUT US →
            </button> */}
          </div>

          {/* Right Side Info Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <CurrencyRupeeIcon className="w-6 h-6 text-[#af8a4a]" />
                <h3 className="font-semibold text-lg">Vision</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                As India progresses towards a $10 Trillion economy, our vision is
                to ensure sufficient financial literacy and financial inclusion
                for normal retail investors to tap into this growth.
              </p>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <UsersIcon className="w-6 h-6 text-[#af8a4a]" />
                <h3 className="font-semibold text-lg">Mission</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our mission is to assist you with the right choice and mix of
                investment products aligned to your financial goals, risk
                appetite, and time horizons.
              </p>
            </div>

            {/* Overview */}
            {/* <div>
              <div className="flex items-center gap-3 mb-2">
                <ClipboardDocumentListIcon className="w-6 h-6 text-[#af8a4a]" />
                <h3 className="font-semibold text-lg">Overview</h3>
              </div>
              <ul className="text-gray-300 text-sm list-disc ml-6 space-y-1">
                <li>AMFI-registered MFDs (ARN: 194729)</li>
                <li>SEBI NISM V-A Certified</li>
              </ul>
            </div> */}

            {/* Our Solution */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheckIcon className="w-6 h-6 text-[#af8a4a]" />
                <h3 className="font-semibold text-lg">Our Solution</h3>
              </div>
              <ul className="text-gray-300 text-sm list-disc ml-6 space-y-1">
                <li>Understand your current financial health</li>
                <li>Identify your financial goals and timeframes</li>
                <li>
                  Work with you to design a customized plan to achieve your
                  goals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

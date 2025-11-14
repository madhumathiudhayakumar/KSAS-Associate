import { GiMoneyStack } from "react-icons/gi";
import { FaChartPie } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const Services = () => {
  return (
    <section className="py-16 bg-[var(--brand-light)]">
      {/* Heading */}
      <div className="text-center px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-[var(--brand-dark)]">
          SERVICES
        </h2>

        {/* Underline */}
        <div className="w-14 h-1 bg-[var(--brand-gold)] mx-auto mt-2 mb-6 rounded-full"></div>

        <p className="text-[var(--brand-dark)] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          With Ebony Wealth Management, your financial aspirations become achievable goals,
          and your wealth journey becomes structured, secure, and sustainable.
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto mt-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <div className="bg-[var(--brand-dark)] text-[var(--brand-light)] rounded-xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <GiMoneyStack className="text-[var(--brand-gold)] text-3xl" />
            <h3 className="text-xl font-semibold">Money Management</h3>
          </div>

          <ul className="space-y-3 text-[var(--brand-light)] leading-relaxed text-base">
            <li className="flex gap-3">
              <BsSunFill className="text-[var(--brand-gold)] mt-1 flex-shrink-0" />
              Monthly Budgeting Assistance: Helping you save more while spending mindfully.            </li>

            <li className="flex gap-3">
              <BsSunFill className="text-[var(--brand-gold)] mt-1 flex-shrink-0" />
              Financial Health Checks: Offering spend analytics to understand your current 
              financial standing.            </li>

            <li className="flex gap-3">
              <BsSunFill className="text-[var(--brand-gold)] mt-1 flex-shrink-0" />
              Debt Guidance: Assisting you in managing costly loans and focusing on increasing your 
              savings.            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-[var(--brand-dark)] text-[var(--brand-light)] rounded-xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <FaChartPie className="text-[var(--brand-gold)] text-3xl" />
            <h3 className="text-xl font-semibold">Investment Services</h3>
          </div>

          <ul className="space-y-3 text-[var(--brand-light)] leading-relaxed text-base">
            <li className="flex gap-3">
              <BsSunFill className="text-[var(--brand-gold)] mt-1 flex-shrink-0" />
              Goal-Based Investing: Planning investments to achieve financial milestones such 
              as retirement, children’s education or weddings, and wealth building for long-term abundance.
            </li>

            <li className="flex gap-3">
              <BsSunFill className="text-[var(--brand-gold)] mt-1 flex-shrink-0" />
              Risk Management: Prioritizing investment risk mitigation over mere high returns by 
              maintaining proper asset allocation and periodic portfolio rebalancing.
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
}
export default Services;

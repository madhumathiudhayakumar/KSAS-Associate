import { FaBuffer, FaSuitcase, FaSearch } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineInsurance, AiOutlineFund } from "react-icons/ai";
import { MdOutlineOutbond } from "react-icons/md";

const stats = [
  { value: "400+", label: "Happy Clients", icon: <BsEmojiSmile /> },
  { value: 3, label: "Insurance", icon: <AiOutlineInsurance /> },
  { value: 10, label: "Mutual Fuds", icon: <AiOutlineFund /> },
  { value: 3, label: "Bonds Platform", icon: <MdOutlineOutbond /> },
];

const StatsSection = () => {
  return (
    <section className="py-10 bg-[var(--brand-light)]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="relative bg-[var(--brand-light)] text-[var(--brand-light)] text-center pt-8 pb-6 rounded-xl shadow-2xl transition-all duration-300"
          >
            {/* Floating Icon Circle */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[var(--brand-light)] text-[var(--brand-gold)] w-12 h-12 flex items-center justify-center rounded-full shadow-md text-2xl font-bold">
              {item.icon}
            </div>
            <h2 className="text-4xl font-bold text-[var(--brand-dark)]">{item.value}</h2>
            <p className="text-[var(--brand-gray)] mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default StatsSection;

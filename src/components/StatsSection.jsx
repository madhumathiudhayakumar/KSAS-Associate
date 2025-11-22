import { useEffect, useState } from "react";

import { FaBuffer, FaSuitcase, FaSearch } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineInsurance, AiOutlineFund } from "react-icons/ai";
import { MdOutlineOutbond } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";


const stats = [
  { value: 400, label: "Happy Clients", icon: <BsEmojiSmile /> },
  { value: 3, label: "Insurance", icon: <FaHandHoldingUsd /> },
  { value: 10, label: "Mutual Fuds", icon: <AiOutlineFund /> },
  { value: 2, label: "Bonds Platform", icon: <MdOutlineOutbond /> },
];

const StatsSection = () => {

  const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const totalFrames = Math.round(duration / 16); // 60fps smooth
      const increment = end / totalFrames;

      const counter = setInterval(() => {
        start += increment;

        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [end, duration]);

    return <>{count}</>;
  };

  return (
    <section className="py-10 bg-[var(--brand-light)]">
      <div data-aos="fade-up"
        data-aos-easing="ease-in"
        data-aos-duration="1500" className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="relative bg-[var(--brand-light)] text-[var(--brand-light)] text-center pt-8 pb-6 rounded-xl shadow-2xl transition-all duration-300"
          >
            {/* Floating Icon Circle */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[var(--brand-light)] text-[var(--brand-gold)] w-12 h-12 flex items-center justify-center rounded-full shadow-md text-2xl font-bold">
              {item.icon}
            </div>
            <h2 className="text-4xl font-bold text-[var(--brand-dark)]">
              <CountUp end={item.value} duration={1500} />{item.label === "Happy Clients" && "+"}             </h2>
            <p className="text-[var(--brand-gray)] mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default StatsSection;

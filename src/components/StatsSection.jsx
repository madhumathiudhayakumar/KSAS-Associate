import { FaBuffer,FaSuitcase,FaSearch   } from "react-icons/fa";

const stats = [
  { value: 25, label: "Assets Under Management (₹ Crores)",icon: <FaBuffer/> },
  { value: 80, label: "Happy Clients",icon: <FaBuffer/> },
  { value: 50, label: "SIP Book (₹ Lakhs)",icon: <FaBuffer/> },
  { value: 10, label: "Top 10 MFD (Startup India)",icon: <FaBuffer/> },
];

 const  StatsSection =() => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {stats.map((item, i) => (
            <div
              key={i}
              className="relative  text-white text-center pt-10 pb-6 rounded-xl shadow-md  transition-all duration-300"
            >
              {/* Floating Icon Circle */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#fff] text-[#af8a4a] w-12 h-12 flex items-center justify-center rounded-full shadow-md text-2xl font-bold">
                {item.icon}
              </div>
            <h2 className="text-4xl font-bold text-gray-800">{item.value}</h2>
            <p className="text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default StatsSection;

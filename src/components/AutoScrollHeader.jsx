import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowUp } from "react-icons/fa6";

import "swiper/css";

const AutoScrollHeader = () => {
  const data = [
    { name: "SENSEX",firstvalue:"124530", value: "335.97 (0.4%)", color: "text-green-400" },
    { name: "NIFTY 50",firstvalue:"124530", value: "25694.95", color: "text-green-400" },
    { name: "GOLD",firstvalue:"124530", value: "124840", color: "text-green-400" },
    { name: "SILVER",firstvalue:"124530", value: "155650", color: "text-green-400" },
    { name: "NASDAQ",firstvalue:"124530", value: "23527.174", color: "text-green-400" },
    { name: "FTSE",firstvalue:"124530", value: "9860.48", color: "text-green-400" },
    { name: "Nikkei",firstvalue:"124530", value: "50842.93", color: "text-green-400" },
    { name: "GOLD",firstvalue:"124530", value: "124840", color: "text-green-400" },
    { name: "SILVER",firstvalue:"124530", value: "155650", color: "text-green-400" },
    { name: "NASDAQ",firstvalue:"124530", value: "23527.174", color: "text-green-400" },
    { name: "FTSE",firstvalue:"124530", value: "9860.48", color: "text-green-400" },
    { name: "Nikkei",firstvalue:"124530", value: "50842.93", color: "text-green-400" },
  ];

  return (
    <div className="w-full bg-black text-white py-2 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        speed={2000}        // smooth continuous
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {data.map((item, index) => (
<SwiperSlide className="!w-auto px-6 flex items-center border-r border-[#fff] h-full">
  <div className="flex items-center gap-2 whitespace-nowrap">
    <span className="text-sm font-bold">{item.name}</span>
    <span className="text-sm">{item.firstvalue}</span>
    <span className={`flex items-center gap-1 ${item.color} text-sm font-bold`}>
      <FaArrowUp />
      {item.value}
    </span>
  </div>
</SwiperSlide>



        ))}
      </Swiper>
    </div>
  );
};

export default AutoScrollHeader;

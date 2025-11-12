import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";


import "swiper/css";

const AutoScrollHeader = () => {
const [rateData, setRateData] = useState([]);
  const fetchApi = async () => {
    try {
      const response = await fetch('https://www.redvisionweb.com/api/open-apis/tickers?apikey=fc1017dad92f3bbbd9cee9bc21d4b0e0');   
      const data = await response.json();
      setRateData(data?.data||[])
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }   
  };

  useEffect(()=>{
    fetchApi();
  },[])

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
{rateData.map((item, index) => {
  // Determine if index increased or decreased
  const isPositive = item.diff_amount >= 0;

  // Format the figure with commas
  const formattedFigure = Number(item.figure).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <SwiperSlide
      key={index}
      className="!w-auto px-6 flex items-center border-r border-[#fff] h-full"
    >
      <div className="flex items-center gap-2 whitespace-nowrap">
        {/* Index name */}
        <span className="text-sm font-bold">{item.indexName}</span>

        {/* Figure with comma */}
        <span className="text-sm">{formattedFigure}</span>

        {/* Difference and Arrow */}
        <span
          className={`flex items-center gap-1 text-sm font-bold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? <FaArrowUp /> : <FaArrowDown />}
          {Math.abs(item.diff_amount).toLocaleString("en-IN")}
        </span>

        {/* Percentage */}
        <span
          className={`text-sm ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          ({Math.abs(item.percentage)}%)
        </span>
      </div>
    </SwiperSlide>
  );
})}

      </Swiper>
    </div>
  );
};

export default AutoScrollHeader;

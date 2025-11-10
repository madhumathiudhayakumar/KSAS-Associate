import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Praveen Kumar",
    role: "Sales Operations",
    img: "https://cdn3.iconfinder.com/data/icons/user-icon-3-1/100/user_3_Artboard_1-1024.png",
    text: "The team at Fin & Me helped me move from a negative cycle of EMI outgo to becoming debt-free, and...",
  },
  {
    name: "Vidhyashankar",
    role: "Senior Associate, Art & UI",
    img: "https://cdn3.iconfinder.com/data/icons/user-icon-3-1/100/user_3_Artboard_1-1024.png",
    text: "While my wife and I were already investing blindly in mutual funds solely for the purpose of tax savings...",
  },
  {
    name: "Satheesh",
    role: "Director, Genix",
    img: "https://cdn3.iconfinder.com/data/icons/user-icon-3-1/100/user_3_Artboard_1-1024.png",
    text: "While investing in stocks and mutual funds, I always focused on short-term returns and used to exit when...",
  },
    {
    name: "Praveen Kumar",
    role: "Sales Operations",
    img: "https://cdn3.iconfinder.com/data/icons/user-icon-3-1/100/user_3_Artboard_1-1024.png",
    text: "The team at Fin & Me helped me move from a negative cycle of EMI outgo to becoming debt-free, and...",
  },
  {
    name: "Vidhyashankar",
    role: "Senior Associate, Art & UI",
    img: "https://cdn3.iconfinder.com/data/icons/user-icon-3-1/100/user_3_Artboard_1-1024.png",
    text: "While my wife and I were already investing blindly in mutual funds solely for the purpose of tax savings...",
  },
  {
    name: "Satheesh",
    role: "Director, Genix",
    img: "https://cdn3.iconfinder.com/data/icons/user-icon-3-1/100/user_3_Artboard_1-1024.png",
    text: "While investing in stocks and mutual funds, I always focused on short-term returns and used to exit when...",
  },
];

const Users = () => {
  return (
    <section className="bg-black py-16">
      <h2 className="text-center text-white text-2xl md:text-3xl font-bold">
        TESTIMONIALS
      </h2>

      {/* Underline */}
      <div className="w-14 h-1 bg-[#af8a4a] mx-auto mt-2 mb-10 rounded-full"></div>

      <div className="container mx-auto px-4">

        {/* ✅ Parent wrapper to push dots outside using Tailwind */}
        <div className="relative pb-12">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-10"    // ✅ Gives space for dots (Tailwind)
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl p-8 shadow-xl mx-auto max-w-md">
                  {/* Profile */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="text-gray-900 font-semibold text-lg">
                        {t.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{t.role}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-4xl text-[#af8a4a]">“</p>
                  <p className="text-gray-600 leading-relaxed">{t.text}</p>
                  <p className="text-4xl text-[#af8a4a] text-right">”</p>

                  <button className="text-[#af8a4a] font-semibold hover:underline">
                    Read More &gt;&gt;
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Tailwind overrides for pagination bullets */}
          <style>{`
            .swiper-pagination {
              bottom: 0 !important;
            }
            .swiper-pagination-bullet {
              background: #fff !important;
              opacity: 1 !important;
            }
            .swiper-pagination-bullet-active {
              background: #af8a4a !important;
              // border: 2px solid #af8a4a !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Users;

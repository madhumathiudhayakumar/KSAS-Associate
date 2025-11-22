import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const books = [
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    img: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    img: "https://m.media-amazon.com/images/I/81tFODgVbHL._SL1500_.jpg",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    img: "https://m.media-amazon.com/images/I/81Lb75rUhLL.jpg",
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    img: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
  },
  {
    title: "The Millionaire Next Door",
    author: "Thomas J. Stanley & William D. Danko",
    img: "https://m.media-amazon.com/images/I/612d8bFlpaL._SY385_.jpg",
  },
  {
    title: "Let’s Talk Money",
    author: "Monica Halan",
    img: "https://m.media-amazon.com/images/I/81P1wIvmAHL.jpg",
  },
  {
    title: "The Power of Your Subconscious Mind",
    author: "Dr. Joseph Murphy",
    img: "https://m.media-amazon.com/images/I/71sBtM3Yi5L.jpg",
  },
  {
    title: "The Magic of Believing",
    author: "M. Claude Bristol",
    img: "https://m.media-amazon.com/images/I/71zNk6abHPL.jpg",
  },
  {
    title: "The Secret",
    author: "Rhonda Byrne",
    img: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
  },
  {
    title: "The Magic",
    author: "Rhonda Byrne",
    img: "https://m.media-amazon.com/images/I/81O-MJ5QaqL.jpg",
  },
  {
    title: "Miracle Morning",
    author: "Hal Elrod",
    img: "https://m.media-amazon.com/images/I/71fT6F4b-UL.jpg",
  },
  {
    title: "The Silva Mind Control Method",
    author: "Jose Silva",
    img: "https://m.media-amazon.com/images/I/71G0Qe8U8hL.jpg",
  },
];

const BooksCarousel = () => {
  return (
    <section className="bg-[var(--brand-light)] py-10">
      {/* Heading */}
      <div >
        <p className="text-center text-[var(--brand-dark)] text-lg italic mb-6 px-4">
          “An investment in knowledge pays the best interest.” — Benjamin
          Franklin
        </p>
        <h2 className="text-center text-[var(--brand-dark)] text-2xl md:text-4xl font-bold">
          {/* TOP FINANCIAL BOOKS */}
          RECOMMENDED BOOKS
        </h2>

        {/* Underline */}
        <div className="w-14 h-1 bg-[var(--brand-gold)] mx-auto mt-2 mb-10 rounded-full"></div>

        <div className="container mx-auto px-4">
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              spaceBetween={30}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="!pb-10"
            >
              {books.map((book, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div
                    className="bg-[var(--brand-light)] rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 
                    text-center flex flex-col items-center justify-between h-full"
                  >
                    {/* Book Cover */}
                    <img
                      src={book.img}
                      alt={book.title}
                      className="w-40 h-56 object-cover rounded-lg mb-4"
                    />

                    {/* Book Info */}
                    <div className="flex flex-col flex-grow justify-between">
                      <h3 className="text-lg font-semibold text-[var(--brand-light)] line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-[var(--brand-gray)] text-sm mt-2">
                        {book.author}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination styling */}
            <style>{`
            .swiper-pagination {
              bottom: 0 !important;
            }
            .swiper-pagination-bullet {
              background: gray !important;
              opacity: 1 !important;
            }
            .swiper-pagination-bullet-active {
              background: #af8a4a !important;
            }
          `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksCarousel;

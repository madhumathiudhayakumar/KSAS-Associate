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
    img: "https://m.media-amazon.com/images/I/513iw-ye2QL._SY445_SX342_FMwebp_.jpg",
  },
  {
    title: "Let’s Talk Money",
    author: "Monica Halan",
    img: "https://media.oceanofpdf.com/2022/11/PDF-EPUB-Lets-Talk-Money-by-Monika-Halan-Download.jpg",
  },
  {
    title: "The Power of Your Subconscious Mind",
    author: "Dr. Joseph Murphy",
    img: "https://m.media-amazon.com/images/I/41bRe+-3Y4L._SY445_SX342_FMwebp_.jpg",
  },
  {
    title: "The Magic of Believing",
    author: "M. Claude Bristol",
    img: "https://m.media-amazon.com/images/I/71SiMCm81yL._SL1500_.jpg",
  },
  {
    title: "The Secret",
    author: "Rhonda Byrne",
    img: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
  },
  {
    title: "The Magic",
    author: "Rhonda Byrne",
    img: "https://m.media-amazon.com/images/I/81cK7UeErcL._SY522_.jpg",
  },
  {
    title: "Miracle Morning",
    author: "Hal Elrod",
    img: "https://m.media-amazon.com/images/I/41UtjxZP9jL._SY445_SX342_FMwebp_.jpg",
  },
  {
    title: "The Silva Mind Control Method",
    author: "Jose Silva",
    img: "https://m.media-amazon.com/images/I/51V8UeVzFwL._SY445_SX342_FMwebp_.jpg",
  },
];

const BooksCarousel = () => {
  return (
    <section className="relative py-16 bg-[var(--brand-dark)] via-white to-[var(--brand-light)] overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[var(--brand-gold)] blur-3xl opacity-20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[var(--brand-dark)] blur-3xl opacity-10 rounded-full"></div>
      </div>

      {/* Quote */}
      <p className="text-center text-[var(--brand-light)] text-lg italic mb-4 px-4">
        “An investment in knowledge pays the best interest.”
      </p>
      <p className="text-center text-[var(--brand-gold)] text-sm tracking-wide mb-8">
        — Benjamin Franklin
      </p>

      {/* Heading */}
      <h2 className="text-center text-[var(--brand-light)] text-3xl md:text-4xl font-bold drop-shadow-sm">
        RECOMMENDED BOOKS
      </h2>

      {/* Underline */}
      <div className="w-16 h-1.5 bg-[var(--brand-gold)] mx-auto mt-3 mb-12 rounded-full shadow-md shadow-[var(--brand-gold)]/40"></div>

      {/* Slider */}
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
                <div className="rounded-xl p-2 backdrop-blur-md bg-[var(--brand-light)]  hover:shadow-[0_0_20px_var(--brand-gold)] transition-all duration-500 text-center flex flex-col items-center justify-between h-full">
                  {/* Book Cover */}
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-40 h-56 object-cover rounded-lg mb-4 shadow-md"
                  />

                  {/* Book Info */}
                  <div className="flex flex-col flex-grow justify-between">
                    <h3 className="text-lg font-semibold text-[var(--brand-dark)] line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-[var(--brand-gray)] text-sm mt-2 italic">
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
          background: #bfbfbf !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: var(--brand-gold) !important;
          box-shadow: 0 0 6px var(--brand-gold);
        }
      `}</style>
        </div>
      </div>
    </section>
  );
};

export default BooksCarousel;

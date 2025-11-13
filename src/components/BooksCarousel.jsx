import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const books = [
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    img: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    img: "https://m.media-amazon.com/images/I/81tFODgVbHL._SL1500_.jpg",
  },
  {
    title: "The Millionaire Next Door",
    author: "Thomas J. Stanley & William D. Danko",
    img: "https://cdnagesdb.com/images/booksimages/f8eb9b08853da4ad919554d67b3c66b0.webp",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    img: "https://m.media-amazon.com/images/I/81Lb75rUhLL.jpg",
  },
  {
    title: "Your Money or Your Life",
    author: "Vicki Robin & Joe Dominguez",
    img: "https://yourmoneyoryourlife.com/wp-content/uploads/2018/02/BOOK.png",
  },
  {
    title: "I Will Teach You to Be Rich",
    author: "Ramit Sethi",
    img: "https://bookstohomeindia.b-cdn.net/wp-content/uploads/2024/06/81c9SSbG3OL._AC_UF10001000_QL80_-500x500.webp.webp",
  },
  {
    title: "The Simple Path to Wealth",
    author: "JL Collins",
    img: "https://m.media-amazon.com/images/I/612d8bFlpaL._SY385_.jpg",
  },
  {
    title: "You’re So Money",
    author: "Farnoosh Torabi",
    img: "https://s2982.pcdn.co/wp-content/uploads/2020/08/youre-so-money-by-farnoosh-torabi-book-cover.jpg.optimal.jpg",
  },
  {
    title: "The Wealthy Gardener",
    author: "John Soforic",
    img: "https://m.media-amazon.com/images/I/41EnWvtIZ-L.jpg",
  },
  {
    title: "The Total Money Makeover",
    author: "Dave Ramsey",
    img: "https://www.shespeaks.com/pages/img/review/IMG_2588_05232015002849.JPG",
  },
    {
    title: "An investment in knowledge pays the best interest",
    author: "Benjamin Franklin",
    img: "https://colterreed.com/wp-content/uploads/2020/08/InvestmentInKnowledge.jpg",
  },
];

const BooksCarousel = () => {
  return (
    <section className="bg-[var(--brand-dark)] py-16">
      {/* Heading */}
      <h2 className="text-center text-[var(--brand-light)] text-2xl md:text-4xl font-bold">
        {/* TOP FINANCIAL BOOKS */}
        RECOMMENDED BOOKS
      </h2>

      {/* Underline */}
      <div className="w-14 h-1 bg-[var(--brand-gold)] mx-auto mt-2 mb-10 rounded-full"></div>

      <div className="container mx-auto px-4">
        <div className="relative pb-12">
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
    <div className="bg-[var(--brand-light)] rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 
                    text-center flex flex-col items-center justify-between h-full min-h-[380px]">
      {/* Book Cover */}
      <img
        src={book.img}
        alt={book.title}
        className="w-40 h-56 object-cover rounded-lg mb-4"
      />

      {/* Book Info */}
      <div className="flex flex-col flex-grow justify-between">
        <h3 className="text-lg font-semibold text-[var(--brand-dark)] line-clamp-2">
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
              background: #fff !important;
              opacity: 1 !important;
            }
            .swiper-pagination-bullet-active {
              background: #af8a4a !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default BooksCarousel;

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const movies = [
  {
    title: "The Pursuit of Happyness (2006)",
    lesson: "Discipline, resilience, and long-term goal focus are central to building wealth.",
    img: "https://wallpaperaccess.com/full/2024739.jpg",
  },
  {
    title: "The Big Short (2015)",
    lesson: "Understanding markets, spotting risk early, and thinking independently.",
    img: "https://wallpaperaccess.com/full/6160123.jpg",
  },
  {
    title: "Moneyball (2011)",
    lesson: "Data-driven decisions and breaking old patterns for long-term value creation.",
    img: "https://facts.net/wp-content/uploads/2023/06/32-facts-about-the-movie-moneyball-1687659679.jpg",
  },
  {
    title: "The Social Network (2010)",
    lesson: "Vision, scaling a business, and recognizing opportunity.",
    img: "https://m.media-amazon.com/images/S/pv-target-images/ea4f1c75ddd9fd937a77875d48f9ce8225ed954afcefabe7a2195311b1a97ddd.jpg",
  },
  {
    title: "Wall Street (1987)",
    lesson: "Ethical boundaries, greed vs. discipline, and the cost of poor choices.",
    img: "https://i.etsystatic.com/23402008/r/il/7deecb/2499941196/il_1080xN.2499941196_ftmf.jpg",
  },
  {
    title: "Margin Call (2011)",
    lesson: "Risk management, corporate responsibility, and financial system vulnerabilities.",
    img: "https://a.ltrbxd.com/resized/sm/upload/85/1q/1m/jj/margin-call-0-230-0-345-crop.jpg?k=722848aad5",
  },
  {
    title: "The Wolf of Wall Street (2013)",
    lesson: "What not to do — emotional control, discipline, and ethical behavior matter.",
    img: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/11/073c71bc-3bec-49bc-9797-8f02f7b4928e.jpg",
  },
  {
    title: "Boiler Room (2000)",
    lesson: "Red flags in investing, avoiding scams, and staying grounded.",
    img: "https://images-na.ssl-images-amazon.com/images/I/51EU92A-MLL._SX342_QL70_.jpg",
  },
  {
    title: "The Founder (2016)",
    lesson: "Business expansion, persistence, and strategic growth in building long-term wealth.",
    img: "https://m.media-amazon.com/images/S/pv-target-images/faca8e8dcfa7bb317178f66137fd309bf4ad87c739c1c65b1c9bd58d88428180._UR1920,1080_SX720_FMjpg_.jpg",
  },
  {
    title: "The Banker (2020)",
    lesson: "Smart financing, entrepreneurship, and wealth creation through real estate.",
    img: "https://images.plex.tv/photo?size=medium-360&scale=1&url=https:%2F%2Fmetadata-static.plex.tv%2Fc%2Fgracenote%2Fc5bb0ceb3ed57ef680b7618b97c3f8f4.jpg",
  },
];

export default function RecommendedMovies() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;

    const updateSlides = () => {
      swiper.slides.forEach((slide) => {
        const el = slide.slideEl ?? slide;

        // small side card style
        el.style.opacity = "0.4";
        el.style.transform = "scale(0.9)";
        el.style.transition = "all 0.4s ease";
        el.style.zIndex = "0";
        el.style.filter = "brightness(0.7)";
      });

      const activeSlide = swiper.slides[swiper.activeIndex];
      const activeEl = activeSlide.slideEl ?? activeSlide;

      // big center card style
      activeEl.style.opacity = "1";
      activeEl.style.transform = "scale(1)";
      activeEl.style.filter = "brightness(1)";
      activeEl.style.zIndex = "10";
    };

    swiper.on("slideChange", updateSlides);
    swiper.emit("slideChange");
  }, []);

  const handlePrev = () => swiperRef.current.slidePrev();
  const handleNext = () => swiperRef.current.slideNext();

  return (
    <section className="bg-[var(--brand-light)] py-16">
      <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className="px-6 text-center flex flex-col items-center  relative  pt-8 pb-6 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all duration-300">

        <h2 className="text-2xl md:text-4xl font-bold text-[var(--brand-dark)]">Recommended Movies</h2>
        <div className="w-14 h-1 bg-[var(--brand-gold)] mx-auto mt-2 mb-6 rounded-full"></div>

        <div className="relative container p-0 max-w-6xl">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute cursor-pointer left-10 top-1/2 -translate-y-1/2 z-20 bg-[var(--brand-light)] text-[var(--brand-dark)] rounded-full p-3 shadow-md hover:bg-[var(--brand-gold)] hover:text-[var(--brand-light)]"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute cursor-pointer right-10 top-1/2 -translate-y-1/2 z-20 bg-[var(--brand-light)] text-[var(--brand-dark)] rounded-full p-3 shadow-md hover:bg-[var(--brand-gold)] hover:text-[var(--brand-light)]"
          >
            <FaArrowRight className="w-5 h-5" />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            loop={true}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={10}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              0: { slidesPerView: 1.3 },
              768: { slidesPerView: 3 },
            }}
            className="rounded-3xl overflow-visible"
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[var(--brand-dark)]">
                  <img
                    src={movie.img}
                    className="w-full h-[350px] object-cover"
                    alt={movie.title}
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-black/45 backdrop-blur-sm p-5 rounded-b-3xl">
                    <p className="font-bold text-lg text-[var(--brand-light)]">{movie.title}</p>
                    <p className="text-sm opacity-90 text-[var(--brand-light)]">{movie.lesson}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const movies = [
  {
    title: "The Pursuit of Happyness (2006)",
    lesson:
      "Discipline, resilience, and long-term goal focus are central to building wealth.",
    img: "https://wallpaperaccess.com/full/2024739.jpg",
    movieUrl:
      "https://www.bing.com/videos/riverview/relatedvideo?q=The+Pursuit+of+Happyness+(2006)+full++movie+link+on+youtube&qs=n&sp=-1&lq=0&pq=the+pursuit+of+happyness+(2006)+full++movie+link+on+youtube&sc=12-59&sk=&cvid=5C243C0FB1FA450684CE379EC554D0F1&ajaxnorecss=1&sid=3AAFE42FC94A647A2D72F284C8D16545&jsoncbid=0&ajaxsydconv=1&ru=%2fsearch%3fq%3dThe%2520Pursuit%2520of%2520Happyness%2520(2006)%2520full%2520%2520movie%2520link%2520on%2520youtube%26qs%3dn%26form%3dQBRE%26sp%3d-1%26lq%3d0%26pq%3dthe%2520pursuit%2520of%2520happyness%2520(2006)%2520full%2520%2520movie%2520link%2520on%2520youtube%26sc%3d12-59%26sk%3d%26cvid%3d5C243C0FB1FA450684CE379EC554D0F1%26ajaxnorecss%3d1%26sid%3d3AAFE42FC94A647A2D72F284C8D16545%26format%3dsnrjson%26jsoncbid%3d0%26ajaxsydconv%3d1&mmscn=vwrc&mid=FC6A479A3947C9DBA805FC6A479A3947C9DBA805&FORM=WRVORC&ntb=1&msockid=274fbd83c70511f081f5f384c0cef099",
  },
  {
    title: "The Big Short (2015)",
    lesson:
      "Understanding markets, spotting risk early, and thinking independently.",
    img: "https://wallpaperaccess.com/full/6160123.jpg",
    movieUrl:
      "https://www.bing.com/videos/riverview/relatedvideo?q=The+Big+Short+(2015)+full+movie+youtube+url&&mid=8C03D43DAAD680C39A7A8C03D43DAAD680C39A7A&FORM=VAMGZC",
  },
  {
    title: "Moneyball (2011)",
    lesson:
      "Data-driven decisions and breaking old patterns for long-term value creation.",
    img: "https://facts.net/wp-content/uploads/2023/06/32-facts-about-the-movie-moneyball-1687659679.jpg",
    movieUrl:
      "https://www.bing.com/videos/riverview/relatedvideo?q=moneyball+2011+watch+full+movie+in+youtube+free&qs=GS&pq=moneyball+2011+watch+full+movie+in+you&sk=GS1&sc=12-38&cvid=ED6880500E96453D9C1980C39C39A758&sp=2&ghc=1&lq=0&ajaxnorecss=1&sid=3AAFE42FC94A647A2D72F284C8D16545&jsoncbid=0&ajaxsydconv=1&ru=%2fsearch%3fq%3dmoneyball%2b2011%2bwatch%2bfull%2bmovie%2bin%2byoutube%2bfree%26qs%3dGS%26pq%3dmoneyball%2b2011%2bwatch%2bfull%2bmovie%2bin%2byou%26sk%3dGS1%26sc%3d12-38%26cvid%3dED6880500E96453D9C1980C39C39A758%26FORM%3dQBRE%26sp%3d2%26ghc%3d1%26lq%3d0%26ajaxnorecss%3d1%26sid%3d3AAFE42FC94A647A2D72F284C8D16545%26format%3dsnrjson%26jsoncbid%3d0%26ajaxsydconv%3d1&mmscn=vwrc&mid=91FD438740FD1BF5A87B91FD438740FD1BF5A87B&FORM=WRVORC&ntb=1&msockid=a8771450c70611f0931ff954c8c63974",
  },
  {
    title: "The Social Network (2010)",
    lesson: "Vision, scaling a business, and recognizing opportunity.",
    img: "https://m.media-amazon.com/images/S/pv-target-images/ea4f1c75ddd9fd937a77875d48f9ce8225ed954afcefabe7a2195311b1a97ddd.jpg",
    movieUrl:
      "https://www.bing.com/videos/riverview/relatedvideo?q=he+Social+Network+(2010)+full+movie+in+youube&&mid=9A2E11D215D3545323839A2E11D215D354532383&FORM=VAMGZC",
  },
  {
    title: "Wall Street (1987)",
    lesson:
      "Ethical boundaries, greed vs. discipline, and the cost of poor choices.",
    img: "https://i.etsystatic.com/23402008/r/il/7deecb/2499941196/il_1080xN.2499941196_ftmf.jpg",
    movieUrl:
      "https://www.bing.com/videos/riverview/relatedvideo?q=Wall+Street+(1987)+full+movie+in+youtube&&mid=65C8F5A42C09570DDA7565C8F5A42C09570DDA75&FORM=VAMGZC",
  },
  {
    title: "Margin Call (2011)",
    lesson:
      "Risk management, corporate responsibility, and financial system vulnerabilities.",
    img: "https://a.ltrbxd.com/resized/sm/upload/85/1q/1m/jj/margin-call-0-230-0-345-crop.jpg?k=722848aad5",
    movieUrl: "https://www.youtube.com/watch?v=zbwI3VLz90U",
  },
  {
    title: "The Wolf of Wall Street (2013)",
    lesson:
      "What not to do — emotional control, discipline, and ethical behavior matter.",
    img: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/11/073c71bc-3bec-49bc-9797-8f02f7b4928e.jpg",
    movieUrl:
      "https://www.bing.com/videos/riverview/relatedvideo?pglt=299&q=The+Wolf+of+Wall+Street+(2013)+full+movie+in+youtube&cvid=7309c5ba98554c48b7dcb233cba687e1&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIHCAEQ6wcYQNIBCDcyODBqMGoxqAIIsAIB&PC=U531&ru=%2fsearch%3fpglt%3d299%26q%3dThe%2bWolf%2bof%2bWall%2bStreet%2b(2013)%2bfull%2bmovie%2bin%2byoutube%26cvid%3d7309c5ba98554c48b7dcb233cba687e1%26gs_lcrp%3dEgRlZGdlKgYIABBFGDkyBggAEEUYOTIHCAEQ6wcYQNIBCDcyODBqMGoxqAIIsAIB%26FORM%3dANNTA1%26PC%3dU531&mmscn=vwrc&mid=56BEB31698B698D2DD1C56BEB31698B698D2DD1C&FORM=WRVORC&ntb=1&msockid=b8961375c70711f0a9fa235535f28f80",
  },
  {
    title: "Boiler Room (2000)",
    lesson: "Red flags in investing, avoiding scams, and staying grounded.",
    img: "https://images-na.ssl-images-amazon.com/images/I/51EU92A-MLL._SX342_QL70_.jpg",
    movieUrl:
      "https://www.bing.com/videos/riverview/relatedvideo?q=Boiler+Room+(2000)+full+movie+in+youtube&&mid=69944712C4595BF5D56269944712C4595BF5D562&FORM=VAMGZC",
  },
  {
    title: "The Founder (2016)",
    lesson:
      "Business expansion, persistence, and strategic growth in building long-term wealth.",
    img: "https://m.media-amazon.com/images/S/pv-target-images/faca8e8dcfa7bb317178f66137fd309bf4ad87c739c1c65b1c9bd58d88428180._UR1920,1080_SX720_FMjpg_.jpg",
    movieUrl:
      "https://www.bing.com/videos/riverview/relatedvideo?&q=The+Founder+(2016)+full+movie+in+youtube&&mid=FC09B48C5C2FB3963C58FC09B48C5C2FB3963C58&&FORM=VRDGAR",
  },
  {
    title: "The Banker (2020)",
    lesson:
      "Smart financing, entrepreneurship, and wealth creation through real estate.",
    img: "https://images.plex.tv/photo?size=medium-360&scale=1&url=https:%2F%2Fmetadata-static.plex.tv%2Fc%2Fgracenote%2Fc5bb0ceb3ed57ef680b7618b97c3f8f4.jpg",
    movieUrl: "https://www.youtube.com/watch?v=r0Xt_-PbrMc",
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
    <section className="bg-[var(--brand-light)] py-12">
      <div
        data-aos="zoom-out-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-center flex flex-col items-center relative rounded-xl transition-all duration-300"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-[var(--brand-dark)]">
          Recommended Movies
        </h2>
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
                <a
                  href={movie.movieUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[var(--brand-dark)]">
                    <img
                      src={movie.img}
                      className="w-full h-[350px] object-cover"
                      alt={movie.title}
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-black/45 backdrop-blur-sm p-5 rounded-b-3xl">
                      <p className="font-bold text-lg text-[var(--brand-light)]">
                        {movie.title}
                      </p>
                      <p className="text-sm opacity-90 text-[var(--brand-light)]">
                        {movie.lesson}
                      </p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

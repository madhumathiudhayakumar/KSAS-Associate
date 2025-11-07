import { useRef, useEffect } from "react";

const AutoScrollCarousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        scrollAmount += 1;

        // Reset scroll to start for seamless loop
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20); // adjust speed here (lower = faster)

    // Pause auto-scroll on hover
    scrollContainer.addEventListener("mouseenter", () => clearInterval(interval));
    scrollContainer.addEventListener("mouseleave", () => setInterval(autoScroll, 20));

    return () => clearInterval(interval);
  }, []);

  const cards = [
    { title: "Rs. 1 Crore or 10 Paise Doubled for 31 Days?", date: "Dec 6, 2024" },
    { title: "Is it true you can only afford a sofa in 40 years?", date: "Dec 20, 2024" },
    { title: "Markets are falling. Is it time to stop SIPs?", date: "Jan 20, 2025" },
    { title: "Trump’s 'Liberation Day' Tariffs Explained", date: "Apr 4, 2025" },
    { title: "Understanding Asset Allocation", date: "Mar 1, 2025" },
    { title: "How to Pick the Right Mutual Fund", date: "May 10, 2025" },
  ];

  return (
    <div className="bg-white py-10">
      <h2 className="text-center text-white text-2xl font-bold mb-8">
        Latest Articles
      </h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-6 px-6 snap-x snap-mandatory scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-[280px] flex-shrink-0 bg-white rounded-xl shadow-lg snap-center cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`https://picsum.photos/400/250?random=${index + 1}`}
              alt={card.title}
              className="rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">Admin | {card.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollCarousel;

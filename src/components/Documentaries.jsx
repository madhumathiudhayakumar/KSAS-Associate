import React from "react";

/**
 * Recommended Documentaries — Animated Grid (Style 5)
 *
 * Uses Tailwind utilities for layout and animations.
 * Replace `thumbnail` with per-document thumbnails if you have them.
 *
 * Developer note: using the uploaded file path from your project as the image URL.
 */
const thumbnail = "/mnt/data/Screenshot 2025-11-21 at 4.32.21 PM.png";

// const docs = [
//   {
//     id: 1,
//     title: "Money Explained",
//     platform: "Netflix",
//     year: "2023",
//     desc: "A clear breakdown of credit, scams, retirement, gambling psychology, and financial pitfalls.",
//     lesson: "Understanding behavior is the first step to building wealth.",
//     img: thumbnail,
//   },
//   {
//     id: 2,
//     title: "Inside Job",
//     platform: "Documentary (2010)",
//     year: "2010",
//     desc: "A deep look at the 2008 financial crisis and how greed and mismanagement created global collapse.",
//     lesson: "Risk management and awareness of systemic failures.",
//     img: thumbnail,
//   },
//   {
//     id: 3,
//     title: "The Ascent of Money",
//     platform: "Documentary (2008)",
//     year: "2008",
//     desc: "Explores the entire history of money, banks, insurance, and financial markets.",
//     lesson: "Long-term perspective is essential for smart investing.",
//     img: thumbnail,
//   },
//   {
//     id: 4,
//     title: "The China Hustle",
//     platform: "Documentary (2017)",
//     year: "2017",
//     desc: "A shocking look at fraudulent companies and stock-market scams.",
//     lesson: "Avoid hype; always do due diligence.",
//     img: thumbnail,
//   },
//   {
//     id: 5,
//     title: "Becoming Warren Buffett",
//     platform: "HBO",
//     year: "2017",
//     desc: "A personal look at Buffett’s life, discipline, and investing philosophy.",
//     lesson: "Simplicity, patience, and value investing work.",
//     img: thumbnail,
//   },
//   {
//     id: 6,
//     title: "The Smartest Guys in the Room",
//     platform: "Enron",
//     year: "2005",
//     desc: "Shows how one of the biggest corporate frauds unfolded.",
//     lesson:
//       "Importance of transparency and avoiding “too good to be true” investments.",
//     img: thumbnail,
//   },
//   {
//     id: 7,
//     title: "Dirty Money",
//     platform: "Netflix",
//     year: "2018",
//     desc: "Covers several real-world corporate scandals and unethical business practices.",
//     lesson: "Ethical investing and reputational risk matter.",
//     img: thumbnail,
//   },
//   {
//     id: 8,
//     title: "Minimalism: A Documentary About the Important Things",
//     platform: "Documentary (2016)",
//     year: "2016",
//     desc: "How reducing excess leads to smarter financial choices and life clarity.",
//     lesson: "Wealth is about controlling expenses as much as income.",
//     img: thumbnail,
//   },
//   {
//     id: 9,
//     title: "The Pit",
//     platform: "Documentary (2022)",
//     year: "2022",
//     desc: "Follows traders on the floor of the NY commodities exchange.",
//     lesson: "Emotional control and discipline in trading.",
//     img: thumbnail,
//   },
//   {
//     id: 10,
//     title: "Capitalism: A Love Story",
//     platform: "Michael Moore",
//     year: "2009",
//     desc: "Explores how the financial system impacts everyday people.",
//     lesson:
//       "Understanding the larger economic environment helps make better wealth decisions.",
//     img: thumbnail,
//   },
// ];

const docs = [
  {
    author: "Money Explained (Netflix)",
    text: "A clear breakdown of credit, scams, retirement, gambling psychology, and financial pitfalls. Lesson: Understanding behavior is the first step to building wealth."
  },
  {
    author: "Inside Job (2010)",
    text: "A deep look at the 2008 financial crisis and how greed and mismanagement created global collapse. Lesson: Risk management and awareness of systemic failures."
  },
  {
    author: "The Ascent of Money (2008)",
    text: "Explores the entire history of money, banks, insurance, and financial markets. Lesson: Long-term perspective is essential for smart investing."
  },
  {
    author: "The China Hustle (2017)",
    text: "A shocking look at fraudulent companies and stock-market scams. Lesson: Avoid hype; always do due diligence."
  },
  {
    author: "Becoming Warren Buffett (HBO)",
    text: "A personal look at Buffett’s life, discipline, and investing philosophy. Lesson: Simplicity, patience, and value investing work."
  },
  {
    author: "The Smartest Guys in the Room (Enron)",
    text: "Shows how one of the biggest corporate frauds unfolded. Lesson: Importance of transparency and avoiding 'too good to be true' investments."
  },
  {
    author: "Dirty Money (Netflix)",
    text: "Covers several real-world corporate scandals and unethical business practices. Lesson: Ethical investing and reputational risk matter."
  },
  {
    author: "Minimalism: A Documentary About the Important Things (2016)",
    text: "A different angle—how reducing excess leads to smarter financial choices. Lesson: Wealth is about controlling expenses as much as income."
  },
  {
    author: "The Pit (2022)",
    text: "Follows traders on the floor of the NY commodities exchange. Lesson: Emotional control and discipline in trading."
  },
  {
    author: "Capitalism: A Love Story (Michael Moore)",
    text: "Explores how the financial system impacts everyday people. Lesson: Understanding the larger economic environment helps make better wealth decisions."
  }
];

export default function RecommendedDocumentaries() {
  return (
<section className="w-full bg-[var(--brand-dark)] py-16">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Heading */}
    <h2
      data-aos="fade-up"
      data-aos-duration="1200"
      className="text-3xl md:text-4xl font-bold text-[var(--brand-light)] text-center"
    >
      Recommended Documentaries
    </h2>

    {/* Underline */}
    <div className="w-20 h-1 bg-[var(--brand-gold)] mx-auto mt-3 mb-10 rounded-full"></div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {docs.map((doc, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 150}
          className="bg-[var(--brand-light)] p-6 rounded-xl shadow-lg border border-transparent hover:border-[var(--brand-gold)] hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          {/* Title */}
          <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2">
            {index + 1}. {doc.author}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-700 leading-relaxed">
            {doc.text}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>
  );
}

// import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// const testimonials = [
//   {
//     author: "Money Explained (Netflix)",
//     text: "A clear breakdown of credit, scams, retirement, gambling psychology, and financial pitfalls. Lesson: Understanding behavior is the first step to building wealth."
//   },
//   {
//     author: "Inside Job (2010)",
//     text: "A deep look at the 2008 financial crisis and how greed and mismanagement created global collapse. Lesson: Risk management and awareness of systemic failures."
//   },
//   {
//     author: "The Ascent of Money (2008)",
//     text: "Explores the entire history of money, banks, insurance, and financial markets. Lesson: Long-term perspective is essential for smart investing."
//   },
//   {
//     author: "The China Hustle (2017)",
//     text: "A shocking look at fraudulent companies and stock-market scams. Lesson: Avoid hype; always do due diligence."
//   },
//   {
//     author: "Becoming Warren Buffett (HBO)",
//     text: "A personal look at Buffett’s life, discipline, and investing philosophy. Lesson: Simplicity, patience, and value investing work."
//   },
//   {
//     author: "The Smartest Guys in the Room (Enron)",
//     text: "Shows how one of the biggest corporate frauds unfolded. Lesson: Importance of transparency and avoiding 'too good to be true' investments."
//   },
//   {
//     author: "Dirty Money (Netflix)",
//     text: "Covers several real-world corporate scandals and unethical business practices. Lesson: Ethical investing and reputational risk matter."
//   },
//   {
//     author: "Minimalism: A Documentary About the Important Things (2016)",
//     text: "A different angle—how reducing excess leads to smarter financial choices. Lesson: Wealth is about controlling expenses as much as income."
//   },
//   {
//     author: "The Pit (2022)",
//     text: "Follows traders on the floor of the NY commodities exchange. Lesson: Emotional control and discipline in trading."
//   },
//   {
//     author: "Capitalism: A Love Story (Michael Moore)",
//     text: "Explores how the financial system impacts everyday people. Lesson: Understanding the larger economic environment helps make better wealth decisions."
//   }
// ];


// export default function RecommendedDocumentaries() {
//   return (
//     <section className="w-full py-12 bg-[var(--brand-light)] relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="max-w-5xl mx-auto relative z-20">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           pagination={{ clickable: true }}
//           effect="fade"
//           autoplay={{ delay: 4000 }}
//           speed={800}
//           loop={true}
//           className="!pb-10 w-full"
//         >
//           {testimonials.map((item, i) => (
//             <SwiperSlide key={i}>
//               <div className="text-center">
//                 <FaQuoteLeft className="text-[var(--brand-gold)] text-4xl mx-auto mb-6" />

//                 <p className="text-[var(--brand-dark)] text-xl md:text-2xl leading-relaxed px-4 md:px-12">
//                   {item.text}
//                 </p>

//                 <FaQuoteRight className="text-[var(--brand-gold)] text-4xl mx-auto mt-6" />

//                 <p className="mt-6 text-[var(--brand-gold)] text-lg font-semibold">
//                   — {item.author}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Pagination custom style */}
//       <style>{`
//             .swiper-pagination {
//               bottom: 0 !important;
//             }
//             .swiper-pagination-bullet {
//               background: gray !important;
//               opacity: 1 !important;
//             }
//             .swiper-pagination-bullet-active {
//               background: #af8a4a !important;
//             }
//           `}</style>
//     </section>
//   );
// }

import React, { useState } from 'react';
import ResourceLinks from "../StaticData/UsefullResourcesData"
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ScrollToTopButton from './ScrollToTopButton';
import { BsSunFill } from "react-icons/bs";

const categories = [
  "Bonds",
  "Insurance",
  "Mutual Funds",
  "Stock Market for Beginner's",
  "Option Trading Free Course",
  "Financial Independence",
  "Best seller Audiobooks",
  "Josh Talks",
  "Power of Habits"
]


const UsefullResources = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("");

  const getVideoId = (url) => {
    const regExp = /(?:v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };
  const filteredLinks = selectedCategory
    ? ResourceLinks.filter(item => item.cattegory === selectedCategory)
    : ResourceLinks;
  return (
    <div>
      <ScrollToTopButton />
      <div className="bg-[var(--brand-light)] text-[var(--brand-dark)]">
        <section className="mt-40 mb-20 px-4 md:px-8 lg:px-16">
          <blockquote className="text-3xl font-bold text-[var(--brand-dark)] mb-6 border-l-4 border-[var(--brand-gold)] pl-4">
            Important Note
          </blockquote>

          <p className="text-[var(--brand-dark)] mb-4">
            The YouTube videos embedded on this website are sourced directly from their
            respective official YouTube channels. All rights, trademarks, and ownership
            of the video content remain solely with the original creators. We do not upload,
            modify, or host any copyrighted content on our servers.
          </p>
          <p className="text-[var(--brand-dark)] mb-4">
            Any views, strategies, or product recommendations mentioned in the videos
            are solely those of the respective creators and are not endorsed by us.                    </p>
          <p className="text-[var(--brand-dark)] mb-4">
            Investment in the securities market is subject to market risks. <strong>Read all
              scheme-related documents carefully</strong> before investing. Past performance does
            not guarantee future results.
          </p>
          <p className="text-[var(--brand-dark)] mb-4">
            We are <strong>not registered with SEBI</strong> as a financial advisor, research analyst,
            or intermediary. Therefore, nothing on this website should be construed as:
          </p>

          <ul className="space-y-3">
            {[
              "A recommendation to buy, sell, or hold any securities",
              "Investment research or a personalized investment advisory service",
              "A guarantee of future returns",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 pl-4">
                <BsSunFill className="w-5 h-5 text-[var(--brand-gold)] mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[var(--brand-dark)] mb-6 mt-4">
            All users are strongly advised to consult a SEBI-registered financial advisor
            before making any investment decisions.
          </p>
          <blockquote className="text-xl font-semibold text-[var(--brand-dark)] mb-6 border-l-4 border-[var(--brand-gold)] pl-4">
            Copyright Attribution :
          </blockquote>
          <p className="text-[var(--brand-dark)] mb-6 italic font-bold">
            “Video content belongs to the original YouTube Channel Owner. Used here via
            official YouTube embed for educational and informational purposes only.”
          </p>
          <blockquote className="text-xl font-semibold text-[var(--brand-dark)] mb-6 border-l-4 border-[var(--brand-gold)] pl-4">
            Browse by Category
          </blockquote>
          {
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category === selectedCategory ? "" : category)}
                  className={`
        rounded-xl px-4 py-2 border text-sm font-medium transition-all 
        ${selectedCategory === category
                      ? "bg-[var(--brand-gold)] text-white border-[var(--brand-gold)] shadow-lg cursor-pointer"
                      : "bg-white text-[var(--brand-dark)] border-[var(--brand-gold)] hover:shadow-[0_0_10px_var(--brand-gold)] cursor-pointer"}
      `}
                >
                  {category}
                </button>
              ))}
            </div>
          }

          <div className="container mx-auto px-4">
            <div className="relative overflow-x-auto scrollbar-hide">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
                {filteredLinks.map((item, index) => (
                  <div
                    key={index}
                    className="w-68 rounded-xl p-2 backdrop-blur-md bg-[rgba(255,255,255,0.15)] border border-[var(--brand-gold)] hover:shadow-[0_0_20px_var(--brand-gold)] transition-all duration-500 flex flex-col items-center gap-3"
                  >

                    {/* Thumbnail */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full h-full"
                    >
                      <div className="relative rounded-lg overflow-hidden">
                        <img
                          src={`https://img.youtube.com/vi/${getVideoId(item.link)}/hqdefault.jpg`}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-lg"
                        />

                        <div className="absolute top-1 left-2">
                          <span className="
    px-3 py-1 text-xs font-semibold 
    text-black bg-[var(--brand-light)] 
    rounded-md shadow-md
    backdrop-blur-sm
  ">
                            {item.cattegory}
                          </span>
                        </div>

                      </div>

                      {/* Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
                        <div className="w-10 h-8 bg-red-600 rounded-xl flex items-center justify-center text-white">
                          ▶
                        </div>
                      </div>
                    </a>

                    {/* Text */}
                    <p className="text-md font-semibold text-[var(--brand-dark)]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default UsefullResources;
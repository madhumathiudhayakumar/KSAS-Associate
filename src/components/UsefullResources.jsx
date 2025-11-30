import React, { useState } from 'react';
import ResourceLinks from "../StaticData/UsefullResourcesData"
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const UsefullResources = () => {
  const navigate = useNavigate()
  const [showAll, setShowAll] = useState(false);
  const getVideoId = (url) => {
    const regExp = /(?:v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };
  return (
    <section className="relative py-16 bg-gradient-to-br from-[var(--brand-light)] via-white to-[var(--brand-light)] overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[var(--brand-gold)] blur-3xl opacity-20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[var(--brand-dark)] blur-3xl opacity-10 rounded-full"></div>
      </div>

      {/* Heading */}
      <h2 className="text-center text-[var(--brand-dark)] text-3xl md:text-4xl font-bold drop-shadow-sm">
        USEFULL RESOURCES
      </h2>

      {/* Underline */}
      <div className="w-16 h-1.5 bg-[var(--brand-gold)] mx-auto mt-3 mb-12 rounded-full shadow-md shadow-[var(--brand-gold)]/40"></div>

      {/* Slider */}
    <div className="container mx-auto px-4">
  <div className="relative overflow-x-auto scrollbar-hide">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {(showAll ? ResourceLinks : ResourceLinks.slice(0, 4)).map((item, index) => (
              <div
                key={index}
          className="w-72 rounded-xl p-2 backdrop-blur-md bg-[rgba(255,255,255,0.15)] border border-[var(--brand-gold)] hover:shadow-[0_0_20px_var(--brand-gold)] transition-all duration-500 flex flex-col items-center gap-3"
              >

                {/* Thumbnail */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full"
                >
                  <img
                    src={`https://img.youtube.com/vi/${getVideoId(item.link)}/hqdefault.jpg`}
                    alt={item.category}
                    className="w-full h-full object-cover rounded-lg"
                  />

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
                    <div className="w-10 h-8 bg-red-600 rounded-xl flex items-center justify-center text-white">
                      ▶
                    </div>
                  </div>
                </a>

                {/* Text */}
                <p className="text-lg font-semibold text-[var(--brand-dark)]">
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON SECTION (CENTERED) */}

        <div className="flex justify-center mt-6">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="w-72 rounded-xl p-2 backdrop-blur-md bg-[rgba(255,255,255,0.15)] border border-[var(--brand-gold)] hover:shadow-[0_0_20px_var(--brand-gold)] transition-all duration-500 text-center cursor-pointer"
            >
              <div className='text-center flex flex-row items-center justify-center gap-2'>
                <p className="text-lg font-semibold text-[var(--brand-dark)] ">
                  Show More
                </p>
                <FaChevronDown />
              </div>
            </button>
          ) : (<button
            onClick={() => setShowAll(false)}
            className="w-72 rounded-xl p-2 backdrop-blur-md bg-[rgba(255,255,255,0.15)] border border-[var(--brand-gold)] hover:shadow-[0_0_20px_var(--brand-gold)] transition-all duration-500 text-center cursor-pointer"
          >
            <div className='text-center flex flex-row items-center justify-center gap-2'>
              <p className="text-lg font-semibold text-[var(--brand-dark)]">
                Show less
              </p>
              <FaChevronUp />
            </div>
          </button>)}
        </div>

      </div>


    </section>
  );
};
export default UsefullResources;
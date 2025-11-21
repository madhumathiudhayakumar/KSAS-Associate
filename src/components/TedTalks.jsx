import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TedTalks = () => {
  const talks = [
    {
      title: "One Life-Changing Class You Never Took",
      speaker: "Alexa von Tobel",
      summary:
        "Essential financial literacy: budgeting, saving, and investing basics everyone should know.",
      category: "Financial Literacy",
      speakerImage: "https://media.wnyc.org/i/800/0/l/85/1/AlexavonTobel.jpg"
    },
    {
      title: "Saving for Tomorrow, Tomorrow",
      speaker: "Shlomo Benartzi",
      summary:
        "Behavioral finance insights on automating savings and overcoming procrastination.",
      category: "Behavioral Finance",
      speakerImage: "https://anderson-review.ucla.edu/wp-content/uploads/2020/07/shlomo-benartzi.jpg"

    },
    {
      title: "How to Buy Happiness",
      speaker: "Michael Norton",
      summary:
        "Shows how smart spending—on experiences or helping others—can maximize well-being.",
      category: "Well-Being",
      speakerImage: "https://michaelnorton.com/wp-content/uploads/2022/09/michaelnorton2.jpg"

    },
    {
      title: "The Psychology of Your Future Self",
      speaker: "Dan Gilbert",
      summary:
        "Helps make smarter long-term financial decisions by understanding how your future self will think.",
      category: "Future Self",
      speakerImage: "https://techcrunch.com/wp-content/uploads/2012/12/dan-gilbert-headshot.jpg"

    },
    {
      title: "Why We Do What We Do",
      speaker: "Tony Robbins",
      summary:
        "Explores the motivations behind decisions, including financial choices, and how to take control of them.",
      category: "Motivation",
      speakerImage: "https://wallpapercave.com/wp/wp6312690.jpg"

    },
  ];

  const [index, setIndex] = useState(0);

  const nextTalk = () => {
    setIndex((prev) => (prev + 1) % talks.length);
  };

  const prevTalk = () => {
    setIndex((prev) => (prev - 1 + talks.length) % talks.length);
  };

  const talk = talks[index];

  return (
    <section className="w-full bg-[var(--brand-dark)] py-16">
      <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">

        {/* LEFT SIDE – TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-[var(--brand-light)] mb-6 text-left md:text-left"> RECOMMENDED TED TALKS</h2>
          {/* <h4 className="text-sm font-semibold text-[var(--brand-light)] tracking-wide">
            RECOMMENDED TED TALKS
          </h4> */}
          <div className="w-16 h-1 bg-[var(--brand-gold)] mt-2 mb-6 md:mx-0 mx-auto"></div>

          <h4 className="text-3xl font-semibold text-[var(--brand-light)] mt-2 leading-tight">
            Insightful Talks To Transform <br /> Your Financial Mindset.
          </h4>

          <div className="mt-6 inline-block bg-gray-100 text-gray-800 px-4 py-1 text-sm rounded-full">
            {talk.category}
          </div>

          <p className="text-lg text-[var(--brand-light)] mt-6 leading-relaxed">
            <span className="text-[var(--brand-light)] text-lg italic">" {talk.title} "</span> – {talk.summary}
          </p>

{/* Speaker Name + Avatar */}
<div className="flex items-center gap-3 mt-6">
  <img
    src={talk.speakerImage}
    alt={talk.speaker}
    className="w-12 h-12 rounded-full object-contain border-2 border-[var(--brand-gold)]"
  />
  <p className="font-semibold text-[var(--brand-light)]">
    {talk.speaker}
  </p>
</div>

          {/* ARROWS */}
          <div className="flex items-center gap-6 mt-8">
            <button
              onClick={prevTalk}
              className="text-[var(--brand-light)] text-xl hover:text-[var(--brand-gold)] transition cursor-pointer"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={nextTalk}
              className="text-[var(--brand-light)] text-xl hover:text-[var(--brand-gold)] transition cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="w-full h-full">
          <img
            src="https://i.imgflip.com/2/7cufmd.jpg"
            alt="TED Talks Illustration"
            className="w-full h-[450px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TedTalks;

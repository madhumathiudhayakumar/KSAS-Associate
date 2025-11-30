import React from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
    const navigate = useNavigate()
  return (
    <section id="blogs" className="bg-[var(--brand-dark)] py-20">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[var(--brand-light)]">
          BLOGS
        </h2>
        <div className="w-14 h-1 bg-[var(--brand-gold)] mx-auto mt-2 mb-10 rounded-full"></div>

        {/* Blog Card Wrapper */}
        <div className="flex justify-center w-full">
          <div className="w-full md:w-80 lg:w-96 bg-white shadow-lg rounded-xl p-4 border border-gray-300 transition transform hover:shadow-[0_0_20px_var(--brand-gold)] duration-300">

            {/* Image */}
            <img
              src="https://wallpapercave.com/wp/wp8172861.jpg"
              alt="blog"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />

            {/* Title */}
            <h3 className="text-lg font-semibold text-[var(--brand-dark)]">
              Golden Rules for Intraday Trading – Trade Like a Pro
            </h3>

            {/* Short Description */}
            <p className="text-sm text-gray-600 mt-2">
              Protect your capital above all else: Never risk more than 1% of your total capital on a single trade.
            </p>

            {/* CTA */}
            <button className="mt-4 text-[var(--brand-gold)] font-semibold hover:underline cursor-pointer" onClick={()=>navigate('/blogs')}>
              Read More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

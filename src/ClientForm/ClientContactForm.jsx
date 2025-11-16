import React, { useState, useRef } from "react";

const ClientContactForm = () => {
  const [loading, setLoading] = useState(true);

  return (
    <section className="py-16 px-6 md:px-20 lg:px-32 bg-[var(--brand-dark)]">
      <div className="max-w-5xl mx-auto bg-[var(--brand-light)] rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)] p-8 md:p-12">

        {/* Skeleton Loader */}
        {loading && (
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-300 rounded w-1/2"></div>
          </div>
        )}

        {/* 🔥 Responsive Iframe Wrapper */}
        <div
          className="w-full overflow-hidden flex justify-center"
          style={{
            transform: "scale(1)",
            transformOrigin: "top center",
          }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfh3eP7up1w6jwl7dONh2GpNmGFbOlvhW-UTzPbbhcK41fKkQ/viewform?embedded=true"
            className="border-0"
            onLoad={() => setLoading(false)}
            style={{
              width: "640px",      // Google form fixed width
              height: "1800px",    // Set large height so no scrollbar
              overflow: "hidden",
              display: loading ? "none" : "block",
            }}
            title="Google Form"
          ></iframe>
        </div>

      </div>

      {/* 🔥 Mobile Responsive Scaling */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="transform"] {
              transform: scale(0.85);
            }
          }

          @media (max-width: 480px) {
            div[style*="transform"] {
              transform: scale(0.72);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ClientContactForm;

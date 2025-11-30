import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { GoAlert } from "react-icons/go";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [showGuideline, setShowGuideline] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showGuidelines = () => {
    setShowGuideline(!showGuideline);
  }

  return (
    <>
      <button
        onClick={showGuidelines}
        className="fixed bottom-16 right-4 z-50 p-2 rounded-full bg-[var(--brand-gold)] shadow-[2px_5px_20px_var(--brand-gold)] hover:scale-110 transition-all cursor-pointer"
      >
        <GoAlert className="h-5 w-5 text-white" />
      </button>

      {showGuideline && (
        <div className="fixed bottom-28 right-4 z-50 w-80 ">
          {/* Tooltip Arrow */}
          <div className="absolute right-6 -bottom-2 w-4 h-4 bg-[#F2F9F2] backdrop-blur-lg border border-[var(--brand-gold)] rotate-45"></div>

          {/* Tooltip Box */}
          <div className="px-4 py-4 rounded-xl backdrop-blur-lg bg-[#F2F9F2] border border-[var(--brand-gold)] shadow-[0_0_20px_rgba(255,215,0,0.3)] text-white">
            <div className="flex justify-between items-center mb-2">
              <h5 className="font-bold text-[var(--brand-gold)]">
                Financial Safety Guidelines
              </h5>
              <button
                onClick={() => setShowGuideline(false)}
                className="text-red-300 hover:text-red-500 transition cursor-pointer"
              >
                ✖
              </button>
            </div>

            <ul className="list-disc pl-5 space-y-1 text-sm text-[var(--brand-dark)]">
              <li>Do not share any OTP (One-Time Password) received through phone calls or messages with anyone.</li>
              <li>Verify the authenticity of any links received via WhatsApp groups or individual WhatsApp messages before clicking them.</li>
              <li>
                Any investment promising to double your money in a short period is not safe. Avoid such fraudulent offers.
              </li>
              <li>
                Invest only in companies or institutions that are officially approved and regulated by the Government.
              </li>
            </ul>
          </div>
        </div>
      )}

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-4 z-50 p-2  shadow-lg bg-[var(--brand-gold)] text-[var(--brand-dark)] transition-all duration-300 hover:bg-red-400 ${visible ? "opacity-100 translate-y-0 cursor-pointer" : "opacity-0 translate-y-8 cursor-pointer"
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="h-4 w-5 fond-bold text-[var(--brand-light)]" />
      </button>
    </>
  );
};

export default ScrollToTopButton;

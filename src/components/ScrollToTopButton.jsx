import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

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

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-4 z-50 p-2  shadow-lg bg-[#af8a4a] text-black transition-all duration-300 hover:bg-red-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 cursor-pointer"
        }`}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon className="h-4 w-5 fond-bold text-[#fff]" />
    </button>
  );
};

export default ScrollToTopButton;

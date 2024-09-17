"use client";

import {useState, useEffect} from "react";
import {MoveUp} from "lucide-react";

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="rounded-full border animate-bounce w-fit h-fit fixed bottom-20 right-3 cursor-pointer hover:bg-slate-50 p-2 lg:p-4"
      onClick={scrollToTop}
    >
      <MoveUp color="black" className="w-6 h-6 lg:w-9 lg:h-9" />
    </div>
  );
}

export default ScrollUp;

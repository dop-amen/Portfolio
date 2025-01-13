import React from 'react'
import React, { useState, useEffect } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

const BottopBTN = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-20 p-3 rounded-full text-white shadow-lg transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Back to Top"
    >
     <IoArrowUpCircleOutline />
    </button>
  );
};

export default BottopBTN;

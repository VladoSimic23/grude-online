"use client";

import React, { useState, useEffect } from "react";
import mobileStyle from "../MobileComponents/MobileHomepage/Css/mobileHomepage.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <span onClick={scrollToTop} className={mobileStyle.toTop}>
          <i className="bi bi-arrow-up"></i>
        </span>
      )}
    </div>
  );
};

export default ScrollToTop;

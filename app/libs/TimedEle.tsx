"use client"; // Ensure this runs on the client side

import { useState, useEffect } from "react";
import Image from "next/image";
import defaultImage from "../../public/noImage.jpg";
import style from "../css/style.module.css";

const TimedElement = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1); // Hide after 3 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <Image
      className={`${style.imageCover} mt-4 mb-4`}
      style={{
        position: "absolute",
        zIndex: "-1",
        display: isVisible ? "block" : "none",
      }}
      src={defaultImage}
      width={500}
      height={230}
      alt={`post image fade`}
      priority={true}
      fetchPriority="high"
      quality={1}
      id={`post-image fade`}
    />
  );
};

export default TimedElement;

"use client";
import Image from "next/image";
import React, { useState } from "react";
import style from "../../../../css/style.module.css";

const MobileCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex] = useState(0);

  return (
    <div style={{ marginTop: "30px" }}>
      <div id="carouselExample" className="carousel slide" data-bs-touch="true">
        <div className="carousel-inner">
          {images.map((src: string, index: number) => (
            <div
              key={index}
              className={`carousel-item  ${
                currentIndex === index ? "active" : ""
              }`}
            >
              <Image
                src={src}
                alt={`Extra ${index + 1}`}
                width={300}
                height={350}
                className={`d-block w-100 ${style.imageContainGallery}`}
                style={{ position: "relative" }}
              />
              <p style={{ color: "white", textAlign: "center" }}>
                {index + 1} / {images.length}
              </p>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MobileCarousel;

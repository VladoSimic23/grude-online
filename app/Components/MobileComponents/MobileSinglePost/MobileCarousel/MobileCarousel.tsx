"use client";
import Image from "next/image";
import React, { useState } from "react";
import style from "../../../../css/style.module.css";
import mobileStyle from "../../MobileHomepage/Css/mobileHomepage.module.css";

const MobileCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex] = useState(0);
  const [displayGallery, setDisplayGaller] = useState(false);

  if (!displayGallery) {
    return (
      <div>
        <button
          className={mobileStyle.mobileButton}
          onClick={() => setDisplayGaller(true)}
        >
          Prikaži Galeriju
        </button>
      </div>
    );
  }

  if (displayGallery) {
    return (
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          background: "rgba(34, 32, 32, 0.96)",
          zIndex: "10000",
        }}
      >
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-touch="true"
          style={{ height: "100%" }}
        >
          <div className="carousel-inner" style={{ height: "100%" }}>
            {images.map((src: string, index: number) => (
              <div
                key={index}
                style={{ height: "100%", transition: "all 0.4s ease-in-out" }}
                className={`carousel-item  ${
                  currentIndex === index ? "active" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Extra ${index + 1}`}
                  width={300}
                  height={450}
                  className={`d-block w-100 ${style.imageContainGallery}`}
                  style={{ position: "relative" }}
                  priority={true}
                />
                <p
                  style={{
                    color: "white",
                    textAlign: "center",
                    position: "fixed",
                    left: "30px",
                    top: "30px",
                    zIndex: "200000",
                  }}
                >
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

        <i
          onClick={() => setDisplayGaller(false)}
          style={{
            color: "white",
            position: "fixed",
            top: "20px",
            right: "30px",
            zIndex: "200000",
            cursor: "pointer",
            fontWeight: "700",
            fontSize: "24px",
          }}
          className="bi bi-x-lg"
        ></i>
      </div>
    );
  }

  return;
};

export default MobileCarousel;

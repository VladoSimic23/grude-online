"use client";
import Image from "next/image";
import React, { useState } from "react";
import style from "../../../../css/style.module.css";
import mobileStyle from "../../MobileHomepage/Css/mobileHomepage.module.css";

const MobileCarousel = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
          overflow: "scroll",
          padding: "10px 15px",
        }}
      >
        <div className={mobileStyle.mobCarousel}>
          <Image
            src="/Grude_online_Logotip2.png"
            alt="grudeOnlineLogo"
            width={330}
            height={42}
          />
          <i
            onClick={() => setDisplayGaller(false)}
            style={{
              color: "white",
              cursor: "pointer",
              fontWeight: "700",
              fontSize: "24px",
            }}
            className="bi bi-x-lg"
          ></i>
        </div>

        <div className="p-2">
          <h1
            style={{ color: "white" }}
            className={`${style.h2Mobile} text-center`}
          >
            {title}
          </h1>
        </div>

        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-touch="true"
        >
          <div className="carousel-inner">
            {images.map((src: string, index: number) => (
              <div
                key={index}
                style={{ transition: "all 0.4s ease-in-out" }}
                className={`carousel-item  ${
                  currentIndex === index ? "active" : ""
                }`}
              >
                <div>
                  <Image
                    src={src}
                    alt={`Extra ${index + 1}`}
                    width={300}
                    height={450}
                    className={`d-block w-100 ${style.imageContainGallery}`}
                    style={{ position: "relative", borderRadius: "12px" }}
                    priority={true}
                  />
                  <p
                    style={{
                      color: "white",
                      textAlign: "center",
                      paddingTop: "25px",
                    }}
                  >
                    <span>
                      {index + 1} od {images.length}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
            onClick={() => setCurrentIndex(currentIndex - 1)}
          >
            {" "}
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              style={{ position: "absolute", bottom: "10px" }}
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
            onClick={() => setCurrentIndex(currentIndex + 1)}
          >
            {" "}
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              style={{ position: "absolute", bottom: "10px" }}
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }

  return;
};

export default MobileCarousel;

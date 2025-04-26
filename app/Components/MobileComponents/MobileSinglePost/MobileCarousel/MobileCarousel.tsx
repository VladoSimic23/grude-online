"use client";
import Image from "next/image";
import React, { useState } from "react";
import style from "../../../../css/style.module.css";
import mobileStyle from "../../MobileHomepage/Css/mobileHomepage.module.css";
import "../../../Swiper/swiperCustomCssPost.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MobileCarousel = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
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

        <div className="p-2" style={{ marginTop: "50px" }}>
          <h1
            style={{ color: "white" }}
            className={`${style.h2Mobile} text-center`}
          >
            {title}
          </h1>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation
          scrollbar={{ draggable: true }}
          className="mySwiper"
          style={{ borderRadius: "10px" }}
        >
          {images.map((src: string, index: number) => {
            return (
              <SwiperSlide
                key={index}
                className={`${index === 0 ? "active" : ""}`}
                style={{ fontSize: "10px !important", borderRadius: "10px" }}
              >
                <div
                  className={mobileStyle.mobileSingleItem}
                  style={{ position: "relative" }}
                >
                  <div style={{ position: "relative" }}>
                    <Image
                      style={{
                        position: "relative",
                        zIndex: "1",

                        height: "auto",
                      }}
                      className={style.imageCover}
                      src={src}
                      width={300}
                      height={220}
                      alt={`Gallery Image ${index + 1}`}
                      quality={75}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }

  return;
};

export default MobileCarousel;

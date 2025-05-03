"use client";
import Image from "next/image";
import React, { useState } from "react";
import style from "../../../../css/style.module.css";
import mobileStyle from "../../MobileHomepage/Css/mobileHomepage.module.css";
import "../../../Swiper/swiperCustomCssPost.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  FreeMode,
  Thumbs,
  Zoom,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/zoom";

const MobileCarousel = ({
  images,
}: //title,
{
  images: string[];
  title: string;
}) => {
  const [displayGallery, setDisplayGaller] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  // const [activeThumb, setActiveThumb] = useState<number>(0);

  // console.log(activeThumb);

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
      <div>
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            height: "88vh",
            width: "100%",
            background: "rgba(34, 32, 32, 0.99)",
            zIndex: "10000",
            //overflow: "scroll",
            padding: "15px 15px",
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

          {/* <div className="p-1" style={{ marginTop: "0px" }}>
            <h1
              style={{ color: "white" }}
              className={`${style.h4Mobile} text-center`}
            >
              {title}
            </h1>
          </div> */}

          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Thumbs,
              FreeMode,
              Zoom,
            ]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            zoom={true}
            navigation
            pagination={{
              type: "progressbar", // Use fraction pagination (1/5, 2/5, etc.)
            }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            scrollbar={{ draggable: true }}
            className="mySwiper"
            style={{
              //marginTop: "30px",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            {images.map((src: string, index: number) => {
              return (
                <SwiperSlide
                  key={index}
                  className={`${index === 0 ? "active" : ""}`}
                  style={{
                    fontSize: "10px !important",
                    borderRadius: "10px",
                    height: "auto",
                    display: "grid",
                    alignItems: "center",
                  }}
                >
                  <div
                    className={mobileStyle.mobileSingleItem}
                    style={{ position: "relative" }}
                  >
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <Image
                        style={{
                          position: "relative",
                          zIndex: "1",
                          // marginTop: "50%",
                          // transform: "translateY(-50%)",
                          height: "auto",
                        }}
                        className={style.imageCover}
                        src={src}
                        width={300}
                        height={220}
                        alt={`Gallery Image ${index + 1}`}
                        quality={75}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div
          style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            height: "12vh",
            width: "100%",
            background: "rgba(34, 32, 32, 0.99)",
            zIndex: "10000",
            //overflow: "scroll",
            padding: "10px 15px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            slideToClickedSlide={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
            //centeredSlides={true}
            // thumbs={{
            //   swiper: thumbsSwiper,
            //   slideThumbActiveClass: "is-active",
            // }}
            //onSlideChange={(swiper) => setActiveThumb(swiper.activeIndex)}
            //style={{ marginTop: "50px" }}
          >
            {images.map((src: string, index: number) => {
              return (
                <SwiperSlide
                  key={index}
                  //className={`${index === 0 ? "active" : ""}`}
                  style={{
                    fontSize: "10px !important",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    className={`${mobileStyle.mobileSingleItem} `}
                    style={{ position: "relative" }}
                  >
                    <div style={{ position: "relative" }}>
                      <Image
                        style={{
                          position: "relative",
                          zIndex: "1",

                          //height: "auto",
                        }}
                        className={style.imageCover}
                        src={src}
                        width={70}
                        height={70}
                        alt={`Gallery Image ${index + 1}`}
                        quality={75}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
  }

  return;
};

export default MobileCarousel;

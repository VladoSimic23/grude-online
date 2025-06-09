"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import style from "../../../../css/style.module.css";
import mobileStyle from "../../../MobileComponents/MobileHomepage/Css/mobileHomepage.module.css";
import "../../../Swiper/swiperCustomCssPost.css";
import defaultImage from "../../../../../public/noImage.jpg";

// Swiper
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
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/zoom";

const DesktopCarousel = ({
  images,
  postId,
  mainImg,
}: {
  images: string[];
  title: string;
  postId: string;
  mainImg: string;
}) => {
  const [displayGallery, setDisplayGallery] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [thumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSrc, setCurrentSrc] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  // Open gallery handler
  const openGallery = (index: number) => {
    setActiveIndex(index);
    setCurrentSrc(images[index]); // <-- update currentSrc
    setDisplayGallery(true);
    window.location.hash = "gallery";

    setTimeout(() => {
      if (swiperRef.current?.slideToLoop) {
        swiperRef.current.slideToLoop(index);
      }
    }, 100);
  };

  const openGalleryWithoutIndex = () => {
    setDisplayGallery(true);
    // Update the URL hash to indicate gallery is open
    window.location.hash = "gallery";
  };

  // Close gallery handler
  const closeGallery = () => {
    setDisplayGallery(false);
    // Remove the hash to indicate gallery is closed
    window.location.hash = "";
  };

  useEffect(() => {
    // Listen for changes in the URL hash
    const handleHashChange = () => {
      if (window.location.hash === "#gallery") {
        setDisplayGallery(true);
      } else {
        setDisplayGallery(false);
      }
    };

    // Attach the event listener to hashchange
    window.addEventListener("hashchange", handleHashChange);

    // Check the initial state when the component mounts
    if (window.location.hash === "#gallery") {
      setDisplayGallery(true);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const shareImageViaWhatsApp = () => {
    const message = `Pogledaj ovu sliku: ${currentSrc}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <Image
        className={`${style.imageContain} mt-4 mb-4`}
        onClick={openGalleryWithoutIndex}
        style={{
          height: "auto",
          position: "relative",
          zIndex: "1",
          cursor: "pointer",
        }}
        src={mainImg ? mainImg : defaultImage}
        width={500}
        height={250}
        alt={`post image ${postId}`}
        priority={true}
        quality={75}
        fetchPriority="high"
        id={`post-image-${postId}`}
      />
      {/* Preview Thumbnails */}
      <div
        style={{
          marginTop: "-25px",
          position: "relative",
          display: "inline-block",
        }}
      >
        <div className="py-2 mb-4" style={{ display: "flex" }}>
          {images.slice(0, 4).map((img, index) => (
            <div
              key={index}
              onClick={() => openGallery(index)}
              style={{ cursor: "pointer" }}
              className="p-1"
            >
              <Image
                src={img}
                alt="thumbnail"
                width={100}
                height={70}
                style={{ objectFit: "cover", maxWidth: "100%" }}
                quality={20}
                priority
              />
            </div>
          ))}
        </div>
        <div
          onClick={openGalleryWithoutIndex}
          style={{
            position: "absolute",
            bottom: "15px",
            right: "-15px",
            color: "black",
            display: "inline-block",
            background: "white",
            padding: "7px 16px",
            border: "2px solid orange",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <h1
            style={{
              margin: "0",
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
            }}
            className={mobileStyle.h2Mobile}
          >
            {images.length}
          </h1>
        </div>
      </div>

      {/* Fullscreen Gallery */}
      {displayGallery && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100vh",
              width: "100%",
              background: "rgba(34, 32, 32)",
              zIndex: 10000,
              padding: "15px",
            }}
          >
            <div style={{ background: "transparent" }}>
              <button
                onClick={shareImageViaWhatsApp}
                style={{
                  backgroundColor: "#222020",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 2px 5px 2px",
                  color: "#cb7623",
                  fontWeight: 600,
                  fontSize: "24px",
                  cursor: "pointer",
                  position: "absolute",
                  left: "25px",
                  top: "15px",
                  zIndex: "200000",
                }}
                title="Podijeli putem WhatsAppa"
              >
                <i className="bi bi-share-fill"></i>
              </button>

              {/* <Image
                src="/Grude_online_Logotip2.png"
                alt="grudeOnlineLogo"
                width={330}
                height={42}
              /> */}

              <i
                onClick={closeGallery}
                className="bi bi-x-lg"
                style={{
                  color: "#008aa1",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "24px",
                  position: "absolute",
                  right: "25px",
                  top: "15px",
                  zIndex: "200000",
                }}
              ></i>
            </div>

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
              initialSlide={activeIndex}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              zoom={true}
              navigation
              pagination={{ type: "fraction" }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              onSlideChange={(swiper) => {
                const index = swiper.realIndex;
                setActiveIndex(index);
                setCurrentSrc(images[index]); // <-- update currentSrc
              }}
              scrollbar={{ draggable: true }}
              className="mySwiper"
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              {images.map((src: string, index: number) => (
                <SwiperSlide
                  key={index}
                  className={`${index === 0 ? "active" : ""}`}
                  style={{
                    fontSize: "10px !important",
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
                        marginTop: "-15%",
                      }}
                    >
                      <div className="swiper-zoom-container">
                        <Image
                          style={{
                            position: "relative",
                            zIndex: "1",
                            height: "auto !important",
                            marginTop: "200px",
                            width: "auto !important",
                            aspectRatio: "16/9",
                            maxHeight: "80vh",
                            borderRadius: "0",
                          }}
                          className={style.imageContain}
                          src={src}
                          width={1024}
                          height={800}
                          alt={`Gallery Image ${index + 1}`}
                          quality={75}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Thumbnails */}
          {/* <div
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              height: "12vh",
              width: "100%",
              background: "rgba(34, 32, 32, 0.99)",
              zIndex: 10000,
              padding: "10px 15px",
            }}
          >
            <Swiper
              onSwiper={setThumbsSwiper}
              loop
              spaceBetween={10}
              slidesPerView={4}
              freeMode
              watchSlidesProgress
              slideToClickedSlide
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {images.map((src, index) => (
                <SwiperSlide
                  key={index}
                  className={index === activeIndex ? "is-active" : ""}
                >
                  <div className={mobileStyle.mobileSingleItem}>
                    <Image
                      className={style.imageCover}
                      src={src}
                      width={70}
                      height={70}
                      alt={`Gallery Image ${index + 1}`}
                      quality={75}
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
        </>
      )}
    </div>
  );
};

export default DesktopCarousel;

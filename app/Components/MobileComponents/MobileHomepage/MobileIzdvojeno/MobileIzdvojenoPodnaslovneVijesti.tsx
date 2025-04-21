"use client";
import { IzdvojenoMobileI } from "@/app/libs/Queries/Queries/izdvojenoMobile";
import Image from "next/image";
import style from "../../../../css/style.module.css";
import Link from "next/link";
import { cheerioCheck } from "@/app/functions/cheerioCheck";
import mobileStyle from "../Css/mobileHomepage.module.css";
import "../../../Swiper/swiperCustomCss.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

const MobileIzdvojenoPodnaslovneVijesti = ({
  vijesti,
}: {
  vijesti: IzdvojenoMobileI[];
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      // autoplay={{
      //   delay: 6000,
      //   disableOnInteraction: false,
      // }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="mySwiper"
      //style={{ paddingTop: "30px" }}
    >
      {vijesti.map((item: IzdvojenoMobileI, index: number) => {
        const { hasIframe, hasImages, hasVideo } = cheerioCheck(item.content);
        return (
          <SwiperSlide
            key={index}
            className={`${index === 0 ? "active" : ""}`}
            style={{ fontSize: "10px !important" }}
          >
            <Link href={`/${item.slug}`} style={{ textDecoration: "none" }}>
              <div
                className={mobileStyle.mobileSingleItem}
                style={{ position: "relative" }}
              >
                {index < 3 && (
                  <Image
                    style={{ position: "absolute", zIndex: "-1" }}
                    className={style.imageCover}
                    src={item.featuredImage.node.sourceUrl}
                    width={300}
                    height={220}
                    alt={item.title}
                    priority={index < 3 ? true : false}
                    fetchPriority={index < 3 ? "high" : "low"}
                    quality={1}
                  />
                )}
                <Image
                  style={{
                    position: "relative",
                    zIndex: "1",
                    borderRadius: "0",
                  }}
                  className={style.imageCover}
                  src={item.featuredImage.node.sourceUrl}
                  width={300}
                  height={220}
                  alt={item.title}
                  quality={50}
                  //priority={index < 1 ? true : false}
                  //fetchPriority={index < 1 ? "high" : "low"}
                />

                <div
                  className={mobileStyle.mobileCommentCount2}
                  style={{
                    background: "#1e437d",
                    zIndex: "5",
                    borderRadius: "0",
                  }}
                >
                  {hasImages && <i className="bi bi-camera"></i>}
                  {hasVideo || (hasIframe && <i className="bi bi-youtube"></i>)}
                </div>
              </div>
              <div
                style={{
                  background: "#1e437d",
                  //borderRadius: "8px",
                  padding: "2px 5px 5px 5px",
                  //marginTop: "10px",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    margin: "5px 0",
                    fontSize: "20px",
                  }}
                  className={`${style.h3Mobile}`}
                >
                  {item?.title}
                </h1>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MobileIzdvojenoPodnaslovneVijesti;

"use client";
import { IzdvojenoMobileI } from "@/app/libs/Queries/Queries/izdvojenoMobile";
import Image from "next/image";
import React, { useState } from "react";
import style from "../../../../css/style.module.css";
import Link from "next/link";
import { cheerioCheck } from "@/app/functions/cheerioCheck";
import mobileStyle from "../Css/mobileHomepage.module.css";

const MobileIzdvojenoPodnaslovneVijesti = ({
  vijesti,
}: {
  vijesti: IzdvojenoMobileI[];
}) => {
  const [currentIndex] = useState(0);

  return (
    <div id="carouselExample" className="carousel slide" data-bs-touch="true">
      <div className="carousel-inner">
        {vijesti.map((item: IzdvojenoMobileI, index: number) => {
          const { hasIframe, hasImages, hasVideo } = cheerioCheck(item.content);
          return (
            <div
              key={index}
              className={`carousel-item  ${
                currentIndex === index ? "active" : ""
              }`}
            >
              <Link href={`/${item.slug}`} style={{ textDecoration: "none" }}>
                <div>
                  <div style={{ position: "relative" }}>
                    <Image
                      style={{
                        position: "absolute",
                        zIndex: "-1",
                        borderRadius: "10px",
                      }}
                      className={style.imageCover}
                      src={item.featuredImage.node.sourceUrl}
                      width={400}
                      height={220}
                      alt={`Naslovna ${index}`}
                      fetchPriority="high"
                      priority={true}
                      quality={1}
                    />
                    <Image
                      style={{
                        position: "relative",
                        zIndex: "1",
                        borderRadius: "10px",
                      }}
                      className={style.imageCover}
                      src={item.featuredImage.node.sourceUrl}
                      width={400}
                      height={220}
                      alt={`Naslovna ${index}`}
                      //fetchPriority="high"
                      //priority={true}
                      quality={50}
                    />

                    <div
                      className={mobileStyle.mobileCommentCount}
                      style={{
                        background: "#9d2013",
                        zIndex: "5",
                      }}
                    >
                      {hasImages && <i className="bi bi-camera"></i>}
                      {hasVideo ||
                        (hasIframe && <i className="bi bi-youtube"></i>)}
                    </div>
                  </div>

                  <h1 className={style.h4Mobile}>{item.title}</h1>
                </div>
              </Link>
            </div>
          );
        })}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          //style={{ alignItems: "flex-end" }}
          //onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          {" "}
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ marginBottom: "40px", backgroundImage: "none" }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          //style={{ alignItems: "flex-end" }}
          //onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          {" "}
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ marginBottom: "40px", backgroundImage: "none" }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        className="carousel-indicators"
        style={{
          top: "10px",
          left: "0",
          margin: "0",
          marginLeft: "10px",
          justifyContent: "left",
          height: "30px",
        }}
      >
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
          style={{
            background: "#9d2013",
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            border: "none",
          }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          style={{
            background: "#9d2013",
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            border: "none",
          }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          style={{
            background: "#9d2013",
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            border: "none",
          }}
        ></button>
      </div>
    </div>
  );
};

export default MobileIzdvojenoPodnaslovneVijesti;

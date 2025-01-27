import { IzdvojenoMobileI } from "@/app/libs/Queries/Queries/izdvojenoMobile";
import Image from "next/image";
import React from "react";
import style from "../../../../css/style.module.css";
import Link from "next/link";
import { cheerioCheck } from "@/app/functions/cheerioCheck";

const MobileIzdvojenoPodnaslovneVijesti = async ({
  vijest,
  index,
}: {
  vijest: IzdvojenoMobileI;
  index: number;
}) => {
  const {
    title,
    slug,
    content,
    featuredImage: {
      node: { sourceUrl },
    },
  } = vijest;

  const { hasIframe, hasImages, hasVideo } = cheerioCheck(content);

  return (
    <Link href={`/${slug}`} style={{ textDecoration: "none" }}>
      <div>
        <div style={{ position: "relative" }}>
          <Image
            className={style.imageCover}
            src={sourceUrl}
            width={150}
            height={100}
            alt={`Naslovna ${index}`}
            priority={true}
          />

          <span
            style={{
              position: "absolute",
              left: "0",
              bottom: "0",
              color: "white",
              background: "#4d1b97",
              display: "inline-grid",
              padding: "1px 10px",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            Izdvojeno
          </span>
          {hasImages && (
            <i
              style={{
                position: "absolute",
                right: !hasIframe && !hasVideo ? "0" : "26px",
                bottom: "0",
                color: "white",
                background: "#4d1b97",
                display: "inline-grid",
                padding: "3px 5px",
              }}
              className="bi bi-camera"
            ></i>
          )}
          {(hasIframe || hasVideo) && (
            <i
              style={{
                position: "absolute",
                right: "0",
                bottom: "0",
                color: "white",
                background: "#4d1b97",
                display: "inline-grid",
                padding: "3px 5px",
              }}
              className="bi bi-youtube"
            ></i>
          )}
        </div>
        <h1 className={style.h4Mobile}>{title}</h1>
      </div>
    </Link>
  );
};

export default MobileIzdvojenoPodnaslovneVijesti;

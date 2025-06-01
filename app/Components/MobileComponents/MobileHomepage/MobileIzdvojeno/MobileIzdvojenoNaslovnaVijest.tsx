import { IzdvojenoMobileI } from "@/app/libs/Queries/Queries/izdvojenoMobile";
import Image from "next/image";
import React from "react";
import style from "../../../../css/style.module.css";
import Link from "next/link";
import { cheerioCheck } from "@/app/functions/cheerioCheck";

const MobileIzdvojenoNaslovnaVijest = ({
  vijest,
}: {
  vijest: IzdvojenoMobileI;
}) => {
  const {
    title,
    slug,
    content,
    tags,
    featuredImage: {
      node: { sourceUrl },
    },
  } = vijest;

  const { hasImages, hasVideo } = cheerioCheck(content, tags);

  return (
    <div className="col-12">
      <Link href={`/${slug}`} style={{ textDecoration: "none" }}>
        <div style={{ position: "relative" }}>
          <Image
            style={{ position: "absolute", zIndex: "-1" }}
            className={style.imageCover}
            src={sourceUrl}
            width={400}
            height={200}
            alt={"Naslovna 1"}
            fetchPriority="high"
            priority={true}
            quality={1}
          />
          <Image
            style={{ position: "relative", zIndex: "1" }}
            className={style.imageCover}
            src={sourceUrl}
            width={400}
            height={200}
            alt={"Naslovna 1"}
            //fetchPriority="high"
            //priority={true}
            quality={50}
          />
          {hasImages && (
            <i
              style={{
                position: "absolute",
                right: !hasVideo ? "0" : "26px",
                bottom: "0",
                color: "white",
                background: "#4d1b97",
                display: "inline-grid",
                padding: "3px 5px",
                zIndex: "5",
              }}
              className="bi bi-camera"
            ></i>
          )}
          (hasVideo && (
          <i
            style={{
              position: "absolute",
              right: "0",
              bottom: "0",
              color: "white",
              background: "#4d1b97",
              display: "inline-grid",
              padding: "3px 5px",
              zIndex: "5",
            }}
            className="bi bi-youtube"
          ></i>
          ))
        </div>
        <div>
          <h1 className={style.h3Mobile}>{title}</h1>
        </div>
      </Link>
    </div>
  );
};

export default MobileIzdvojenoNaslovnaVijest;

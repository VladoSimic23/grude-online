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
    featuredImage: {
      node: { sourceUrl },
    },
  } = vijest;

  const { hasIframe, hasImages, hasVideo } = cheerioCheck(content);

  return (
    <div className="col-12">
      <Link href={`/${slug}`} style={{ textDecoration: "none" }}>
        <div style={{ position: "relative" }}>
          <Image
            className={style.imageCover}
            src={sourceUrl}
            width={400}
            height={200}
            alt={"Naslovna 1"}
            fetchPriority="high"
            priority={true}
            quality={50}
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
              fontSize: "14px",
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
          {hasIframe ||
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
                }}
                className="bi bi-youtube"
              ></i>
            ))}
        </div>
        <div>
          <h1 className={style.h3Mobile}>{title}</h1>
        </div>
      </Link>
    </div>
  );
};

export default MobileIzdvojenoNaslovnaVijest;

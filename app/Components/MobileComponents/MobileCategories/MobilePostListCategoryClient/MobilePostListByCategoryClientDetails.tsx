"use client";
import { PostsByCategoryI } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import Image from "next/image";
import React from "react";
import mobileStyle from "../../MobileHomepage/Css/mobileHomepage.module.css";
import style from "../../../../css/style.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import Link from "next/link";

const MobilePostListByCategoryClientDetails = ({
  props,
  index,
}: {
  props: PostsByCategoryI;
  index: number;
}) => {
  const {
    featuredImage: {
      node: { sourceUrl },
    },
    title,
    date,
    slug,
    comments: { nodes },
  } = props;

  return (
    <Link key={index} href={`/${slug}`} style={{ textDecoration: "none" }}>
      <div style={{ marginBottom: "60px" }}>
        <div className={mobileStyle.mobileSingleItem}>
          <Image
            className={style.imageCover}
            src={sourceUrl}
            width={300}
            height={200}
            alt={title}
          />
        </div>
        <h1 className={style.h4Mobile}>{title}</h1>
        <div className={mobileStyle.mobileDateAndComments}>
          <span className={mobileStyle.mobileSpan}>
            {formatDateToCroatian(date)}
          </span>

          <div className={mobileStyle.mobileComments}>
            <span
              style={{
                color: "white",
              }}
            >
              {nodes.length}
            </span>
            <i
              style={{
                color: "white",
              }}
              className="bi bi-chat-left-text"
            ></i>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MobilePostListByCategoryClientDetails;

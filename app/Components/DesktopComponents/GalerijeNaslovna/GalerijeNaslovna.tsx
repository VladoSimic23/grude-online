import { getPostsByCategorySmall } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import React from "react";
import Image from "next/image";
import defaultImage from "../../../../public/noImage.jpg";
import Link from "next/link";
import style from "../../../css/style.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import desktopStyle from "../css/desktop.module.css";

const GalerijeNaslovna = async () => {
  const data = await getPostsByCategorySmall("galerije", 4, "LARGE");
  const {
    posts: { nodes },
  } = data;

  return (
    <div className="mt-4">
      <div className={desktopStyle.decorUnderline}>
        <Link href="/category/galerije">
          <h1>Galerije</h1>
        </Link>
      </div>
      <div className="row g-0 gx-2">
        {nodes.map((item, index) => {
          const {
            title,
            featuredImage,
            slug,
            date,
            comments: { nodes },
          } = item;

          return (
            <div key={index} className="col-md-6 p-1">
              <Link href={`/${slug}`}>
                <div className="position-relative">
                  <div className={desktopStyle.desktopOverlay}></div>
                  <Image
                    className={style.imageCover}
                    src={
                      featuredImage?.node?.sourceUrl
                        ? featuredImage?.node?.sourceUrl
                        : defaultImage
                    }
                    width={350}
                    height={246}
                    priority={true}
                    alt={`Ilustracija članka: ${title}`}
                  />
                  <div
                    className={`position-absolute bottom-0 p-3 ${desktopStyle.dateAndComment}`}
                  >
                    <h1 className={`${style.h4Mobile}`}>{title}</h1>
                    <div style={{ color: "white", fontSize: "14px" }}>
                      <span>{formatDateToCroatian(date)}</span> |{" "}
                      <span>
                        {nodes.length} <i className="bi bi-chat-left-text"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalerijeNaslovna;

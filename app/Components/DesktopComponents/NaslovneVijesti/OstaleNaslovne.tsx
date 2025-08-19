import { getPostsByCategorySmall } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import React from "react";
import Image from "next/image";
import defaultImage from "../../../../public/noImage.jpg";
import Link from "next/link";
import style from "../../../css/style.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import desktopStyle from "../css/desktop.module.css";
import { cheerioCheck } from "@/app/functions/cheerioCheck";

const OstaleNaslovne = async () => {
  const data = await getPostsByCategorySmall("izdvojeno", 3, "LARGE");
  const {
    posts: { nodes },
  } = data;

  // const isVideo = true;
  // const isImage = true;

  return (
    <div className={`row gap-0`} style={{ marginTop: "-3px" }}>
      {nodes.map((item, index) => {
        const {
          title,
          featuredImage,
          slug,
          date,
          content,
          tags,
          comments: { nodes },
        } = item;
        const { hasImages, hasVideo } = cheerioCheck(content, tags);
        if (index !== 0) {
          return (
            <div
              key={index}
              className={`col-md-12 p-1 ${desktopStyle.ostaleNaslovneChild}`}
            >
              <Link href={`/${slug}`} className="text-decoration-none">
                <div className="row">
                  {/* <div className={desktopStyle.desktopOverlay}></div> */}
                  <div className="col-12">
                    <div className="position-relative">
                      {hasImages && (
                        <div
                          style={{ fontSize: "20px" }}
                          className={desktopStyle.desktopImage}
                        >
                          <i className="bi bi-camera"></i>
                        </div>
                      )}
                      {hasVideo && (
                        <div
                          className={desktopStyle.desktopVideo}
                          style={
                            hasImages
                              ? { right: "90px", fontSize: "20px" }
                              : { right: "10px", fontSize: "20px" }
                          }
                        >
                          <i className="bi bi-youtube"></i>
                        </div>
                      )}
                      <Image
                        className={`${style.imageCover} rounded-3`}
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
                    </div>
                  </div>
                  <div
                    className={`bottom-0 p-3 ${desktopStyle.dateAndComment} col-12 d-flex flex-column justify-content-center`}
                  >
                    <h1
                      className={`${style.h3Desktop}`}
                      style={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        marginTop: "0",
                      }}
                    >
                      {title}
                    </h1>
                    <div style={{ color: "black", fontSize: "14px" }}>
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
        }
      })}
    </div>
  );
};

export default OstaleNaslovne;

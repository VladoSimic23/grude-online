import { getPostsByCategorySmall } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import { getRecentPostSlugs } from "@/app/libs/Queries/Queries/recentPosts";
import React from "react";
import styles from "../../../css/style.module.css";
import mobileStyle from "../MobileHomepage/Css/mobileHomepage.module.css";
import Link from "next/link";
import defaultImage from "../../../../public/noImage.jpg";
import Image from "next/image";
import { decodeHTMLEntities } from "@/app/functions/decodeHtml";

const MobilePromoTest = async () => {
  const naja = await getRecentPostSlugs(10);
  const promoNews = await getPostsByCategorySmall(
    "sport",
    6,
    "THUMBNAIL",
    naja
  );
  const {
    posts: { nodes },
  } = promoNews;

  return (
    <div style={{ marginBottom: "50px" }}>
      <h1
        className={styles.h2Mobile}
        style={{ borderBottom: "2px solid #ea8a2b", display: "inline-block" }}
      >
        Promo
      </h1>

      <div className="row">
        {nodes.map((item, index: number) => {
          return (
            <div
              key={index}
              className={`${mobileStyle.slideTestChild} col-6 mb-2`}
            >
              <Link href={`/${item?.slug}`}>
                <div
                  className={mobileStyle.slideTestChildWrap}
                  //style={{ paddingRight: "0px" }}
                >
                  <Image
                    src={
                      item?.featuredImage.node.sourceUrl
                        ? item?.featuredImage.node.sourceUrl
                        : defaultImage
                    }
                    width={150}
                    height={100}
                    alt={`Popular Post Image ${index}`}
                    quality={20}
                    priority={false}
                    loading={"lazy"}
                    className="w-100"
                  />

                  {/* <CommentCount
                    slug={item?.slug}
                    color="white"
                    fontSize="12px"
                  /> */}
                </div>
                <h1 className={styles.h5Mobile}>
                  {decodeHTMLEntities(item?.title)}
                </h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobilePromoTest;

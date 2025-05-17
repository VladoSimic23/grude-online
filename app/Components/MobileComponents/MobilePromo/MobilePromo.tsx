import mobileStyle from "../MobileHomepage/Css/mobileHomepage.module.css";
import styles from "../../../css/style.module.css";
import Image from "next/image";
import { decodeHTMLEntities } from "@/app/functions/decodeHtml";
import Link from "next/link";
//import CommentCount from "../../CommentCount/CommentCount";
import defaultImage from "../../../../public/noImage.jpg";
import { getPostsByCategorySmall2 } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import { getRecentPostSlugs } from "@/app/libs/Queries/Queries/recentPosts";

const MobilePromo = async () => {
  const naja = await getRecentPostSlugs(10);
  const promoNews = await getPostsByCategorySmall2("sport", 6, "MEDIUM", naja);
  const {
    posts: { nodes },
  } = promoNews;

  return (
    <div
      className={mobileStyle.slideTestParent}
      style={{ margin: "25px 0 30px 0" }}
    >
      <div>
        <h1
          className={styles.h2Mobile}
          style={{ borderBottom: "2px solid #ea8a2b" }}
        >
          <span style={{ color: "#ea8a2b", fontFamily: "Barlow Condensed" }}>
            P
          </span>
          romo
        </h1>
      </div>
      <div className={mobileStyle.slideTest}>
        {nodes.map((item, index: number) => {
          return (
            <div key={index} className={mobileStyle.slideTestChild}>
              <Link href={`/${item?.slug}`}>
                <div className={mobileStyle.slideTestChildWrap}>
                  <Image
                    src={
                      item?.featuredImage.node.sourceUrl
                        ? item?.featuredImage.node.sourceUrl
                        : defaultImage
                    }
                    width={200}
                    height={130}
                    alt={`Popular Post Image ${index}`}
                    quality={20}
                    priority={false}
                    loading={"lazy"}
                  />

                  {/* <CommentCount
                    slug={item?.slug}
                    color="white"
                    fontSize="12px"
                  /> */}
                </div>
                <h1 className={styles.h2Mobile} style={{ fontSize: "20px" }}>
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

export default MobilePromo;

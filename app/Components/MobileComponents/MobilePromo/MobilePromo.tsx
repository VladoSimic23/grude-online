import mobileStyle from "../MobileHomepage/Css/mobileHomepage.module.css";
import styles from "../../../css/style.module.css";
import Image from "next/image";
import { decodeHTMLEntities } from "@/app/functions/decodeHtml";
import Link from "next/link";
//import CommentCount from "../../CommentCount/CommentCount";
import defaultImage from "../../../../public/noImage.jpg";
import { getPostsByCategorySmall } from "@/app/libs/Queries/Queries/postsByCategorySmall";

const MobilePromo = async () => {
  const promoNews = await getPostsByCategorySmall("sport", 4, "THUMBNAIL");
  const {
    posts: { nodes },
  } = promoNews;

  return (
    <div className={mobileStyle.slideTestParent} style={{ margin: "50px 0" }}>
      <div>
        <h1
          className={styles.h2Mobile}
          style={{ borderBottom: "2px solid #ea8a2b" }}
        >
          Promo
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
                    width={150}
                    height={100}
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

export default MobilePromo;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchPopularPosts } from "@/app/libs/Queries/FetchFunction/fetchPopularPosts";
import mobileStyle from "../MobileHomepage/Css/mobileHomepage.module.css";
import styles from "../../../css/style.module.css";
import Image from "next/image";
import { decodeHTMLEntities } from "@/app/functions/decodeHtml";
import Link from "next/link";
import CommentCount from "../../CommentCount/CommentCount";
import defaultImage from "../../../../public/noImage.jpg";

const MobilePopularno = async () => {
  const popular = await fetchPopularPosts();

  return (
    <div className={mobileStyle.slideTestParent} style={{ margin: "50px 0" }}>
      <div>
        <h1 className={styles.h2Mobile}>Popularno</h1>
      </div>
      <div className={mobileStyle.slideTest}>
        {popular?.slice(0, 6).map((item: any, index: number) => {
          return (
            <div key={index} className={mobileStyle.slideTestChild}>
              <Link href={`/${item?.slug}`}>
                <div className={mobileStyle.slideTestChildWrap}>
                  <Image
                    src={
                      item?.featured_image?.source_url
                        ? item?.featured_image?.source_url
                        : defaultImage
                    }
                    width={150}
                    height={100}
                    alt={`Popular Post Image ${index}`}
                    quality={20}
                    priority={false}
                    loading={"lazy"}
                  />

                  <CommentCount
                    slug={item?.slug}
                    color="white"
                    fontSize="12px"
                  />
                </div>
                <h1 className={styles.h5Mobile}>
                  {decodeHTMLEntities(item?.title?.rendered)}
                </h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobilePopularno;

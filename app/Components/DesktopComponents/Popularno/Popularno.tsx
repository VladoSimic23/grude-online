import { fetchPopularPosts } from "@/app/libs/Queries/FetchFunction/fetchPopularPosts";
import styles from "../../../css/style.module.css";
import Image from "next/image";
import { decodeHTMLEntities } from "@/app/functions/decodeHtml";
import Link from "next/link";
import CommentCount from "../../CommentCount/CommentCount";
import defaultImage from "../../../../public/noImage.jpg";
import desktopStyle from "../../DesktopComponents/css/desktop.module.css";

const Popularno = async () => {
  const popular = await fetchPopularPosts();

  return (
    <div className={desktopStyle.desktopPopularno}>
      <h1
        className={styles.h3Desktop}
        style={{
          display: "inline-block",
          borderBottom: "3px solid #ffa700",
          paddingBottom: "5px",
          fontFamily: "Barlow Condensed",
          fontWeight: "600",
        }}
      >
        Popularno
      </h1>
      <div>
        {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
        {popular?.slice(0, 6).map((item: any, index) => {
          return (
            <div key={index}>
              <Link
                href={`/${item?.slug}`}
                className="text-black text-decoration-none"
              >
                <div className="row mt-3">
                  <div className="col-4 mb-3">
                    <Image
                      src={
                        item?.featured_image?.source_url
                          ? item?.featured_image?.source_url
                          : defaultImage
                      }
                      width={150}
                      height={80}
                      alt={`Ilustracija članka: ${decodeHTMLEntities(
                        item?.title?.rendered
                      )}`}
                      quality={40}
                      priority={false}
                      loading={"lazy"}
                      className={styles.imageCover}
                    />
                  </div>
                  <div className="col-8 ">
                    <h1
                      className={`${styles.h5Desktop} mt-0 mb-0`}
                      style={{ fontSize: "16px", fontWeight: "600" }}
                    >
                      {decodeHTMLEntities(item?.title?.rendered)}
                    </h1>
                    <CommentCount
                      slug={item?.slug}
                      color="black"
                      fontSize="12px"
                    />
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

export default Popularno;

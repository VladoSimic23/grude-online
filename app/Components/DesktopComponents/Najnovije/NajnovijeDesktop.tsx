//import styles from "../../../css/style.module.css";
import Image from "next/image";
import Link from "next/link";
//import desktopStyle from "../css/desktop.module.css";
import style from "../../../css/style.module.css";
import defaultImage from "../../../../public/noImage.jpg";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import {
  getRecentPostsHomepage,
  RecentPostsSourceI,
} from "@/app/libs/Queries/Queries/recentPosts";
import { cheerioCheck } from "@/app/functions/cheerioCheck";
import desktopStyle from "./../css/desktop.module.css";

const NajnovijeDesktop = async () => {
  const najnovije: RecentPostsSourceI = await getRecentPostsHomepage(6);

  const {
    posts: { nodes },
  } = najnovije;

  return (
    <div className="mt-4">
      <div className="text-decoration-none">
        <h1
          className={`${style.h2Desktop}`}
          style={{
            borderBottom: "3px solid #362295",
            display: "inline-block",
            marginBottom: "25px",
            paddingBottom: "5px",
            //color: "darkmagenta",
          }}
        >
          Najnovije
        </h1>
      </div>

      <div className="row g-0 gx-2">
        {nodes.map((item, index) => {
          const { slug, featuredImage, title, date, content, tags } = item;
          const { hasImages, hasVideo } = cheerioCheck(content, tags);
          return (
            <div key={index} className="col-4">
              <Link href={`/${slug}`} className="text-decoration-none">
                <div className="position-relative">
                  <div
                    style={{ position: "absolute", top: "5px", left: "5px" }}
                  >
                    <span
                      style={{
                        color: "white",
                        background: "#362295",
                        padding: "2px 15px 4px 15px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        borderRadius: "5px",
                      }}
                    >
                      {index + 1}
                    </span>
                  </div>
                  {hasImages && (
                    <div
                      style={{
                        fontSize: "16px",
                        padding: "2px 8px",
                        background: "#362295",
                      }}
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
                          ? {
                              right: "50px",
                              padding: "2px 8px",
                              fontSize: "16px",
                              background: "#362295",
                            }
                          : {
                              right: "10px",
                              padding: "2px 8px",
                              fontSize: "16px",
                              background: "#362295",
                            }
                      }
                    >
                      <i className="bi bi-youtube"></i>
                    </div>
                  )}

                  <Image
                    className={style.imageCover}
                    src={
                      featuredImage?.node?.sourceUrl
                        ? featuredImage?.node?.sourceUrl
                        : defaultImage
                    }
                    width={300}
                    height={220}
                    priority={true}
                    alt={`Ilustracija članka: ${title}`}
                  />
                </div>
                <h1 className={`${style.h5Desktop}`}>{title}</h1>
                <p style={{ color: "black" }} className="mt-2">
                  {formatDateToCroatian(date)}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    // <div style={{ marginTop: "60px" }}>
    //   <h1 className={styles.h4Desktop}>Promo</h1>
    //   <div>
    //     {nodes.map((item, index) => {
    //       const { title, featuredImage, slug } = item;
    //       return (
    //         <div key={index}>
    //           <Link
    //             href={`/${slug}`}
    //             className="text-black text-decoration-none"
    //           >
    //             <div className="row mt-3 border-bottom">
    //               <div className="col-4 mb-3">
    //                 <Image
    //                   src={featuredImage?.node?.sourceUrl}
    //                   width={150}
    //                   height={80}
    //                   alt={`Promo Post Image ${index}`}
    //                   quality={40}
    //                   priority={false}
    //                   loading={"lazy"}
    //                   className={styles.imageCover}
    //                 />
    //               </div>
    //               <div className="col-8 ">
    //                 <h1
    //                   className={`${styles.h5Desktop} mt-0 mb-0`}
    //                   style={{ fontSize: "16px", fontWeight: "600" }}
    //                 >
    //                   {title}
    //                 </h1>
    //               </div>
    //             </div>
    //           </Link>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default NajnovijeDesktop;

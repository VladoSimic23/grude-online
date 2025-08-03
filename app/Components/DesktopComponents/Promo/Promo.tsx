//import styles from "../../../css/style.module.css";
import Image from "next/image";
import Link from "next/link";
import { getPostsByCategorySmall } from "@/app/libs/Queries/Queries/postsByCategorySmall";
//import desktopStyle from "../css/desktop.module.css";
import style from "../../../css/style.module.css";
import defaultImage from "../../../../public/noImage.jpg";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";

const Promo = async () => {
  const promoNews = await getPostsByCategorySmall("promo", 6, "LARGE");
  const {
    posts: { nodes },
  } = promoNews;

  return (
    <div className="mt-4">
      <div className="text-decoration-none">
        <Link href="/category/lifestyle">
          <h1
            className={`${style.h2Desktop}`}
            style={{
              borderBottom: "3px solid royalblue",
              display: "inline-block",
              marginBottom: "25px",
              paddingBottom: "5px",
              //color: "darkmagenta",
            }}
          >
            Promo
          </h1>
        </Link>
      </div>

      <div className="row g-0 gx-2">
        {nodes.map((item, index) => {
          const { slug, featuredImage, title, date } = item;
          return (
            <div key={index} className="col-4">
              <Link href={`/${slug}`} className="text-decoration-none">
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
                  alt={`Lifestyle ${index + 1}`}
                />
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

export default Promo;

import { fetchPopularPosts } from "@/app/libs/Queries/FetchFunction/fetchPopularPosts";
import styles from "../../../css/style.module.css";
import Image from "next/image";
import { decodeHTMLEntities } from "@/app/functions/decodeHtml";
import Link from "next/link";
import CommentCount from "../../CommentCount/CommentCount";
import defaultImage from "../../../../public/noImage.jpg";

const Popularno = async () => {
  const popular = await fetchPopularPosts();

  return (
    <div>
      <h1 className={styles.h4Desktop}>Popularno</h1>
      <div>
        {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
        {popular?.slice(0, 6).map((item: any, index) => {
          return (
            <div key={index}>
              <Link
                href={`/${item?.slug}`}
                className="text-black text-decoration-none"
              >
                <div className="row mt-3 border-bottom">
                  <div className="col-4 mb-3">
                    <Image
                      src={
                        item?.featured_image?.source_url
                          ? item?.featured_image?.source_url
                          : defaultImage
                      }
                      width={150}
                      height={80}
                      alt={`Popular Post Image ${index}`}
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

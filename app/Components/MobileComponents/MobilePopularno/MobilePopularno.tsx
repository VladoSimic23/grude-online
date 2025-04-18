import style from "../../../css/style.module.css";
import Image from "next/image";
import { fetchPopularPosts } from "@/app/libs/Queries/FetchFunction/fetchPopularPosts";
import Link from "next/link";
import defaultImage from "../../../../public/noImage.jpg";
import CommentCount from "../../CommentCount/CommentCount";
import mobileStyle from "../MobileHomepage/Css/mobileHomepage.module.css";

const MobilePopularno = async () => {
  const popular = await fetchPopularPosts();

  return (
    <div>
      <h1
        className={`${style.h2Mobile} d-inline-block pb-1`}
        style={{ borderBottom: `2px solid royalblue` }}
      >
        Popularno
      </h1>
      {popular?.slice(0, 4).map((item, index) => {
        return (
          <div key={index} className={mobileStyle.slideTestChild}>
            <Link
              key={index}
              href={`/${item?.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{ marginBottom: "20px" }}
                className="row align-items-center"
              >
                <div className="col-5">
                  <div className={mobileStyle.slideTestChildWrap}>
                    <Image
                      className={style.imageCover}
                      src={
                        item?.featured_image?.source_url
                          ? item?.featured_image?.source_url
                          : defaultImage
                      }
                      width={80}
                      height={80}
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
                </div>
                <div className="col-7">
                  <h1 className={style.h6Mobile}>{item?.title?.rendered}</h1>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MobilePopularno;

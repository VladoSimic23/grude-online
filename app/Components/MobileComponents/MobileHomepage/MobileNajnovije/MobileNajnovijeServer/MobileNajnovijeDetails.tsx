import { RecentPostsI } from "@/app/libs/Queries/Queries/recentPosts";
import style from "../../../../../css/style.module.css";
import mobileStyle from "../../Css/mobileHomepage.module.css";
import Image from "next/image";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import { matchColors } from "@/app/functions/categoryColors";
import { cheerioCheck } from "@/app/functions/cheerioCheck";
//import Link from "next/link";
import CommentLink from "@/app/Components/Comments/CommentsLink";

const MobileNajnovijeDetails = ({
  props,
  index,
}: {
  props: RecentPostsI;
  index: number;
}) => {
  const {
    featuredImage: {
      node: { sourceUrl },
    },
    title,
    date,
    content,
    slug,
    tags,
    categories: { edges },
    comments: { nodes },
  } = props;

  const theCategoryColor = edges[0]?.node?.slug;
  const { hasImages, hasVideo } = cheerioCheck(content, tags);
  const hasPromo = edges.some((item) => item.node.slug === "promo");

  return (
    <>
      <a href={`/${slug}`} style={{ textDecoration: "none" }}>
        <div
          style={{ marginBottom: "30px" }}
          className={mobileStyle.landscapeView}
        >
          <div
            className={mobileStyle.mobileSingleItem}
            style={{ position: "relative" }}
          >
            {index < 3 && (
              <Image
                style={{
                  position: "absolute",
                  zIndex: "-1",
                  borderRadius: "10px",
                }}
                className={style.imageCover}
                src={sourceUrl}
                width={300}
                height={200}
                alt={title}
                priority={index < 3 ? true : false}
                fetchPriority={index < 3 ? "high" : "low"}
                quality={1}
              />
            )}
            <Image
              style={{
                position: "relative",
                zIndex: "1",
                borderRadius: "10px",
              }}
              className={style.imageCover}
              src={sourceUrl}
              width={300}
              height={200}
              alt={title}
              quality={50}
              priority={index < 2 ? true : false}
              fetchPriority={index < 2 ? "high" : "low"}
            />
            {hasPromo && (
              <div
                className={mobileStyle.mobileCategoryOverlay}
                style={{ background: "royalblue", zIndex: "5" }}
              >
                <span>Oglas</span>
              </div>
            )}
            <div
              className={mobileStyle.mobileCommentCount}
              style={{ background: matchColors(theCategoryColor), zIndex: "5" }}
            >
              {hasImages && <i className="bi bi-camera"></i>}
              {hasVideo && <i className="bi bi-youtube"></i>}
            </div>
          </div>
          <div className={mobileStyle.landscapeViewChild}>
            <h1 className={style.h3Mobile}>{title}</h1>
            <div className={mobileStyle.mobileDateAndComments}>
              <span
                className={mobileStyle.mobileSpan}
                style={{
                  borderBottom: `2px solid ${
                    hasPromo ? "royalblue" : matchColors(theCategoryColor)
                  }`,
                  paddingBottom: "5px",
                }}
              >
                {formatDateToCroatian(date)}
              </span>

              {hasPromo ? (
                ""
              ) : (
                <CommentLink
                  slug={slug}
                  color={theCategoryColor}
                  length={nodes?.length}
                />
              )}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default MobileNajnovijeDetails;

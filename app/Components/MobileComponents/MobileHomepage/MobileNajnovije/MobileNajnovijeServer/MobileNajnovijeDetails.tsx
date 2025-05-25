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
    categories: { edges },
    comments: { nodes },
  } = props;

  const theCategoryColor = edges[0]?.node?.slug;
  const { hasIframe, hasImages, hasVideo } = cheerioCheck(content);

  return (
    <>
      <a href={`/${slug}`} style={{ textDecoration: "none" }}>
        <div style={{ marginBottom: "30px" }}>
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
              //priority={index < 1 ? true : false}
              //fetchPriority={index < 1 ? "high" : "low"}
            />
            {/* <div
            className={mobileStyle.mobileCategoryOverlay}
            style={{ background: matchColors(theCategoryColor), zIndex: "5" }}
          >
            <span>{theCategoryColor}</span>
          </div> */}
            <div
              className={mobileStyle.mobileCommentCount}
              style={{ background: matchColors(theCategoryColor), zIndex: "5" }}
            >
              {hasImages && <i className="bi bi-camera"></i>}
              {hasVideo || (hasIframe && <i className="bi bi-youtube"></i>)}
            </div>
          </div>
          <h1 className={style.h3Mobile}>{title}</h1>
          <div className={mobileStyle.mobileDateAndComments}>
            <span
              className={mobileStyle.mobileSpan}
              style={{
                borderBottom: `2px solid ${matchColors(theCategoryColor)}`,
              }}
            >
              {formatDateToCroatian(date)}
            </span>

            <CommentLink
              slug={slug}
              color={theCategoryColor}
              length={nodes?.length}
            />
            {/* <div
            className={mobileStyle.mobileComments}
            onClick={handleClick}
            style={{
              borderBottom: `2px solid ${matchColors(theCategoryColor)}`,
            }}
          >
            <span
              style={{
                color: "white",
              }}
            >
              {nodes.length}
            </span>
            <i
              style={{
                color: "white",
              }}
              className="bi bi-chat-left-text"
            ></i>
          </div> */}
          </div>
        </div>
      </a>
    </>
  );
};

export default MobileNajnovijeDetails;

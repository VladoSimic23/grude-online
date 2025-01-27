import { RecentPostsI } from "@/app/libs/Queries/Queries/recentPosts";
import style from "../../../../../css/style.module.css";
import mobileStyle from "../../Css/mobileHomepage.module.css";
import Image from "next/image";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import { matchColors } from "@/app/functions/categoryColors";
import { cheerioCheck } from "@/app/functions/cheerioCheck";
import Link from "next/link";

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
    <Link href={`/${slug}`} style={{ textDecoration: "none" }}>
      <div style={{ marginBottom: "60px" }}>
        <div className={mobileStyle.mobileSingleItem}>
          <Image
            className={style.imageCover}
            src={sourceUrl}
            width={300}
            height={200}
            alt={title}
            priority={index < 1 ? true : false}
            fetchPriority={index < 1 ? "high" : "low"}
          />
          <div
            className={mobileStyle.mobileCategoryOverlay}
            style={{ background: matchColors(theCategoryColor) }}
          >
            <span>{theCategoryColor}</span>
          </div>
          <div
            className={mobileStyle.mobileCommentCount}
            style={{ background: matchColors(theCategoryColor) }}
          >
            {hasImages && <i className="bi bi-camera"></i>}
            {hasVideo || (hasIframe && <i className="bi bi-youtube"></i>)}
          </div>
        </div>
        <h1 className={style.h4Mobile}>{title}</h1>
        <div className={mobileStyle.mobileDateAndComments}>
          <span
            className={mobileStyle.mobileSpan}
            style={{
              borderBottom: `1px solid ${matchColors(theCategoryColor)}`,
            }}
          >
            {formatDateToCroatian(date)}
          </span>

          <div
            className={mobileStyle.mobileComments}
            style={{
              borderBottom: `1px solid ${matchColors(theCategoryColor)}`,
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MobileNajnovijeDetails;

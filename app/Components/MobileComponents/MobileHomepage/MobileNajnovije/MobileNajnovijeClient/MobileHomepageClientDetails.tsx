"use client";
import { cheerioCheck } from "@/app/functions/cheerioCheck";
import { RecentPostsI } from "@/app/libs/Queries/Queries/recentPosts";
import style from "../../../../../css/style.module.css";
import mobileStyle from "../../Css/mobileHomepage.module.css";
import Image from "next/image";
import { matchColors } from "@/app/functions/categoryColors";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import Link from "next/link";
import CommentLink from "@/app/Components/Comments/CommentsLink";

const MobileHomepageClientDetails = ({
  props,
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
      <div style={{ marginBottom: "30px" }}>
        <div className={mobileStyle.mobileSingleItem}>
          <Image
            style={{ borderRadius: "10px" }}
            className={style.imageCover}
            src={sourceUrl}
            width={300}
            height={200}
            alt={title}
          />
          {/* <div
            className={mobileStyle.mobileCategoryOverlay}
            style={{ background: matchColors(theCategoryColor) }}
          >
            <span>{theCategoryColor}</span>
          </div> */}
          <div
            className={mobileStyle.mobileCommentCount}
            style={{ background: matchColors(theCategoryColor) }}
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
        </div>
      </div>
    </Link>
  );
};

export default MobileHomepageClientDetails;

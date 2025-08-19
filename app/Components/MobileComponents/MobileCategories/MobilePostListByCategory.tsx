import { PostsByCategorySourceI } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import Image from "next/image";
import style from "../../../css/style.module.css";
import mobileStyle from "../MobileHomepage/Css/mobileHomepage.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import Link from "next/link";
import CommentLink from "../../Comments/CommentsLink";

const MobilePostListByCategory = ({
  data,
}: {
  data: PostsByCategorySourceI;
}) => {
  const {
    posts: { nodes },
  } = data;

  return (
    <div style={{ color: "white" }}>
      {nodes.map((item, index) => {
        const {
          title,
          date,
          slug,
          comments: { nodes },
          featuredImage: {
            node: { sourceUrl },
          },
        } = item;
        return (
          <Link
            key={index}
            href={`/${slug}`}
            style={{ textDecoration: "none" }}
          >
            <div style={{ marginBottom: "60px" }}>
              <div className={mobileStyle.mobileSingleItem}>
                <Image
                  className={style.imageCover}
                  src={sourceUrl}
                  width={300}
                  height={200}
                  alt={`Ilustracija članka: ${title}`}
                  priority={index < 3 ? true : false}
                />
              </div>
              <h1 className={style.h4Mobile}>{title}</h1>
              <div className={mobileStyle.mobileDateAndComments}>
                <span className={mobileStyle.mobileSpan}>
                  {formatDateToCroatian(date)}
                </span>

                <CommentLink
                  slug={slug}
                  color={"black"}
                  length={nodes?.length}
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MobilePostListByCategory;

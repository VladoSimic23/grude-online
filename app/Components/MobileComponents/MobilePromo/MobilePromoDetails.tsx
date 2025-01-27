import { PostsByCategoryI } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import mobileStyle from "../MobileHomepage/Css/mobileHomepage.module.css";
import style from "../../../css/style.module.css";
import Image from "next/image";
import { matchColors } from "@/app/functions/categoryColors";
import Link from "next/link";

const MobilePromoDetails = ({
  props,
  index,
}: {
  props: PostsByCategoryI;
  index: number;
}) => {
  const {
    featuredImage: {
      node: { sourceUrl },
    },
    title,
    slug,
    categories: { edges },
  } = props;

  const theCategoryColor = edges[0]?.node?.slug;

  return (
    <Link href={`/${slug}`} style={{ textDecoration: "none" }}>
      <div style={{ marginBottom: "30px" }} className="row align-items-center">
        <div className="col-6">
          <h2 className={style.h4Mobile}>{title}</h2>
          <span
            className={mobileStyle.mobilePromoBanner}
            style={{
              background: matchColors(theCategoryColor),
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {theCategoryColor}
          </span>
        </div>
        <div className="col-6">
          <Image
            className={style.imageCover}
            src={sourceUrl}
            width={150}
            height={100}
            alt={`Promo Img ${index}`}
          />
        </div>
      </div>
    </Link>
  );
};

export default MobilePromoDetails;

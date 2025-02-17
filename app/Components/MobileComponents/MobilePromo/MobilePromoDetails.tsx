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
        <div className="col-4">
          <Image
            className={style.imageCover}
            src={sourceUrl}
            width={80}
            height={80}
            quality={20}
            alt={`Promo Img ${index}`}
          />
        </div>
        <div className="col-8">
          <h1 className={style.h5Mobile}>{title}</h1>
          <div>
            <span
              className={mobileStyle.mobilePromoBanner}
              style={{
                background: matchColors(theCategoryColor),
                textTransform: "uppercase",
                letterSpacing: "1px",
                display: "inline",
                padding: "3px 5px",
              }}
            >
              {theCategoryColor}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MobilePromoDetails;

import { getPostsByCategorySmall } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import Link from "next/link";
import Image from "next/image";
import defaultImage from "../../../../public/noImage.jpg";
import style from "../../../css/style.module.css";
//import desktopStyle from "../css/desktop.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";

const OstaleVijesti = async () => {
  const data = await getPostsByCategorySmall("ostale-vijesti", 6, "LARGE");
  const {
    posts: { nodes },
  } = data;

  return (
    <div className="mt-4">
      <div>
        <Link href="/category/ostale-vijesti" className="text-decoration-none">
          <h1
            className={`${style.h2Desktop}`}
            style={{
              borderBottom: "3px solid darkslateblue",
              display: "inline-block",
              marginBottom: "25px",
              paddingBottom: "5px",
              //color: "darkmagenta",
            }}
          >
            Ostale Vijesti
          </h1>
        </Link>
      </div>

      <div className="row">
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
                  alt={`Ostale Vijsti ${index + 1}`}
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
  );
};

export default OstaleVijesti;

import { getPostsByCategorySmall } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import Link from "next/link";
import Image from "next/image";
import defaultImage from "../../../../public/noImage.jpg";
import style from "../../../css/style.module.css";
import desktopStyle from "../css/desktop.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";

const GospodarstvoNaslovna = async () => {
  const data = await getPostsByCategorySmall("gospodarstvo", 4, "LARGE");
  const {
    posts: { nodes },
  } = data;

  return (
    <div className="mt-4">
      <div className={desktopStyle.decorUnderline}>
        <Link href="/category/gospodarstvo">
          <h1>Gospodarstvo</h1>
        </Link>
      </div>
      <div>
        <div>
          <Link href={`/${nodes[0]?.slug}`} className="text-decoration-none">
            <Image
              className={style.imageCover}
              src={
                nodes[0]?.featuredImage?.node?.sourceUrl
                  ? nodes[0]?.featuredImage?.node?.sourceUrl
                  : defaultImage
              }
              width={300}
              height={270}
              priority={true}
              alt={"Gospodarstvo 1."}
            />
            <h1 className={`${style.h3Desktop}`}>{nodes[0]?.title}</h1>
            <p className="mt-2">{formatDateToCroatian(nodes[0]?.date)}</p>
          </Link>
        </div>
        {nodes?.map((item, index) => {
          const { title, date, slug, featuredImage } = item;

          if (index !== 0) {
            return (
              <div key={index}>
                <Link href={`/${slug}`} className="text-decoration-none">
                  <div className="row p-2">
                    <div className="col-4">
                      <Image
                        className={style.imageCover}
                        src={
                          featuredImage?.node?.sourceUrl
                            ? featuredImage?.node?.sourceUrl
                            : defaultImage
                        }
                        width={150}
                        height={100}
                        priority={true}
                        alt={`Gospodarstvo ${index}`}
                      />
                    </div>
                    <div className="col-8">
                      <h1
                        className={`mb-0 mt-0 fw-semibold ${style.h5Desktop}`}
                      >
                        {title}
                      </h1>
                      <div>
                        <p className={`mt-2`}>{formatDateToCroatian(date)}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default GospodarstvoNaslovna;

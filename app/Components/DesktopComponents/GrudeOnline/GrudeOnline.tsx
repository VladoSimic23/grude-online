import { getPostsByCategorySmall } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import Link from "next/link";
import Image from "next/image";
import defaultImage from "../../../../public/noImage.jpg";
import style from "../../../css/style.module.css";
import desktopStyle from "../css/desktop.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";

const GrudeOnline = async () => {
  const data = await getPostsByCategorySmall("grude-online", 5, "LARGE");
  const {
    posts: { nodes },
  } = data;

  return (
    <div className="container">
      <div className={desktopStyle.decorUnderline}>
        <Link href="/category/grude-online">
          <h1>Grude Online</h1>
        </Link>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Link
            href={`/${nodes[0]?.slug}`}
            className="text-black text-decoration-none"
          >
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
              alt={"Grude Online 1."}
            />
            <h1 className={`${style.h4Desktop}`}>{nodes[0]?.title}</h1>
            <p className="text-black mt-2">
              {formatDateToCroatian(nodes[0]?.date)}
            </p>
          </Link>
        </div>
        <div className="col-md-6">
          <div>
            {nodes?.map((item, index) => {
              const { title, date, slug, featuredImage } = item;

              if (index !== 0) {
                return (
                  <div key={index}>
                    <Link
                      href={`/${slug}`}
                      className="text-black text-decoration-none"
                    >
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
                            alt={`Grude Online ${index}`}
                          />
                        </div>
                        <div className="col-8">
                          <p className="mb-0 fw-semibold">{title}</p>
                          <div>
                            <p className="text-black mt-2">
                              {formatDateToCroatian(date)}
                            </p>
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
      </div>
    </div>
  );
};

export default GrudeOnline;

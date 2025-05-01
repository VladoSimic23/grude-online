import styles from "../../../css/style.module.css";
import Image from "next/image";
import Link from "next/link";
import { getPostsByCategorySmall } from "@/app/libs/Queries/Queries/postsByCategorySmall";

const Promo = async () => {
  const promoNews = await getPostsByCategorySmall(
    "grude-online",
    6,
    "THUMBNAIL"
  );
  const {
    posts: { nodes },
  } = promoNews;

  return (
    <div style={{ marginTop: "60px" }}>
      <h1 className={styles.h4Desktop}>Promo</h1>
      <div>
        {nodes.map((item, index) => {
          const { title, featuredImage, slug } = item;
          return (
            <div key={index}>
              <Link
                href={`/${slug}`}
                className="text-black text-decoration-none"
              >
                <div className="row mt-3 border-bottom">
                  <div className="col-4 mb-3">
                    <Image
                      src={featuredImage?.node?.sourceUrl}
                      width={150}
                      height={80}
                      alt={`Promo Post Image ${index}`}
                      quality={40}
                      priority={false}
                      loading={"lazy"}
                      className={styles.imageCover}
                    />
                  </div>
                  <div className="col-8 ">
                    <h1
                      className={`${styles.h5Desktop} mt-0 mb-0`}
                      style={{ fontSize: "16px", fontWeight: "600" }}
                    >
                      {title}
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Promo;

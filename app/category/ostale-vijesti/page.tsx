import MobilePostListByCategory from "@/app/Components/MobileComponents/MobileCategories/MobilePostListByCategory";
import { getPostsByCategorySmall } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import { isMobileDevice } from "@/app/libs/UserAgent/UserAgent";
import { Metadata } from "next";
import style from "../../css/style.module.css";
import MobilePostListByCategoryClient from "@/app/Components/MobileComponents/MobileCategories/MobilePostListCategoryClient/MobilePostListByCategoryClient";
import PostListCategory from "@/app/Components/DesktopComponents/PostListCategory/PostListCategory";
import PostListCategoryClient from "@/app/Components/DesktopComponents/PostListCategory/PostListCategoryClient";
import Popularno from "@/app/Components/DesktopComponents/Popularno/Popularno";
import Promo from "@/app/Components/DesktopComponents/Promo/Promo";

export const metadata: Metadata = {
  title: "Arhiva Ostale-Vijesti - Grude Online",
  description: "Kategorija - Ostale Vijesti",
  openGraph: {
    url: "https://www.grude-online.info/category/Ostale-Vijesti",
    description: "Kategorija - Ostale Vijesti",
    type: "article",
    siteName: "Grude Online",
    locale: "hr_HR",
  },
};

const OstaleVijesti = async () => {
  const isMobile = await isMobileDevice();
  const data = await getPostsByCategorySmall(
    "Ostale-Vijesti",
    10,
    isMobile ? "MEDIUM" : "LARGE"
  );

  return (
    <div className="container mt-3 px-3">
      {isMobile && (
        <h1 className={`${style.h2Mobile} ${style.orangeBorder}`}>
          Ostale-Vijesti
        </h1>
      )}
      {isMobile && <MobilePostListByCategory data={data} />}
      {isMobile && <MobilePostListByCategoryClient category="Ostale-Vijesti" />}

      {!isMobile && (
        <div className="row mt-4">
          <div className="col-md-8">
            <h1 className={style.h2Desktop}>Ostale-Vijesti</h1>
            <PostListCategory data={data} />
            <PostListCategoryClient category="Ostale-Vijesti" />
          </div>
          <div className="col-md-4">
            <Popularno />
            <Promo />
          </div>
        </div>
      )}
    </div>
  );
};

export default OstaleVijesti;

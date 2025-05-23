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
  title: "Arhiva Kultura - Grude Online",
  description: "Kategorija - Kultura",
  openGraph: {
    url: "https://www.grude-online.info/category/kultura",
    description: "Kategorija - Kultura",
    type: "article",
    siteName: "Grude Online",
    locale: "hr_HR",
  },
};

const Kultura = async () => {
  const isMobile = await isMobileDevice();
  const data = await getPostsByCategorySmall(
    "Kultura",
    10,
    isMobile ? "MEDIUM" : "LARGE"
  );

  return (
    <div className="container mt-3 px-3">
      {isMobile && (
        <h1 className={`${style.h2Mobile} ${style.orangeBorder}`}>Kultura</h1>
      )}
      {isMobile && <MobilePostListByCategory data={data} />}
      {isMobile && <MobilePostListByCategoryClient category="Kultura" />}

      {!isMobile && (
        <div className="row mt-4">
          <div className="col-md-8">
            <h1 className={style.h2Desktop}>Kultura</h1>
            <PostListCategory data={data} />
            <PostListCategoryClient category="Kultura" />
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

export default Kultura;

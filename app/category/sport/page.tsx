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
  title: "Arhiva Sport - Grude Online",
  description: "Kategorija - Sport",
  openGraph: {
    url: "https://www.grude-online.info/category/sport",
    description: "Kategorija - Sport",
    type: "article",
    siteName: "Grude Online",
    locale: "hr_HR",
  },
};

const Sport = async () => {
  const isMobile = await isMobileDevice();
  const data = await getPostsByCategorySmall(
    "Sport",
    10,
    isMobile ? "MEDIUM" : "LARGE"
  );

  return (
    <div className="container mt-3 px-3">
      {isMobile && (
        <h1 className={`${style.h2Mobile} ${style.orangeBorder}`}>Sport</h1>
      )}
      {isMobile && <MobilePostListByCategory data={data} />}
      {isMobile && <MobilePostListByCategoryClient category="Sport" />}

      {!isMobile && (
        <div className="row mt-4">
          <div className="col-md-8">
            <h1 className={style.h2Desktop}>Sport</h1>
            <PostListCategory data={data} />
            <PostListCategoryClient category="Sport" />
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

export default Sport;

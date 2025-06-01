import MobilePostListByCategory from "@/app/Components/MobileComponents/MobileCategories/MobilePostListByCategory";
import { getPostsByCategorySmall } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import { isMobileDevice } from "@/app/libs/UserAgent/UserAgent";
import { Metadata } from "next";
import style from "../../css/style.module.css";
import MobilePostListByCategoryClient from "@/app/Components/MobileComponents/MobileCategories/MobilePostListCategoryClient/MobilePostListByCategoryClient";
import PostListCategory from "@/app/Components/DesktopComponents/PostListCategory/PostListCategory";
import PostListCategoryClient from "@/app/Components/DesktopComponents/PostListCategory/PostListCategoryClient";
import Popularno from "@/app/Components/DesktopComponents/Popularno/Popularno";

export const metadata: Metadata = {
  title: "Arhiva Politika - Grude Online",
  description: "Kategorija - Politika",
  openGraph: {
    url: "https://www.grude-online.info/category/politika",
    description: "Kategorija - Politika",
    type: "article",
    siteName: "Grude Online",
    locale: "hr_HR",
  },
};

const Politika = async () => {
  const isMobile = await isMobileDevice();
  const data = await getPostsByCategorySmall(
    "Politika",
    10,
    isMobile ? "MEDIUM" : "LARGE"
  );

  return (
    <div className="container mt-3 px-3">
      {isMobile && (
        <h1 className={`${style.h2Mobile} ${style.orangeBorder}`}>Politika</h1>
      )}
      {isMobile && <MobilePostListByCategory data={data} />}
      {isMobile && <MobilePostListByCategoryClient category="Politika" />}

      {!isMobile && (
        <div className="row mt-4">
          <div className="col-lg-8">
            <h1 className={style.h2Desktop}>Politika</h1>
            <PostListCategory data={data} />
            <PostListCategoryClient category="Politika" />
          </div>
          <div className="col-lg-4">
            <Popularno />
          </div>
        </div>
      )}
    </div>
  );
};

export default Politika;

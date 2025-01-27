import { getPostsByCategorySmall } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import style from "../../../css/style.module.css";
import MobilePromoDetails from "./MobilePromoDetails";

const MobilePromo = async () => {
  const promoNews = await getPostsByCategorySmall("sport", 4, "MEDIUM");

  const {
    posts: { nodes },
  } = promoNews;

  return (
    <div>
      <h1
        className={`${style.h2Mobile} d-inline-block pb-1`}
        style={{ borderBottom: `1px solid royalblue` }}
      >
        Promo
      </h1>

      {nodes.map((item, index) => {
        return <MobilePromoDetails key={index} props={item} index={index} />;
      })}
    </div>
  );
};

export default MobilePromo;

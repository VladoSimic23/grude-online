import {
  getMobileIzdvojeno,
  IzdvojenoSourceMobileI,
} from "@/app/libs/Queries/Queries/izdvojenoMobile";
import MobileIzdvojenoPodnaslovneVijesti from "./MobileIzdvojenoPodnaslovneVijesti";

const MobileIzdvojeno = async () => {
  const recentPosts: IzdvojenoSourceMobileI = await getMobileIzdvojeno(
    "izdvojeno",
    3
  );
  const {
    posts: { nodes },
  } = recentPosts;

  return (
    <div style={{ marginTop: "20px" }}>
      <div className="carousel-inner">
        <MobileIzdvojenoPodnaslovneVijesti vijesti={nodes} />
      </div>
    </div>
  );
};

export default MobileIzdvojeno;

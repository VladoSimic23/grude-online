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
      <MobileIzdvojenoPodnaslovneVijesti vijesti={nodes} />
    </div>
  );
};

export default MobileIzdvojeno;

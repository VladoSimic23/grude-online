import MobileIzdvojenoNaslovnaVijest from "./MobileIzdvojenoNaslovnaVijest";
import {
  getMobileIzdvojeno,
  IzdvojenoMobileI,
  IzdvojenoSourceMobileI,
} from "@/app/libs/Queries/Queries/izdvojenoMobile";
import MobileIzdvojenoPodnaslovneVijesti from "./MobileIzdvojenoPodnaslovneVijesti";
import style from "../../../../css/style.module.css";

const MobileIzdvojeno = async () => {
  const recentPosts: IzdvojenoSourceMobileI = await getMobileIzdvojeno(
    "izdvojeno",
    3
  );
  const {
    posts: { nodes },
  } = recentPosts;

  return (
    <div style={{ marginTop: "10px" }}>
      <h1
        className={`${style.h2Mobile}`}
        style={{
          borderBottom: "2px solid #4d1b97",
          display: "inline-block",
          paddingBottom: "5px",
        }}
      >
        Izdvojeno
      </h1>
      <div className="row">
        <MobileIzdvojenoNaslovnaVijest vijest={nodes[0]} />
        {nodes.slice(1).map((item: IzdvojenoMobileI, index: number) => {
          return (
            <div className="col-6" key={index}>
              <MobileIzdvojenoPodnaslovneVijesti vijest={item} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileIzdvojeno;

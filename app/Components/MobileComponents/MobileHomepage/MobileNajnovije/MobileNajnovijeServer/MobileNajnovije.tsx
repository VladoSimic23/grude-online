import {
  getRecentPostsHomepage,
  RecentPostsSourceI,
} from "@/app/libs/Queries/Queries/recentPosts";
import MobileNajnovijeDetails from "../MobileNajnovijeServer/MobileNajnovijeDetails";
import style from "../../../../../css/style.module.css";
import MobilePromoTest from "../../../MobilePromo/MobilePromoTest";

const MobileNajnovije = async () => {
  const najnovije: RecentPostsSourceI = await getRecentPostsHomepage(10);

  const {
    posts: { nodes },
  } = najnovije;

  return (
    <div style={{ marginTop: "30px" }}>
      <h1 className={`${style.h2Mobile} ${style.orangeBorder}`}>
        <span
          style={{
            color: "#ea8624",
            fontFamily: "Barlow Condensed",
            fontSize: "28px",
          }}
        >
          N
        </span>
        ajnovije
      </h1>
      {nodes.slice(0, 5).map((item, index) => {
        return (
          <MobileNajnovijeDetails key={index} props={item} index={index} />
        );
      })}
      <MobilePromoTest />
      {nodes.slice(5, 10).map((item, index) => {
        return (
          <MobileNajnovijeDetails key={index} props={item} index={index} />
        );
      })}
    </div>
  );
};

export default MobileNajnovije;

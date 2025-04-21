import {
  getRecentPostsHomepage,
  RecentPostsSourceI,
} from "@/app/libs/Queries/Queries/recentPosts";
import MobileNajnovijeDetails from "../MobileNajnovijeServer/MobileNajnovijeDetails";
import style from "../../../../../css/style.module.css";

const MobileNajnovije = async () => {
  const najnovije: RecentPostsSourceI = await getRecentPostsHomepage(10);

  const {
    posts: { nodes },
  } = najnovije;

  return (
    <div style={{ marginTop: "0px" }}>
      <h1 className={`${style.h2Mobile} ${style.orangeBorder}`}>Najnovije</h1>
      {nodes.map((item, index) => {
        return (
          <MobileNajnovijeDetails key={index} props={item} index={index} />
        );
      })}
    </div>
  );
};

export default MobileNajnovije;

import {
  getRecentPostsHomepage,
  RecentPostsSourceI,
} from "@/app/libs/Queries/Queries/recentPosts";
import MobileNajnovijeDetails from "../MobileNajnovijeServer/MobileNajnovijeDetails";
import MobilePromo from "../../../MobilePromo/MobilePromo";

const MobileNajnovije = async () => {
  const najnovije: RecentPostsSourceI = await getRecentPostsHomepage(10);

  const {
    posts: { nodes },
  } = najnovije;

  return (
    <div style={{ marginTop: "40px" }}>
      <div className="container px-3">
        {nodes.slice(0, 5).map((item, index) => {
          return (
            <MobileNajnovijeDetails key={index} props={item} index={index} />
          );
        })}
      </div>
      <MobilePromo />
      <div className="container px-3">
        {nodes.slice(5, 10).map((item, index) => {
          return (
            <MobileNajnovijeDetails key={index} props={item} index={index} />
          );
        })}
      </div>
    </div>
  );
};

export default MobileNajnovije;

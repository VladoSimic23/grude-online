import { getRecentPosts } from "@/app/libs/Queries/Queries/recentPostsFooter";
import Link from "next/link";
import React from "react";

const RecentPosts = async () => {
  const data = await getRecentPosts(5);
  const {
    posts: { nodes },
  } = data;

  return (
    <div>
      <h4>NOVE OBJAVE</h4>
      <div>
        {nodes?.map((item, index: number) => {
          return (
            <div key={index}>
              <p>
                <Link
                  href={`/${item?.slug}`}
                  aria-label={item?.title}
                  className="text-black text-decoration-none"
                >
                  {item?.title}
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentPosts;

"use client";
import {
  getRecentPostsHomepage,
  RecentPostsSourceI,
} from "@/app/libs/Queries/Queries/recentPosts";
import React, { useState } from "react";
import mobileStyle from "../../Css/mobileHomepage.module.css";
import dynamic from "next/dynamic";
const MobileHomepageClientDetails = dynamic(
  () => import("./MobileHomepageClientDetails")
);

const MobileHomepageClient = () => {
  const [numOfPosts, setPostNum] = useState(20);
  const [theData, setTheData] = useState<RecentPostsSourceI>();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    setPostNum(numOfPosts + 10);
    const data = await getRecentPostsHomepage(numOfPosts);
    setTheData(data);
    setIsLoading(false);
  };
  return (
    <div>
      {theData?.posts?.nodes?.slice(10).map((item, index) => {
        return (
          <MobileHomepageClientDetails key={index} props={item} index={index} />
        );
      })}

      <button className={mobileStyle.mobileButton} onClick={handleClick}>
        {isLoading ? "Loading..." : "Učitaj više vijesti ..."}
      </button>
    </div>
  );
};

export default MobileHomepageClient;

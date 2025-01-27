"use client";
import {
  getPostsByCategorySmall,
  PostsByCategorySourceI,
} from "@/app/libs/Queries/Queries/postsByCategorySmall";
import React, { useState } from "react";
import mobileStyle from "../../MobileHomepage/Css/mobileHomepage.module.css";
import dynamic from "next/dynamic";
const MobilePostListByCategoryClientDetails = dynamic(
  () => import("./MobilePostListByCategoryClientDetails"),
  { ssr: false }
);

const MobilePostListByCategoryClient = ({ category }: { category: string }) => {
  const [numOfPosts, setPostNum] = useState(20);
  const [theData, setTheData] = useState<PostsByCategorySourceI>();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    setPostNum(numOfPosts + 10);
    const data = await getPostsByCategorySmall(category, numOfPosts, "MEDIUM");
    setTheData(data);
    setIsLoading(false);
  };

  return (
    <div>
      {theData?.posts?.nodes?.slice(10).map((item, index) => {
        return (
          <MobilePostListByCategoryClientDetails
            key={index}
            props={item}
            index={index}
          />
        );
      })}

      <button className={mobileStyle.mobileButton} onClick={handleClick}>
        {isLoading ? "Loading..." : "Učitaj više"}
      </button>
    </div>
  );
};

export default MobilePostListByCategoryClient;

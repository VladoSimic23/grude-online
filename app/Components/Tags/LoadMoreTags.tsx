"use client";

import { useState } from "react";
import mobileStyle from "../MobileComponents/MobileHomepage/Css/mobileHomepage.module.css";
import Link from "next/link";
import Image from "next/image";
import defaultImage from "../../../public/noImage.jpg";
import {
  getAllPostsByTagsClient,
  TagsSourceI,
} from "@/app/libs/Queries/Queries/tags";
import style from "../../css/style.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";

const LoadMoreTags = ({ tag }: { tag: string }) => {
  const [tags, setTags] = useState<TagsSourceI>();
  const [count, setCount] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = async () => {
    setIsLoading(true);
    setCount(count + 10);
    const data = await getAllPostsByTagsClient(count, tag);
    setTags(data);
    setIsLoading(false);
  };

  return (
    <div>
      <div>
        {tags?.posts?.nodes?.slice(10)?.map((result, idx: number) => {
          const { slug, title, date, featuredImage } = result;
          return (
            <Link
              key={idx}
              href={`/${slug}`}
              style={{ textDecoration: "none" }}
            >
              <li className="row" style={{ marginBottom: "30px" }}>
                <div className="col-6">
                  <Image
                    className={style.imageContain}
                    src={
                      featuredImage?.node?.sourceUrl
                        ? featuredImage?.node?.sourceUrl
                        : defaultImage
                    }
                    alt={title}
                    width={200}
                    height={130}
                  />
                </div>
                <div className="col-6">
                  <h1 className={style.h4Mobile}>{title}</h1>
                  <p style={{ color: "white", fontSize: "14px" }}>
                    {formatDateToCroatian(date)}
                  </p>
                </div>
              </li>
            </Link>
          );
        })}
      </div>
      <div>
        <button className={mobileStyle.mobileButton} onClick={loadMore}>
          {isLoading ? "Loading..." : "Učitaj više vijesti ..."}
        </button>
      </div>
    </div>
  );
};

export default LoadMoreTags;

import { getAllPostsByTags } from "@/app/libs/Queries/Queries/tags";
import { Metadata } from "next";
import React from "react";
import style from "../../../css/style.module.css";
import Image from "next/image";
import Link from "next/link";
import defaultImage from "../../../../public/noImage.jpg";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import LoadMoreTagsDesktop from "./LoadMoreTagsDesktop";

export const metadata: Metadata = {
  title: "Tags",
  description: "Tags - Grude Online",
};

const TagDetailsDesktop = async ({ tag }: { tag: string }) => {
  const tagData = await getAllPostsByTags(tag);
  const {
    posts: { nodes },
  } = tagData;

  return (
    <div style={{ marginTop: "30px" }}>
      <h1 className={style.h2Desktop}>Results for : {tag}</h1>
      <ul style={{ listStyle: "none", padding: "0", marginTop: "60px" }}>
        {nodes.map((result, index) => {
          const { title, featuredImage, date } = result;
          return (
            <Link
              key={index}
              href={`/${result?.slug}`}
              style={{ textDecoration: "none" }}
            >
              <li
                className="row align-items-center"
                style={{ marginBottom: "30px" }}
              >
                <div className="col-6">
                  <Image
                    className={style.imageCover}
                    src={
                      featuredImage?.node?.sourceUrl
                        ? featuredImage?.node?.sourceUrl
                        : defaultImage
                    }
                    alt={title}
                    width={500}
                    height={220}
                  />
                </div>
                <div className="col-6">
                  <h1 className={`${style.h4Desktop} `}>{title}</h1>
                  <p>{formatDateToCroatian(date)}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
      <LoadMoreTagsDesktop tag={tag} />
    </div>
  );
};

export default TagDetailsDesktop;

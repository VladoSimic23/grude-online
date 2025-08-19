import Link from "next/link";
import React from "react";
import style from "../../../css/style.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import { PostsByCategoryI } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import Image from "next/image";

const PostListCategoryClientDetails = ({
  props,
  index,
}: {
  props: PostsByCategoryI;
  index: number;
}) => {
  const {
    featuredImage: {
      node: { sourceUrl },
    },
    title,
    date,
    slug,
    comments: { nodes },
  } = props;

  return (
    <Link key={index} href={`/${slug}`} style={{ textDecoration: "none" }}>
      <div style={{ marginBottom: "60px" }} className="row align-items-center">
        <div className="col-md-6">
          <Image
            className={style.imageCover}
            src={sourceUrl}
            width={300}
            height={220}
            alt={`Ilustracija članka: ${title}`}
          />
        </div>
        <div className="col-md-6">
          <h1 className={`${style.h3Desktop} mt-0`}>{title}</h1>
          <div>
            <span className="text-black">{formatDateToCroatian(date)}</span>

            <div>
              <span className="me-1 text-black">{nodes.length}</span>
              <i className="bi bi-chat-left-text text-black"></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostListCategoryClientDetails;

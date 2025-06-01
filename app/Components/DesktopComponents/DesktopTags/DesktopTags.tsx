import { TagsI } from "@/app/libs/types/tsTypes";
import Link from "next/link";
import React from "react";

const DesktopSinglePostTags = ({ tags }: { tags: TagsI }) => {
  const { nodes } = tags;

  if (nodes.length === 0) {
    // Handle the case where tags are not available or empty.
    return null; // or return some default content/message
  }

  return (
    <div className="d-flex mt-4 flex-wrap">
      {nodes
        .filter((item) => item.name.toLowerCase() !== "video")
        .map((item, index) => {
          const tagEdit = item.name.split(" ").join("-").toLowerCase();
          return (
            <div key={index} className="border px-2 py-1 me-2 mb-2 d-flex">
              <Link
                href={`/tag/${tagEdit}`}
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default DesktopSinglePostTags;

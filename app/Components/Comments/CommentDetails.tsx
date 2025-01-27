import React from "react";
import commentStyles from "./commentsCss/comments.module.css";
import Image from "next/image";
import parse from "html-react-parser";
import { ClientCommentsContent } from "@/app/libs/Queries/FetchFunction/fetchClientComments";

const CommentDetails = ({ item }: { item: ClientCommentsContent }) => {
  //const lines = item.content.split(/<br \/>/g);

  return (
    <div className={commentStyles.commentWrapper}>
      <div className={commentStyles.displayComments}>
        <div className={commentStyles.isMobileComments}>
          <div className={commentStyles.mobileComments}>
            <Image src={"/none.jpg"} width={60} height={60} alt="commentIcon" />{" "}
            <div>
              <h4>
                {" "}
                {item?.author?.node?.name !== null
                  ? item?.author?.node?.name
                  : "Anonymus"}{" "}
              </h4>
              <span>{item?.date}</span>
            </div>{" "}
          </div>
          <div className={commentStyles.mobileCommentsContent}>
            {parse(item?.content)}
          </div>
        </div>

        <>
          <div className={commentStyles.isDesktopComments}>
            <div className={commentStyles.desktopLogo}>
              <Image
                src={"/none.jpg"}
                width={60}
                height={60}
                alt="commentIcon"
              />
            </div>
            <div className={commentStyles.commentDetails}>
              <h4>
                {item?.author?.node?.name !== null
                  ? item?.author?.node?.name
                  : "Anonymus"}{" "}
              </h4>
              <span>{item?.date}</span>
              {parse(item?.content)}
            </div>
          </div>
        </>
        {/* )} */}
      </div>

      <div>
        {/* <button onClick={handleLike}> */}
        <button>
          <Image
            src={"/icons8-like-30.png"}
            width={20}
            height={20}
            alt="dislike"
          />{" "}
          {/* <span>{likes}</span> */}
        </button>
        <button>
          <Image
            src={"/icons8-dislike-30.png"}
            width={20}
            height={20}
            alt="like"
          />
        </button>
      </div>
    </div>
  );
};

export default CommentDetails;

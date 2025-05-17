"use client";
// import { matchColors } from "@/app/functions/categoryColors";

import mobileStyle from "../MobileComponents/MobileHomepage/Css/mobileHomepage.module.css";

export default function CommentLinkInPost({ length }: { length: number }) {
  // Function to handle the click event and scroll to the comments section
  const handleClick = () => {
    const commentsSection = document.getElementById("comments");
    if (commentsSection) {
      commentsSection.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Scroll to the top of the element
      });
    }
  };

  return (
    <div
      className={mobileStyle.mobileComments}
      aria-label="View Comments"
      onClick={handleClick}
    >
      <span
        style={{
          color: "white",
        }}
      >
        {length}
      </span>
      <i
        style={{
          color: "white",
        }}
        className="bi bi-chat-left-text"
      ></i>
    </div>
  );
}

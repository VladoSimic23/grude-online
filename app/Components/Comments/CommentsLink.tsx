"use client";
import { matchColors } from "@/app/functions/categoryColors";
import { useRouter } from "next/navigation";
import mobileStyle from "../MobileComponents/MobileHomepage/Css/mobileHomepage.module.css";

export default function CommentLink({
  slug,
  color,
  length,
}: {
  slug: string;
  color: string;
  length: number;
}) {
  const router = useRouter();

  const handleClick = () => {
    sessionStorage.setItem("scrollToComments", "true");
    router.push(`/${slug}`);
  };

  return (
    <div
      className={mobileStyle.mobileComments}
      aria-label="View Comments"
      onClick={handleClick}
      style={{
        borderBottom: `2px solid ${matchColors(color)}`,
      }}
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

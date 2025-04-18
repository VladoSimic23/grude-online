"use client";
import Link from "next/link";
import React, { useState } from "react";
import mobileStyle from "../MobileComponents/MobileHomepage/Css/mobileHomepage.module.css";
import style from "../../css/style.module.css";
import { grOnlineMainPath } from "@/app/libs/GrudeOnlineURLs/grudeOnlineURLs";

const PostSharingDetails = ({ slug }: { slug: string }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(window?.location?.href);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div
      className={mobileStyle.PostSharing}
      style={{ marginTop: "30px", padding: "0 5px" }}
    >
      <h1 className={style.h3Mobile}>Podijeli: </h1>
      <div className="d-flex">
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${grOnlineMainPath}/${slug}`}
          target="_blank"
          title="Podjeli putem Facebooka"
          className="me-3"
        >
          <i style={{ color: "#0966ff" }} className="bi bi-facebook"></i>
        </Link>
        <Link
          href={`https://plus.google.com/share?url=${grOnlineMainPath}}/${slug}`}
          target="_blank"
          title="Podjeli putem Google+"
          className="me-3"
        >
          <i style={{ color: "rgb(156, 4, 4)" }} className="bi bi-google"></i>
        </Link>
        <Link
          href={`https://twitter.com/intent/tweet?url=${grOnlineMainPath}/${slug}`}
          target="_blank"
          title="Podjeli putem Twittera"
          className="me-3"
        >
          <i
            style={{ color: "rgb(72, 157, 226)" }}
            className="bi bi-twitter"
          ></i>
        </Link>
        <Link
          href={`http://www.pinterest.com/pin/create/button/?url=${grOnlineMainPath}/${slug}`}
          target="_blank"
          title="Podjeli putem Pinteresta"
          className="me-3"
        >
          <i
            style={{ color: "rgb(255, 0, 0)" }}
            className="bi bi-pinterest"
          ></i>
        </Link>

        <span
          onClick={handleClick}
          title="Kopiraj Link"
          style={{ color: "white", fontSize: "28px", cursor: "pointer" }}
        >
          <i className="bi bi-link"></i>
        </span>
        {showTooltip && (
          <div>
            <p
              style={{
                background: "chocolate",
                color: "white",
                padding: "5px 10px",
                borderRadius: "10px",
                marginLeft: "20px",
                fontSize: "14px",
              }}
            >
              Link Kopiran !
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostSharingDetails;

import React from "react";
import navStyles from "./css/nav.module.css";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className={navStyles.topNavbarSocialMedia}>
      <Link
        href={"https://www.facebook.com/GrudeOnline/"}
        target="_blank"
        className="text-decoration-none h3"
        style={{ color: "#4c4cca", marginRight: "25px" }}
      >
        Facebook <i className="bi bi-facebook"></i>
      </Link>
      <Link
        className="text-decoration-none h3"
        target="_blank"
        href={"https://www.instagram.com/grudeonline/"}
        style={{ color: "#9f1497", marginRight: "25px" }}
      >
        Instagram <i className="bi bi-instagram"></i>
      </Link>
      <Link
        className="text-decoration-none h3"
        target="_blank"
        href={"https://www.youtube.com/channel/UC0tJO-t-CtXhSqIHpE7JaCg"}
        style={{ color: "#fb0505" }}
      >
        Youtube <i className="bi bi-youtube"></i>
      </Link>
    </div>
  );
};

export default SocialMedia;

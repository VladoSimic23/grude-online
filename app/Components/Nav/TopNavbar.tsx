import Link from "next/link";
import navStyles from "./css/nav.module.css";

const TopNavbar = () => {
  return (
    <div className={navStyles.topNavbar}>
      <div className="container">
        <div className={navStyles.topNavbarStyles}>
          <div className={navStyles.kontakt}>
            <Link href="#">KONTAKT</Link>
          </div>
          <div className={navStyles.topNavbarSocialMedia}>
            <Link
              href={"https://www.facebook.com/GrudeOnline/"}
              target="_blank"
            >
              Facebook <i className="bi bi-facebook"></i>
            </Link>
            <Link href={"https://www.instagram.com/grudeonline/"}>
              Instagram <i className="bi bi-instagram"></i>
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UC0tJO-t-CtXhSqIHpE7JaCg"}
            >
              Youtube <i className="bi bi-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

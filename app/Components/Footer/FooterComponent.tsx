import React, { Suspense } from "react";
import footerStyles from "./css/footer.module.css";

// import RecentPosts from "../Recent/RecentPosts";
//import FooterLower from "./FooterLower";
import OsmrtniceImg from "../../../public/osmrtniceReklama.jpeg";
import Image from "next/image";
import Link from "next/link";
import { isMobileDevice } from "@/app/libs/UserAgent/UserAgent";
import RecentComments from "../DesktopComponents/RecentCommentsAndPosts/RecentComments";
import RecentPosts from "../DesktopComponents/RecentCommentsAndPosts/RecentPosts";

const FooterComponent = async () => {
  //const recentComments = await getRecentComments(5);
  //const recentPosts = await getRecentPosts(5);
  const currentYear = new Date().getFullYear();
  const isMob = await isMobileDevice();

  return (
    <footer className={footerStyles.footerWrapper}>
      {!isMob && (
        <div className={footerStyles.footerContainer}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <Suspense fallback={<h1>Loading recent comments...</h1>}>
                  <RecentComments />
                </Suspense>
              </div>
              <div className="col-lg-4">
                <Suspense fallback={<h1>Loading recent posts...</h1>}>
                  <RecentPosts />
                </Suspense>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      )}

      <div className={footerStyles.footerLower}>
        <div className="container">
          <div className={footerStyles.flexFooter}>
            <Link
              href={"https://www.facebook.com/GrudeOnline/"}
              target="_blank"
              aria-label="Posjetite naš Facebook profil"
            >
              <i className="bi bi-facebook"></i>
              <span>FACEBOOK</span>
            </Link>
            <Link
              href={"https://www.instagram.com/grudeonline/"}
              target="_blank"
              aria-label="Posjetite naš Instagram profil"
            >
              <i className="bi bi-instagram"></i>
              <span>INSTAGRAM</span>
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UC0tJO-t-CtXhSqIHpE7JaCg"}
              target="_blank"
              aria-label="Posjetite naš Youtube kanal"
            >
              <i className="bi bi-youtube"></i>
              <span>YOUTUBE</span>
            </Link>
          </div>

          {isMob && (
            <div className={footerStyles.osmrtniceFooter}>
              <Link href={"https://www.osmrtnica.ba/"} target="_blank">
                {" "}
                <Image
                  src={OsmrtniceImg}
                  alt="osmrtnice"
                  width={300}
                  height={100}
                  quality={20}
                />
              </Link>
            </div>
          )}

          <div className={footerStyles.copyrights}>
            <p>@ 2007 - {currentYear} Grude Online. All Right Reserved.</p>

            {!isMob && <Link href="#">BACK TO TOP</Link>}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

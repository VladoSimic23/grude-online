"use client";
import navStyles from "./css/nav.module.css";
//import TopNavbar from "./TopNavbar";
import Image from "next/image";
import Link from "next/link";
//import { isMobileDevice } from "@/app/libs/UserAgent/UserAgent";
import dynamic from "next/dynamic";
//import Navbar from "./Navbar";
const Navbar = dynamic(() => import("./Navbar"), { ssr: false });

const NavWrap = () => {
  return (
    <div className="container">
      <div className={navStyles.navMobileWrap}>
        {/* {!isMob && <TopNavbar />} */}
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className={navStyles.imageContainer}>
              <Link href={"/"}>
                <Image
                  src={"/Grude_online_Logotip2.webp"}
                  width={330}
                  height={42}
                  alt="Grude-Online"
                  priority
                />
              </Link>
            </div>
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
                href={
                  "https://www.youtube.com/channel/UC0tJO-t-CtXhSqIHpE7JaCg"
                }
                style={{ color: "#fb0505" }}
              >
                Youtube <i className="bi bi-youtube"></i>
              </Link>
            </div>
          </div>
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default NavWrap;

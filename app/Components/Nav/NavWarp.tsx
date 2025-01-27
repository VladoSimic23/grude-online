"use client";
import navStyles from "./css/nav.module.css";
//import TopNavbar from "./TopNavbar";
import Image from "next/image";
import Link from "next/link";
//import { isMobileDevice } from "@/app/libs/UserAgent/UserAgent";
import dynamic from "next/dynamic";
//import Navbar from "./Navbar";
const Navbar = dynamic(() => import("./Navbar"));

const NavWrap = () => {
  //const isMob = await isMobileDevice();
  return (
    <div className={navStyles.navMobileWrap}>
      {/* {!isMob && <TopNavbar />} */}
      <div className="container">
        <div className={navStyles.imageContainer}>
          <Link href={"/"}>
            <Image
              src={"/Grude_online_Logotip2.png"}
              width={330}
              height={42}
              alt="Grude-Online"
              priority
            />
          </Link>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default NavWrap;

"use client";
import React, { useEffect, useState } from "react";
import navStyles from "./css/nav.module.css";
import NavbarSearch from "@/app/search/SearchBar";
//import Categoires from "../Categories/Categories";
import dynamic from "next/dynamic";
const Categoires = dynamic(() => import("../Categories/Categories"), {
  ssr: false,
});

const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth || 800 : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width:
          typeof window !== "undefined" ? window.innerWidth : windowSize.width,
      });
    };

    if (typeof window !== "undefined") {
      // Set the initial window size
      handleResize();

      // Add event listener to update window size on resize
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [windowSize.width]);

  const cancelMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSearch(true);
  };

  if (!windowSize) {
    return <h1>LOADING NAVBAR .....</h1>;
  }

  return (
    <>
      <div className={navStyles.navWrap}>
        <div className="container">
          <div className={navStyles.navbar}>
            {/**/}
            <div
              className={`${navStyles.navMenu}`}
              style={isSearch ? { width: "0" } : { width: "100%" }}
            >
              <div
                className={`${navStyles.navItems} ${
                  isMobileMenuOpen ? navStyles.mobileOpen : ""
                }`}
              >
                {!isSearch && windowSize.width > 993 && (
                  <Categoires toggle={cancelMobileMenu} />
                )}
                {isMobileMenuOpen && <Categoires toggle={cancelMobileMenu} />}
              </div>
            </div>
            {/**/}
            {isSearch && windowSize.width > 993 && (
              //<SearchBar setMenu={setIsMobileMenuOpen} />
              <NavbarSearch setMenu={setIsMobileMenuOpen} />
            )}
            {isMobileMenuOpen && <NavbarSearch setMenu={setIsMobileMenuOpen} />}

            {!isSearch && windowSize.width > 993 && (
              <span
                className={navStyles.navMarginLeft}
                style={{ cursor: "pointer" }}
                onClick={() => setIsSearch(true)}
              >
                <i className="bi bi-search"></i>
              </span>
            )}
            {isSearch && windowSize.width > 993 && (
              <span
                className={navStyles.navMarginLeft}
                onClick={() => setIsSearch(false)}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-x"></i>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className={navStyles.mobileMenuToggle} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <i
            className="bi bi-x"
            style={{ color: "white", cursor: "pointer" }}
          ></i>
        ) : (
          <i
            className="bi bi-list"
            style={{ color: "white", cursor: "pointer" }}
          ></i>
        )}
      </div>
    </>
  );
};

export default Navbar;

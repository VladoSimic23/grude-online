import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { isMobileDevice } from "./libs/UserAgent/UserAgent";
import style from "./css/style.module.css";
import { Suspense } from "react";
import BootstrapClient from "./libs/BootstrapClient/BootstrapClient";
import FooterComponent from "./Components/Footer/FooterComponent";
import dynamic from "next/dynamic";
import TopNavbar from "./Components/Nav/TopNavbar";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import MobilePromo from "./Components/MobileComponents/MobilePromo/MobilePromo";
import MobilePopularno from "./Components/MobileComponents/MobilePopularno/MobilePopularno";
//import Script from "next/script";
//import DelayedScriptLoader from "./functions/scriptLoader";
const NavWrap = dynamic(() => import("./Components/Nav/NavWarp"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grude Online",
  description: "Grudski News Portal",
  openGraph: {
    siteName: "Grude Online",
    description: "Grudski News Portal",
    url: "https://www.grude-online.info/",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = await isMobileDevice();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${
          isMobile ? style.websiteBgDark : style.websiteBgWhite
        }`}
      >
        {/* <OneSignalComp /> */}
        {!isMobile && <TopNavbar />}
        <NavWrap />
        {children}

        {isMobile && (
          <div className="container">
            <Suspense
              fallback={<h2 style={{ color: "white" }}>Loading Promo ...</h2>}
            >
              <MobilePromo />
            </Suspense>
          </div>
        )}
        
        {isMobile && (
          <div className="container">
            <Suspense
              fallback={
                <h2 style={{ color: "white" }}>Loading Popularno ...</h2>
              }
            >
              <MobilePopularno />
            </Suspense>
          </div>
        )}

        <Suspense
          fallback={<h2 style={{ color: "white" }}>Loading Footer ...</h2>}
        >
          <FooterComponent />
        </Suspense>
        <BootstrapClient />
        {isMobile && <ScrollToTop />}
      </body>
    </html>
  );
}

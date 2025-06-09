import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { isMobileDevice } from "./libs/UserAgent/UserAgent";
import style from "./css/style.module.css";
import BootstrapClient from "./libs/BootstrapClient/BootstrapClient";
import FooterComponent from "./Components/Footer/FooterComponent";
import dynamic from "next/dynamic";
import TopNavbar from "./Components/Nav/TopNavbar";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import MobilePopularno from "./Components/MobileComponents/MobilePopularno/MobilePopularno";
import Script from "next/script";
import OneSignalComp from "./Components/OneSIgnal/OneSignal";

const NavWrap = dynamic(() => import("./Components/Nav/NavWarp"));

const geistMono = Barlow_Condensed({
  weight: ["100", "400", "600", "700"],
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
      <head>
        {/* Google Publisher Tag script */}
        <Script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistMono.className} ${style.websiteBgDark}`}
        style={isMobile ? { marginTop: "75px" } : { marginTop: "0" }}
      >
        {!isMobile && <TopNavbar />}
        <NavWrap />
        {/* <div className="onesignal-customlink-container">
        </div> */}
        <OneSignalComp />

        {children}

        {isMobile && (
          <div className="container px-3">
            <MobilePopularno />
          </div>
        )}

        <FooterComponent />
        <BootstrapClient />
        {isMobile && <ScrollToTop />}
      </body>
    </html>
  );
}

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
//import Script from "next/script";
import GoogleAds from "./Components/GoogleAds/GoogleAds";

//import OneSignalComp from "./Components/OneSIgnal/OneSignal";

//import MobilePromo from "./Components/MobileComponents/MobilePromo/MobilePromo";

//import Script from "next/script";
//import DelayedScriptLoader from "./functions/scriptLoader";
const NavWrap = dynamic(() => import("./Components/Nav/NavWarp"));

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

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
        {/* Google Ad Manager skripta */}
        {/* <Script
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          strategy="beforeInteractive"
        />
        <Script id="gpt-init" strategy="beforeInteractive">
          {`
            window.googletag = window.googletag || { cmd: [] };

            googletag.cmd.push(function() {
              // Desktop oglasi
              googletag.defineSlot('/31722200/desktop_970', [[728, 90], [1200, 335], [970, 90], [970, 250]], 'div-gpt-ad-1748176581901-0').addService(googletag.pubads());
              googletag.defineSlot('/31722200/desktop_prvi_desno', [[300, 600], [300, 250], [336, 280]], 'div-gpt-ad-1748176938350-0').addService(googletag.pubads());
              googletag.defineSlot('/31722200/desktop_desno_drugi', [[300, 600], [336, 280], [300, 250]], 'div-gpt-ad-1748177179611-0').addService(googletag.pubads());
              googletag.defineSlot('/31722200/desktop_desno_treci', [[300, 600], [300, 250], [336, 280]], 'div-gpt-ad-1748177592525-0').addService(googletag.pubads());
              googletag.defineSlot('/31722200/desktop_desno_cetrvrti', [[300, 600], [336, 280], [300, 250]], 'div-gpt-ad-1748177759209-0').addService(googletag.pubads());
              googletag.defineSlot('/31722200/desktop_desno_peti', [[300, 250], [336, 280], [300, 600]], 'div-gpt-ad-1748177838665-0').addService(googletag.pubads());
              googletag.defineSlot('/31722200/desktop_728x90', [728, 90], 'div-gpt-ad-1748177894984-0').addService(googletag.pubads());

              // Mobilni oglasi - naslovna
              googletag.defineSlot('/31722200/mobilni_naslovna_prvi', [[300, 250], [336, 280]], 'div-gpt-ad-1748178148994-0').addService(googletag.pubads());
              googletag.defineSlot('/31722200/mobilna_naslovna_drugi', [[300, 250], [336, 280], [300, 600]], 'div-gpt-ad-1748178301870-0').addService(googletag.pubads());
              googletag.defineSlot('/31722200/mobilna_naslovna_treci', [[300, 250], [336, 280], [300, 600]], 'div-gpt-ad-1748178380494-0').addService(googletag.pubads());

              // Mobilni oglasi - post
              googletag.defineSlot('/31722200/mobilna_post_prvi', [[336, 280], [300, 600], [320, 50], [300, 250]], 'div-gpt-ad-1748178511419-0').addService(googletag.pubads());
              googletag.defineSlot('/31722200/mobilni_post_drugi', [[320, 50], [320, 480], [300, 600], [300, 250], [336, 280]], 'div-gpt-ad-1748178606184-0').addService(googletag.pubads());
              googletag.defineSlot('/31722200/mobilni_post_treci', [[320, 50], [320, 480], [300, 600], [300, 100], [300, 250], [336, 280]], 'div-gpt-ad-1748178684829-0').addService(googletag.pubads());
              googletag.defineSlot('/31722200/mobilni_post_cetvrti', [[300, 100], [336, 280], [300, 250], [300, 600], [320, 50]], 'div-gpt-ad-1748178798989-0').addService(googletag.pubads());

              // Lazy loading
              googletag.pubads().enableLazyLoad({
                fetchMarginPercent: 300,
                renderMarginPercent: 50,
                mobileScaling: 2.0
              });

              // Jedinstveni zahtjev
              googletag.pubads().enableSingleRequest();
              googletag.enableServices();
            });
          `}
        </Script> */}
      </head>
      <body
        className={`${geistMono.className} ${
          isMobile ? style.websiteBgDark : style.websiteBgWhite
        }`}
      >
        {/* <OneSignalComp /> */}

        {!isMobile && <TopNavbar />}
        <NavWrap />
        <GoogleAds />

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

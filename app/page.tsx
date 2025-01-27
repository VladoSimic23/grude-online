import { isMobileDevice } from "./libs/UserAgent/UserAgent";
import { Metadata } from "next";
import MobileContainer from "./Components/MobileComponents/MobileContainer";
import DesktopContainer from "./Components/DesktopComponents/DesktopContainer";
//import { Suspense } from "react";
import MobileIzdvojeno from "./Components/MobileComponents/MobileHomepage/MobileIzdvojeno/MobileIzdvojeno";
//import MobilePromo from "./Components/MobileComponents/MobilePromo/MobilePromo";
//import MobilePopularno from "./Components/MobileComponents/MobilePopularno/MobilePopularno";
//import dynamic from "next/dynamic";
// const DelayedScriptLoader = dynamic(
//   () => import("@/app/functions/scriptLoader")
// );

export const metadata: Metadata = {
  title: "Grude Online - Grudski News Portal",
  description: "Grudski News Portal",
  openGraph: {
    siteName: "Grude Online",
    description: "Grudski News Portal",
    type: "website",
  },
};

const Home = async () => {
  const isMobile = await isMobileDevice();
  return (
    <>
      {/* <DelayedScriptLoader
        scriptUrl="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
        delay={10000}
      /> */}
      {isMobile && (
        <div className="container">
          <MobileIzdvojeno />
        </div>
      )}
      {isMobile && <MobileContainer />}
      {!isMobile && <DesktopContainer />}
    </>
  );
};

export default Home;

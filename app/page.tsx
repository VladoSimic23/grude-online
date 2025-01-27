import { isMobileDevice } from "./libs/UserAgent/UserAgent";
import { Metadata } from "next";
import MobileContainer from "./Components/MobileComponents/MobileContainer";
import DesktopContainer from "./Components/DesktopComponents/DesktopContainer";
import dynamic from "next/dynamic";
const DelayedScriptLoader = dynamic(
  () => import("@/app/functions/scriptLoader")
);

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
    <div className="container">
      <DelayedScriptLoader
        scriptUrl="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
        delay={10000}
      />
      {isMobile && <MobileContainer />}
      {!isMobile && <DesktopContainer />}
    </div>
  );
};

export default Home;

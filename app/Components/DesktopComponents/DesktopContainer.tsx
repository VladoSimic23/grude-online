import dynamic from "next/dynamic";
import GoogleAds from "../GoogleAds/GoogleAds";
//import TestAd from "../GoogleAds/TestAd";
//import GalerijeNaslovna from "./GalerijeNaslovna/GalerijeNaslovna";
import GospodarstvoNaslovna from "./Gospodarstvo/GospodarstvoNaslovna";
//import GrudeOnline from "./GrudeOnline/GrudeOnline";
const GrudeOnline = dynamic(() => import("./GrudeOnline/GrudeOnline"));

//import LifestyleNaslovna from "./Lifestyle/LifestyleNaslovna";
const LifestyleNaslovna = dynamic(
  () => import("./Lifestyle/LifestyleNaslovna")
);
import NaslovneVijesti from "./NaslovneVijesti/NaslovneVijesti";
import OstaleVijesti from "./OstaleVijesti/OstaleVijesti";
import Popularno from "./Popularno/Popularno";
import Promo from "./Promo/Promo";
import SportNaslovna from "./Sport/SportNaslovna";
import NajnovijeDesktop from "./Najnovije/NajnovijeDesktop";

const DesktopContainer = () => {
  return (
    <div>
      <NaslovneVijesti />
      <div className="container">
        <div className="row mt-4">
          <div className="col-xl-8">
            <NajnovijeDesktop />
            <GrudeOnline />
            <Promo />
            <OstaleVijesti />
            <div className="row g-0 gx-2">
              <div className="col-md-6">
                <SportNaslovna />
              </div>
              <div className="col-md-6">
                <GospodarstvoNaslovna />
              </div>
            </div>
            <LifestyleNaslovna />
            {/* <GalerijeNaslovna /> */}
          </div>
          <div className="col-xl-4">
            <GoogleAds
              slot="/31722200/desktop_prvi_desno"
              id="div-gpt-ad-1748176938350-0"
              sizes={[
                [300, 600],
                [300, 250],
                [336, 280],
              ]}
            />
            <Popularno />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopContainer;

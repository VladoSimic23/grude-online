import GoogleAds from "../GoogleAds/GoogleAds";
import GalerijeNaslovna from "./GalerijeNaslovna/GalerijeNaslovna";
import GospodarstvoNaslovna from "./Gospodarstvo/GospodarstvoNaslovna";
import GrudeOnline from "./GrudeOnline/GrudeOnline";
import LifestyleNaslovna from "./Lifestyle/LifestyleNaslovna";
import NaslovneVijesti from "./NaslovneVijesti/NaslovneVijesti";
import OstaleVijesti from "./OstaleVijesti/OstaleVijesti";
import Popularno from "./Popularno/Popularno";
import Promo from "./Promo/Promo";
import SportNaslovna from "./Sport/SportNaslovna";

const DesktopContainer = () => {
  return (
    <div>
      <NaslovneVijesti />
      <div className="container">
        <Promo />
        <div className="row mt-4">
          <div className="col-xl-9">
            <GrudeOnline />
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
            <GalerijeNaslovna />
          </div>
          <div className="col-xl-3">
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

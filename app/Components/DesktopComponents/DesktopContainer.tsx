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
        <div className="row mt-4">
          <div className="col-md-9">
            <GrudeOnline />
            <OstaleVijesti />
            <div className="row">
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
          <div className="col-md-3">
            <Popularno />
            <Promo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopContainer;

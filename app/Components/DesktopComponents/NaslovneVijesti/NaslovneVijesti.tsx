import React from "react";
import Naslovna from "./Naslovna";
import OstaleNaslovne from "./OstaleNaslovne";
import desktopStyle from "../css/desktop.module.css";
//import Popularno from "../Popularno/Popularno";

const NaslovneVijesti = () => {
  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <div className="row p-0">
        <div className="col-lg-8">
          <Naslovna />
        </div>
        <div className={`col-lg-4 ${desktopStyle.ostaleNaslovne}`}>
          <OstaleNaslovne />
        </div>
      </div>
    </div>
    // <div className="container" style={{ marginTop: "30px" }}>
    //   <div className="row p-0 gx-3">
    //     <div className="col-lg-9">
    //       <Naslovna />
    //       <div className={`${desktopStyle.ostaleNaslovne}`}>
    //         <OstaleNaslovne />
    //       </div>
    //     </div>
    //     <div className="col-lg-3">
    //       <Popularno />
    //     </div>
    //   </div>
    // </div>
  );
};

export default NaslovneVijesti;

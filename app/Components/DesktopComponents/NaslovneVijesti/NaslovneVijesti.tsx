import React from "react";
import Naslovna from "./Naslovna";
import OstaleNaslovne from "./OstaleNaslovne";

const NaslovneVijesti = () => {
  return (
    <div className="container" style={{ marginTop: "30px", padding: "0 30px" }}>
      <div className="row">
        <div className="col-lg-6 p-1">
          <Naslovna />
        </div>
        <div className="col-lg-6">
          <OstaleNaslovne />
        </div>
      </div>
    </div>
  );
};

export default NaslovneVijesti;

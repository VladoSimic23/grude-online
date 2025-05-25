import React from "react";
import Naslovna from "./Naslovna";
import OstaleNaslovne from "./OstaleNaslovne";

const NaslovneVijesti = () => {
  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <div className="row p-0 gx-3">
        <div className="col-lg-6">
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

import React, { Suspense } from "react";
//import MobileIzdvojeno from "./MobileHomepage/MobileIzdvojeno/MobileIzdvojeno";
import MobileNajnovije from "./MobileHomepage/MobileNajnovije/MobileNajnovijeServer/MobileNajnovije";
import MobileHomepageClient from "./MobileHomepage/MobileNajnovije/MobileNajnovijeClient/MobileHomepageClient";
//import MobilePromo from "./MobilePromo/MobilePromo";
//mport MobilePopularno from "./MobilePopularno/MobilePopularno";

const MobileContainer = () => {
  return (
    <>
      <Suspense
        fallback={<h2 style={{ color: "white" }}>Loading Najnovije ...</h2>}
      >
        <div className="container">
          <MobileNajnovije />
        </div>
      </Suspense>

      <div className="container">
        <MobileHomepageClient />
      </div>
    </>
  );
};

export default MobileContainer;

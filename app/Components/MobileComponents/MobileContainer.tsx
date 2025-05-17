import React from "react";
//import MobileIzdvojeno from "./MobileHomepage/MobileIzdvojeno/MobileIzdvojeno";
import MobileNajnovije from "./MobileHomepage/MobileNajnovije/MobileNajnovijeServer/MobileNajnovije";
import MobileHomepageClient from "./MobileHomepage/MobileNajnovije/MobileNajnovijeClient/MobileHomepageClient";
//import NewsCarousel from "../Comments/bootCarousel/Carousel1";
//import MobilePromo from "./MobilePromo/MobilePromo";
//mport MobilePopularno from "./MobilePopularno/MobilePopularno";

const MobileContainer = () => {
  return (
    <>
      <div>
        {/* <NewsCarousel /> */}
        <MobileNajnovije />
      </div>

      <div>
        <MobileHomepageClient />
      </div>
    </>
  );
};

export default MobileContainer;

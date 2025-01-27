import React, { Suspense } from "react";
import MobileIzdvojeno from "./MobileHomepage/MobileIzdvojeno/MobileIzdvojeno";
import MobileNajnovije from "./MobileHomepage/MobileNajnovije/MobileNajnovijeServer/MobileNajnovije";
import MobileHomepageClient from "./MobileHomepage/MobileNajnovije/MobileNajnovijeClient/MobileHomepageClient";
import MobilePromo from "./MobilePromo/MobilePromo";
import MobilePopularno from "./MobilePopularno/MobilePopularno";

const MobileContainer = () => {
  return (
    <div>
      <Suspense
        fallback={<h2 style={{ color: "white" }}>Loading Izdvojeno ...</h2>}
      >
        <MobileIzdvojeno />
      </Suspense>

      <Suspense
        fallback={<h2 style={{ color: "white" }}>Loading Najnovije ...</h2>}
      >
        <MobileNajnovije />
      </Suspense>

      <MobileHomepageClient />

      <Suspense
        fallback={<h2 style={{ color: "white" }}>Loading Promo ...</h2>}
      >
        <MobilePromo />
      </Suspense>

      <Suspense
        fallback={<h2 style={{ color: "white" }}>Loading Popularno ...</h2>}
      >
        <MobilePopularno />
      </Suspense>
    </div>
  );
};

export default MobileContainer;

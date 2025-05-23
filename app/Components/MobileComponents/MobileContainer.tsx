import React from "react";
import MobileNajnovije from "./MobileHomepage/MobileNajnovije/MobileNajnovijeServer/MobileNajnovije";
import MobileHomepageClient from "./MobileHomepage/MobileNajnovije/MobileNajnovijeClient/MobileHomepageClient";

const MobileContainer = () => {
  return (
    <>
      <div>
        <MobileNajnovije />
      </div>

      <div>
        <MobileHomepageClient />
      </div>
    </>
  );
};

export default MobileContainer;

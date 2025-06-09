"use client";

import Script from "next/script";

const TestAd = () => {
  return (
    <div
      id="div-gpt-ad-1748176581901-0"
      style={{ minWidth: "728px", minHeight: "90px" }}
    >
      <Script
        id="google-ad-script" // Dodajemo jedinstveni id
        strategy="afterInteractive" // Učitava se nakon što je stranica interaktivna
        dangerouslySetInnerHTML={{
          __html: `
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1748176581901-0'); });
          `,
        }}
      />
    </div>
  );
};

export default TestAd;

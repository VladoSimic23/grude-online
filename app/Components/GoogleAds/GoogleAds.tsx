"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    googletag: typeof googletag;
  }
}

export default function GoogleAds() {
  useEffect(() => {
    // Inicijaliziraj googletag ako nije definiran
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      // Definiraj oglasni slot i dodaj servis

      window.googletag
        .defineSlot(
          "/31722200/desktop_prvi_desno",
          [
            [300, 600],
            [300, 250],
            [336, 280],
          ],
          "div-gpt-ad-1748176938350-0"
        )
        ?.addService(googletag.pubads());

      // Konfiguriraj oglase
      window.googletag.pubads().enableSingleRequest();
      window.googletag.enableServices();

      // Prikaži oglas
      window.googletag.display("div-gpt-ad-1");
    });
  }, []);

  return (
    <>
      {/* Učitaj Google Publisher Tag skriptu */}
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
      />
      {/* Div za oglas */}
      <div
        id="div-gpt-ad-1748176938350-0"
        style={{ width: 970, height: 250 }}
      />
    </>
  );
}

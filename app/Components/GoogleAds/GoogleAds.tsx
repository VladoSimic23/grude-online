"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    googletag: typeof googletag;
  }
}
export default function GoogleAds() {
  // Ne trebaš declare global ako koristiš @types/googletag
  // TypeScript već zna za window.googletag

  useEffect(() => {
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      const slot = window.googletag
        .defineSlot("/31722200/desktop_970", [970, 250], "div-gpt-ad-1")
        ?.addService(window.googletag.pubads());

      window.googletag.pubads().enableSingleRequest();
      window.googletag.enableServices();
      window.googletag.display("div-gpt-ad-1");
    });
  }, []);

  return (
    <>
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
      />
      <div id="div-gpt-ad-1" style={{ width: 970, height: 250 }} />
    </>
  );
}

"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googletag: typeof googletag;
  }
}

type AdSize = [number, number];

export default function GoogleAds({
  slot,
  id,
  sizes,
}: {
  slot: string;
  id: string;
  sizes: AdSize[];
}) {
  useEffect(() => {
    // Inicijaliziraj googletag ako nije definiran
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      // Definiraj oglasni slot i dodaj servis

      window.googletag
        .defineSlot(slot, sizes, id)
        ?.addService(googletag.pubads());

      // Konfiguriraj oglase
      window.googletag.pubads().enableSingleRequest();
      window.googletag.enableServices();

      // Prikaži oglas
      window.googletag.display(id);
    });
  }, [id, sizes, slot]);

  return (
    <>
      {/* Učitaj Google Publisher Tag skriptu */}

      {/* Div za oglas */}
      <div
        id={id}
        style={{ margin: "0 auto", marginTop: "20px", textAlign: "center" }}
      />
    </>
  );
}

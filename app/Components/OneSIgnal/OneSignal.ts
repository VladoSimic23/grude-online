"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function OneSignalComp() {
  useEffect(() => {
    // if ("serviceWorker" in navigator && typeof window !== "undefined") {
    //   navigator.serviceWorker
    //     .register("/OneSignalSDKWorker.js") // Register the service worker
    //     .then(function (registration) {
    //       console.log(
    //         "Service Worker registered with scope:",
    //         registration.scope
    //       );
    //     })
    //     .catch(function (error) {
    //       console.error("Service Worker registration failed:", error);
    //     });
    // }

    if (typeof window !== "undefined" && OneSignal) {
      const initOneSignal = async () => {
        await OneSignal.init({
          appId: "902a9287-1752-476b-9567-007f8749dc7b", // Replace with your OneSignal App ID
          //allowLocalhostAsSecureOrigin: true, // For development
          serviceWorkerPath: "/OneSignalSDKWorker.js",
          serviceWorkerUpdaterPath: "/OneSignalSDKUpdaterWorker.js",
          notifyButton: {
            enable: true,
          },
        });
      };
      initOneSignal();
    }
  }, []);

  return null;
}

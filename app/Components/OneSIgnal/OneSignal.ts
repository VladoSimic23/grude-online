// "use client";

// import { useEffect } from "react";
// import OneSignal from "react-onesignal";

// // interface IOneSignalOneSignal {
// // 	Slidedown: IOneSignalSlidedown;
// // 	Notifications: IOneSignalNotifications;
// // 	Session: IOneSignalSession;
// // 	User: IOneSignalUser;
// // 	Debug: IOneSignalDebug;
// // 	login(externalId: string, jwtToken?: string): Promise<void>;
// // 	logout(): Promise<void>;
// // 	init(options: IInitObject): Promise<void>;
// // 	setConsentGiven(consent: boolean): Promise<void>;
// // 	setConsentRequired(requiresConsent: boolean): Promise<void>;
// // }

// const OneSignalClient: React.FC = () => {
//   useEffect(() => {
//     // Check if the service worker is supported in the browser
//     if ("serviceWorker" in navigator && typeof window !== "undefined") {
//       navigator.serviceWorker
//         .register("/OneSIgnalSDKWorker.js") // Register the service worker
//         .then(function (registration) {
//           console.log(
//             "Service Worker registered with scope:",
//             registration.scope
//           );
//         })
//         .catch(function (error) {
//           console.error("Service Worker registration failed:", error);
//         });

//       // Register OneSignal SDK (If you are using OneSignal)
//       if (typeof window !== "undefined" && OneSignal) {
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         // let OneSignal  = OneSignal || [];

//         OneSignal.init({
//           appId: "902a9287-1752-476b-9567-007f8749dc7b", // Replace with your OneSignal App ID
//           safari_web_id:
//             "web.onesignal.auto.3a3b4186-8f32-4bbf-a810-be3f3be590a9", // Optional, only for Safari
//           allowLocalhostAsSecureOrigin: true,
//         });

//         // Show prompt to the user to allow push notifications
//         OneSignal.showSlidedownPrompt();
//       }
//     }
//   }, []);

//   return null; // This component does not render anything
// };

// export default OneSignalClient;

"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function OneSignalComp() {
  useEffect(() => {
    // Check if the service worker is supported in the browser
    if ("serviceWorker" in navigator && typeof window !== "undefined") {
      navigator.serviceWorker
        .register("/OneSIgnalSDKWorker.js") // Register the service worker
        .then(function (registration) {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch(function (error) {
          console.error("Service Worker registration failed:", error);
        });
    }

    if (typeof window !== "undefined" && OneSignal) {
      const initOneSignal = async () => {
        await OneSignal.init({
          appId: "902a9287-1752-476b-9567-007f8749dc7b", // Replace with your OneSignal App ID
          allowLocalhostAsSecureOrigin: true, // For development
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

"use client";
import { useEffect } from "react";

const DelayedScriptLoader = ({
  scriptUrl,
  delay = 3000,
}: {
  scriptUrl: string;
  delay: number;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      document.body.appendChild(script);
    }, delay);

    // Clean up the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [scriptUrl, delay]);

  return null; // This component does not render anything
};

export default DelayedScriptLoader;

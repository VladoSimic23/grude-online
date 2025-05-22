"use client";

import { useState } from "react";

export default function TestAd() {
  const [type, setType] = useState<"google" | "fake" | "image">("google");

  return (
    <div className="p-4 border rounded-md max-w-sm mx-auto my-6">
      <h2 className="text-lg font-bold mb-2">Test Ad ({type})</h2>

      {/* TYPE SWITCH */}
      <div className="mb-4 space-x-2">
        <button
          onClick={() => setType("google")}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          Google
        </button>
        <button
          onClick={() => setType("fake")}
          className="px-2 py-1 bg-green-500 text-white rounded"
        >
          Fake
        </button>
        <button
          onClick={() => setType("image")}
          className="px-2 py-1 bg-gray-700 text-white rounded"
        >
          Image
        </button>
      </div>

      {/* GOOGLE TEST AD */}
      {type === "google" && (
        <div>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-0000000000000000"
            data-ad-slot="0000000000"
            data-adtest="on"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (adsbygoogle = window.adsbygoogle || []).push({});
            `,
            }}
          />
        </div>
      )}

      {/* FAKE AD */}
      {type === "fake" && (
        <div className="border p-3 bg-gray-100 text-sm font-sans">
          <span className="text-xs text-gray-400">Ad</span>
          <h4 className="font-bold mt-1">Kupite najbolji VPN 2025</h4>
          <p>Zaštitite svoju privatnost online uz 75% popusta.</p>
          <a href="#" className="text-blue-600">
            www.supervpn.com
          </a>
        </div>
      )}

      {/* IMAGE AD */}
      {type === "image" && (
        <img
          src="https://placehold.co/300x250?text=Test+Ad"
          alt="Test ad"
          className="rounded border"
        />
      )}
    </div>
  );
}

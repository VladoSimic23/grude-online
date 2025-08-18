import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.grude-online.info",
        pathname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:path",
        destination: "/category/crna-kronika/:path",
      },
      // {
      //   source: "/tag/:slug",
      //   destination: "/category/tag/:slug",
      // },
    ];
  },
  // async headers() {
  //   return [
  //     {
  //       // Gdje se primjenjuje → na sve rute
  //       source: "/(.*)",
  //       headers: [
  //         // 🔒 HSTS – prisiljava HTTPS
  //         {
  //           key: "Strict-Transport-Security",
  //           value: "max-age=63072000; includeSubDomains; preload",
  //         },
  //         // 🛡 XSS zaštita
  //         {
  //           key: "X-XSS-Protection",
  //           value: "1; mode=block",
  //         },
  //         // 🛡 Sprječava iframe embedding (clickjacking)
  //         {
  //           key: "X-Frame-Options",
  //           value: "SAMEORIGIN",
  //         },
  //         // 🛡 Skriva detalje servera
  //         {
  //           key: "X-Powered-By",
  //           value: "Next.js",
  //         },
  //         // ⚡ Cache kontrola za statički sadržaj
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=31536000, immutable",
  //         },
  //         // 🛡 Content Type sniffing zaštita
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         // 🔐 Referrer politika
  //         {
  //           key: "Referrer-Policy",
  //           value: "strict-origin-when-cross-origin",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ✅ This allows all external image sources
      },
    ],
  },
};

export default nextConfig;

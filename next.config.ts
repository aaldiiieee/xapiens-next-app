import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "reqres.in",
      },
    ],
  },
};

export default nextConfig;

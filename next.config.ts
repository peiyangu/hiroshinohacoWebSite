import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hiroshinohacoWebSite",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

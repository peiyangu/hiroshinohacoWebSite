import type { NextConfig } from "next";

const BASE_PATH = "/hiroshinohacoWebSite";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
};

export default nextConfig;

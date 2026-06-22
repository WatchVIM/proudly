import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@proudly/shared"],
  experimental: {
    typedRoutes: false
  }
};

export default nextConfig;

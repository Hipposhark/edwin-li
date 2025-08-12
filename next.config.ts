import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/edwin-li",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
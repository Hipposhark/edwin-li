import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath:  isProd ? "/edwin-li" : "",
  assetPrefix: isProd ? "/edwin-li" : "",
  images: { unoptimized: true }
};

export default nextConfig;
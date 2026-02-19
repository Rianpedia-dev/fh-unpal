import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  generateBuildId: async () => "fhunpal-build",
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["better-sqlite3"],
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  generateBuildId: async () => "fhunpal-build",
};

export default nextConfig;

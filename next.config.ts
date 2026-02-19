import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  serverExternalPackages: ["better-sqlite3"],
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  generateBuildId: async () => {
    return "fhunpal-build";
  },
};

export default nextConfig;

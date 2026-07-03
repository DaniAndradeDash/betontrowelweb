import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:category(acabado-de-concreto|compactacion|vibracion|herramientas-de-concreto)/:id(\\d+)",
        destination: "/:category",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

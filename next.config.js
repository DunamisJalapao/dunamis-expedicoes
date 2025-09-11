/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations - simplified for faster first load
  compress: true,
  poweredByHeader: false,

  // Image optimization - simplified
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // 1 day instead of 1 year
    dangerouslyAllowSVG: true,
  },

  // Minimal experimental features
  experimental: {
    optimizePackageImports: ["react-icons"],
  },

  // Simplified webpack
  webpack(config) {
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  // Minimal headers
  async headers() {
    return [
      {
        source: "/assets/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

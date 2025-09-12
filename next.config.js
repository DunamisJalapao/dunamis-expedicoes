/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  swcMinify: true,

  // Modern browser support - reduce polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // // Image optimization - fixed WebP support with fallbacks
  // images: {
  //   formats: ["image/webp", "image/avif"],
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  //   // minimumCacheTTL: 86400, // 1 day to avoid cache issues
  //   dangerouslyAllowSVG: true,
  //   unoptimized: false,
  //   loader: "default",
  //   domains: [],
  //   remotePatterns: [],
  // },

  // Experimental features for performance - simplified
  experimental: {
    optimizePackageImports: ["react-icons", "react-responsive-carousel"],
  },

  // Webpack optimizations - simplified
  webpack(config, { dev, isServer }) {
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // Basic production optimizations
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            priority: 10,
          },
        },
      };
    }

    return config;
  },

  // Headers for better caching - fixed syntax
  // async headers() {
  //   return [
  //     {
  //       source: "/assets/:path*",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=31536000, immutable",
  //         },
  //       ],
  //     },
  //     {
  //       source: "/_next/static/:path*",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=31536000, immutable",
  //         },
  //       ],
  //     },
  //     {
  //       source: "/fonts/:path*",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=31536000, immutable",
  //         },
  //       ],
  //     },
  //     {
  //       source: "/:path*\\.(webp|avif|jpg|jpeg|png|gif)",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=31536000, immutable",
  //         },
  //         {
  //           key: "Accept-Ranges",
  //           value: "bytes",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  swcMinify: true,

  // Modern browser support - reduce polyfills
  compiler: {
    // Mantém console.error em produção para debug, remove apenas console.log e console.warn
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error"],
    } : false,
  },

  // Image optimization - WebP and AVIF support with iOS 26 compatibility
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for static images
    dangerouslyAllowSVG: true,
    // Relaxed CSP for iOS 26 compatibility - allows necessary scripts while maintaining security
    contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.googletagmanager.com https://connect.facebook.net https://*.facebook.com; frame-src 'self' https://www.googletagmanager.com;",
    unoptimized: false,
    loader: "default",
    domains: [],
    remotePatterns: [],
  },

  // Experimental features for performance
  experimental: {
    optimizePackageImports: ["react-icons", "lucide-react", "react-awesome-reveal"],
  },

  // Webpack optimizations - simplified
  webpack(config, { dev, isServer }) {
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // Advanced production optimizations
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunks
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            priority: 20,
            reuseExistingChunk: true,
          },
          // React and React-DOM separate
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            name: "react",
            chunks: "all",
            priority: 30,
            reuseExistingChunk: true,
          },
          // Icons separate
          icons: {
            test: /[\\/]node_modules[\\/](react-icons|lucide-react)[\\/]/,
            name: "icons",
            chunks: "all",
            priority: 25,
            reuseExistingChunk: true,
          },
          // Common chunks
          common: {
            minChunks: 2,
            chunks: "all",
            priority: 10,
            reuseExistingChunk: true,
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages configuration
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Modern browser support - reduce polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Turbopack configuration (Next.js 16+ uses Turbopack by default)
  turbopack: {},

  // Image optimization - AVIF e WebP para melhor performance
  // Nota: unoptimized está definido acima para GitHub Pages
  // Se não usar GitHub Pages, remova output: "export" e images.unoptimized acima

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

  // Headers não funcionam com static export (GitHub Pages)
  // Cache é gerenciado pelo GitHub Pages automaticamente
};

module.exports = nextConfig;

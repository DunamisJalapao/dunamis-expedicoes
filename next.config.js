/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages configuration (domínio customizado - sem basePath)
  // output: "export" only for production builds (causes issues with Turbopack in dev)
  ...(process.env.NODE_ENV === "production" && { output: "export" }),
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
  // Empty config to silence the warning - webpack config is kept for production builds
  turbopack: {},

  // Image optimization - AVIF e WebP para melhor performance
  // Nota: unoptimized está definido acima para GitHub Pages
  // Se não usar GitHub Pages, remova output: "export" e images.unoptimized acima

  // Experimental features for performance - simplified
  experimental: {
    optimizePackageImports: [
      "react-responsive-carousel",
      "react-awesome-reveal",
    ],
  },

  // Webpack optimizations - kept for production builds (when not using Turbopack)
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

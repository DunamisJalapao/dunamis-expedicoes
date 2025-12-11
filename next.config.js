/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages configuration (domínio customizado - sem basePath)
  // output: "export" only for production builds (causes issues with Turbopack in dev)
  ...(process.env.NODE_ENV === "production" && { output: "export" }),
  images: {
    unoptimized: true, // Required for static export
    // Configurar qualidades de imagem para evitar warnings
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Headers de segurança e performance (não funcionam com static export, mas documentado)
  // Para produção com servidor, descomente:
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'X-DNS-Prefetch-Control',
  //           value: 'on'
  //         },
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'SAMEORIGIN'
  //         },
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff'
  //         },
  //         {
  //           key: 'Referrer-Policy',
  //           value: 'strict-origin-when-cross-origin'
  //         }
  //       ]
  //     }
  //   ]
  // },

  // Modern browser support - reduce polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Turbopack configuration (Next.js 16+ uses Turbopack by default)
  // Empty config to silence the warning - webpack config is kept for production builds
  turbopack: {},

  // Experimental features for performance
  experimental: {
    optimizePackageImports: [
      "react-responsive-carousel",
      "react-awesome-reveal",
      "lucide-react",
      // react-icons removido para evitar problemas com HMR
    ],
    // Otimizações de bundle
    optimizeCss: true,
  },

  // Webpack optimizations - kept for production builds (when not using Turbopack)
  webpack(config, { dev, isServer }) {
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // Advanced production optimizations
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
              priority: 20,
            },
            // React e React-DOM separados
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              name: "react",
              chunks: "all",
              priority: 30,
            },
            // Carousel separado (pesado)
            carousel: {
              test: /[\\/]node_modules[\\/]react-responsive-carousel[\\/]/,
              name: "carousel",
              chunks: "async",
              priority: 25,
            },
            // Common chunk para código compartilhado
            common: {
              minChunks: 2,
              chunks: "async",
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
        // Otimizações adicionais
        moduleIds: "deterministic",
        runtimeChunk: "single",
      };
    }

    return config;
  },

  // Headers não funcionam com static export (GitHub Pages)
  // Cache é gerenciado pelo GitHub Pages automaticamente
};

module.exports = nextConfig;

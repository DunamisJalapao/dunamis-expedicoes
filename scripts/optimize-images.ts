import { existsSync, mkdirSync } from "fs";
import { basename, join } from "path";
import sharp from "sharp";

interface ImageConfig {
  name: string;
  sizes: { width: number; height: number }[];
  sourcePath: string;
}

const IMAGE_CONFIGS: ImageConfig[] = [
  {
    name: "home1",
    sizes: [
      { width: 1920, height: 1080 },
      { width: 1280, height: 720 },
      { width: 768, height: 432 },
    ],
    sourcePath: "public/home1.webp",
  },
  {
    name: "home2",
    sizes: [
      { width: 1920, height: 1080 },
      { width: 1280, height: 720 },
      { width: 768, height: 432 },
    ],
    sourcePath: "public/home2.webp",
  },
  {
    name: "home3",
    sizes: [
      { width: 1920, height: 1080 },
      { width: 1280, height: 720 },
      { width: 768, height: 432 },
    ],
    sourcePath: "public/home3.webp",
  },
  {
    name: "pack3",
    sizes: [{ width: 665, height: 887 }],
    sourcePath: "public/pack3.webp",
  },
  {
    name: "pack4",
    sizes: [{ width: 665, height: 887 }],
    sourcePath: "public/pack4.webp",
  },
  {
    name: "pack5",
    sizes: [{ width: 665, height: 887 }],
    sourcePath: "public/pack5.webp",
  },
  {
    name: "logo",
    sizes: [{ width: 333, height: 124 }],
    sourcePath: "public/assets/logo-white.webp",
  },
  {
    name: "bg",
    sizes: [{ width: 1920, height: 1080 }],
    sourcePath: "public/bg.webp",
  },
];

const OUTPUT_DIR = "public/images";
// Qualidade mais alta para mobile (LCP crítico) e qualidade padrão para desktop
const AVIF_QUALITY_MOBILE = 85; // Alta qualidade para mobile (768x432)
const AVIF_QUALITY_DESKTOP = 48; // Qualidade padrão para desktop
const AVIF_EFFORT = 6;
const WEBP_QUALITY = 70;

async function optimizeImage(
  sourcePath: string,
  name: string,
  sizes: { width: number; height: number }[]
): Promise<void> {
  if (!existsSync(sourcePath)) {
    console.warn(`⚠️  Source image not found: ${sourcePath}`);
    return;
  }

  console.log(`\n📸 Processing ${name}...`);

  for (const size of sizes) {
    const sizeSuffix = sizes.length > 1 ? `-${size.width}x${size.height}` : "";

    // Usa qualidade alta para mobile (768x432) - crítico para LCP
    const isMobile = size.width === 768;
    const avifQuality = isMobile ? AVIF_QUALITY_MOBILE : AVIF_QUALITY_DESKTOP;

    // Generate AVIF com qualidade otimizada
    const avifPath = join(OUTPUT_DIR, `${name}${sizeSuffix}.avif`);
    try {
      await sharp(sourcePath)
        .resize(size.width, size.height, {
          fit: "cover",
          position: "center",
        })
        .avif({ quality: avifQuality, effort: AVIF_EFFORT })
        .toFile(avifPath);
      console.log(
        `  ✅ Generated: ${basename(avifPath)} (quality: ${avifQuality})`
      );
    } catch (error) {
      console.error(`  ❌ Failed to generate AVIF for ${name}:`, error);
    }

    // Generate WebP
    const webpPath = join(OUTPUT_DIR, `${name}${sizeSuffix}.webp`);
    try {
      await sharp(sourcePath)
        .resize(size.width, size.height, {
          fit: "cover",
          position: "center",
        })
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpPath);
      console.log(`  ✅ Generated: ${basename(webpPath)}`);
    } catch (error) {
      console.error(`  ❌ Failed to generate WebP for ${name}:`, error);
    }
  }
}

async function optimizeAllImages(): Promise<void> {
  console.log("🚀 Starting image optimization...\n");

  // Create output directory if it doesn't exist
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Created directory: ${OUTPUT_DIR}`);
  }

  // Process all images
  for (const config of IMAGE_CONFIGS) {
    await optimizeImage(config.sourcePath, config.name, config.sizes);
  }

  console.log("\n✨ Image optimization complete!");
  console.log(`📦 Output directory: ${OUTPUT_DIR}`);
}

// Run the optimization
optimizeAllImages().catch((error) => {
  console.error("❌ Fatal error during optimization:", error);
  process.exit(1);
});

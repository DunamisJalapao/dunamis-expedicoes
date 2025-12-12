import { AnalyticsConsent } from "@/components/AnalyticsConsent";
import { ButtonWhats } from "@/components/ButtonWhats";
import { StructuredData } from "@/components/StructuredData";
import type { Metadata } from "next";
import { bardonClean, bardonStamp, blueDream, workSans } from "./fonts";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Dunamis Expedições | Melhor agência do Jalapão",
    template: "%s | Dunamis Expedições",
  },
  description:
    "A melhor agência de turismo do Jalapão. Pacotes de 3, 4 e 5 dias com hospedagem, alimentação e transporte inclusos. Experiências únicas no Tocantins com guias especializados.",
  keywords: [
    "Jalapão como ir",
    "Melhor agência jalapão",
    "Viagem jalapão preço",
    "Pacote de viagem jalapão",
    "Onde fica e como chegar ao Jalapão",
    "Melhores fervedouros",
    "Fervedouro bela vista",
    "Lagoa do japonês",
    "O que fazer no jalapão",
    "Melhor época para ir ao jalapão",
    "melhores agências jalapão tripadvisor",
    "agência de turismo",
    "jalapão",
    "turismo em palmas",
    "expedição jalapão",
    "roteiro jalapão",
    "turismo tocantins",
    "fervedouros jalapão",
    "dunas jalapão",
    "cachoeiras jalapão",
  ],
  authors: [{ name: "Dunamis Expedições" }],
  creator: "Dunamis Expedições",
  publisher: "Dunamis Expedições",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dunamisexpedicoes.com.br"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  applicationName: "Dunamis Expedições",
  verification: {
    google: "jn0w3o7CCimMkNFtzZNs8rMlwksnf8OQI9zt4yEH96s",
    other: {
      "facebook-domain-verification": "ry738c6gr998pdmli259lth77djm75",
    },
  },
  category: "tourism",
  openGraph: {
    type: "website",
    url: "https://dunamisexpedicoes.com.br/",
    title: "Dunamis Expedições | Melhor agência do Jalapão",
    description:
      "A melhor agência de turismo do Jalapão. Pacotes de 3, 4 e 5 dias com hospedagem, alimentação e transporte inclusos.",
    siteName: "Dunamis Expedições",
    locale: "pt_BR",
    images: [
      {
        url: "/home1.webp",
        width: 1200,
        height: 630,
        alt: "Dunamis Expedições - Jalapão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunamis Expedições | Melhor agência do Jalapão",
    description:
      "A melhor agência de turismo do Jalapão. Pacotes de 3, 4 e 5 dias com hospedagem, alimentação e transporte inclusos.",
    images: ["/home1.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* DNS prefetch apenas para recursos sempre carregados */}
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
        {/* Preconnect removido para GTM/FB pois scripts são carregados apenas após consent */}
        {/* Prefetch para recursos críticos */}
        <link rel="prefetch" href="/assets/logo-white.webp" as="image" />

        {/* Preload das fontes críticas do hero (WorkSans, BardonStamp, BardonClean) */}
        <link
          rel="preload"
          href="/fonts/WorkSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/BardonStamp-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/BardonClean-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Critical CSS inline for faster FCP - otimizado */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            body { margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; }
            .font-bardon-stamp { font-family: var(--font-bardon-stamp), system-ui, sans-serif; }
            .font-bardon-clean { font-family: var(--font-bardon-clean), system-ui, sans-serif; }
            .font-blue-dream { font-family: var(--font-blue-dream), system-ui, sans-serif; }
            .font-work-sans { font-family: var(--font-work-sans), system-ui, sans-serif; }
            .text-stroke-mobile { -webkit-text-stroke: 2px #fff; }
            .text-stroke { -webkit-text-stroke: 3px #fff; }
            @media (min-width: 1024px) { .text-stroke-mobile { -webkit-text-stroke: 3px #fff; } }
            /* Otimizações de performance */
            * { box-sizing: border-box; }
            img { max-width: 100%; height: auto; }
            [loading="lazy"] { content-visibility: auto; }
            /* Otimização LCP - imagem hero */
            img[fetchpriority="high"] { content-visibility: auto; }
          `,
          }}
        />

        {/* Preload da imagem LCP - Vercel otimiza automaticamente via next/image */}
        {/* Preload mantido para garantir melhor LCP inicial */}
        <link
          rel="preload"
          as="image"
          href="/images/home2-1920x1080.avif"
          fetchPriority="high"
        />

        {/* Structured Data para SEO */}
        <StructuredData type="home" />
      </head>
      <body
        className={`${bardonStamp.variable} ${blueDream.variable} ${workSans.variable} ${bardonClean.variable}`}
      >
        <Providers>{children}</Providers>
        <AnalyticsConsent />
        <ButtonWhats />
      </body>
    </html>
  );
}

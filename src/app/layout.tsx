import { ButtonWhats } from "@/components/ButtonWhats";
import { StructuredData } from "@/components/StructuredData";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

// Fontes otimizadas: preload apenas da fonte crítica (bardon-stamp para hero)
const blueDream = localFont({
  src: [
    {
      path: "../../public/fonts/BLUEDREAM-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-blue-dream",
  display: "optional", // Fonte secundária - não bloqueia renderização
  preload: false,
});
const bardonStamp = localFont({
  src: [
    {
      path: "../../public/fonts/BardonStamp-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bardon-stamp",
  display: "swap", // Fonte crítica do hero - preload habilitado
  preload: true, // Preload da fonte crítica para melhor FCP
});
const bardonClean = localFont({
  src: [
    {
      path: "../../public/fonts/BardonClean-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bardon-clean",
  display: "optional", // Não crítica - não bloqueia
  preload: false,
});
const workSans = localFont({
  src: [
    {
      path: "../../public/fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
  display: "optional", // Não crítica - não bloqueia
  preload: false,
});

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
        {/* DNS prefetch para melhorar TTFB */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://connect.facebook.net"
          crossOrigin="anonymous"
        />

        {/* Preload da fonte crítica para melhor FCP */}
        <link
          rel="preload"
          href="/fonts/BardonStamp-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        {/* Critical CSS inline for faster FCP */}
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
          `,
          }}
        />

        {/* Preload da imagem LCP - primeira imagem do hero */}
        <link
          rel="preload"
          href="/home2.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Scripts otimizados - carregamento diferido para melhorar INP */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
              w[l] = w[l] || []; w[l].push({
                'gtm.start':
                  new Date().getTime(), event: 'gtm.js'
              }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                  'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-W8PHTL9X');`,
          }}
        />
        <Script
          id="fbq-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '7037029349725824');
            fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=7037029349725824&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script
          id="fbq-script-2"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              !(function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                  n.callMethod
                    ? n.callMethod.apply(n, arguments)
                    : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
              })(
                window,
                document,
                "script",
                "https://connect.facebook.net/en_US/fbevents.js"
              );
              fbq("init", "1119431815878981");
              fbq("track", "PageView");
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1119431815878981&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* Structured Data para SEO */}
        <StructuredData type="home" />
      </head>
      <body
        className={`${bardonStamp.variable} ${blueDream.variable} ${workSans.variable} ${bardonClean.variable}`}
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8PHTL9X"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>`,
          }}
        />
        <Providers>{children}</Providers>
        <ButtonWhats />
      </body>
    </html>
  );
}

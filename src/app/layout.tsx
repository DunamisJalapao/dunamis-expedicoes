import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'
import { Providers } from './providers'


const blueDream = localFont({
  src: [
    {
      path: '../../public/fonts/BLUEDREAM-Regular.otf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-blue-dream'
});
const bardonStamp = localFont({
  src: [
    {
      path: '../../public/fonts/BardonStamp-Regular.otf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-bardon-stamp'
});
const bardonClean = localFont({
  src: [
    {
      path: '../../public/fonts/BardonClean-Regular.otf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-bardon-clean'
});

const workSans = localFont({
  src: [
    {
      path: '../../public/fonts/WorkSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-work-sans'
});

export const metadata: Metadata = {
  title: {
    default: 'Dunamis Expedições',
    template: '%s | Dunamis Expedições'
  },
  description: 'A sua agência de turismo',
  keywords: [
    'Jalapão como ir',
    'Melhor agência jalapão',
    'Viagem jalapão preço',
    'Pacote de viagem jalapão',
    'Onde fica e como chegar ao Jalapão',
    'Melhores fervedouros',
    'Fervedouro bela vista',
    'Lagoa do japonês',
    'O que fazer no jalapão',
    'Melhor época para ir ao jalapão',
    'melhores agências jalapão tripadvisor',
    'agência de turismo',
    'jalapão',
    'turismo em palmas'
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  applicationName: 'Dunamis Expedições',
  verification: {
    google: 'jn0w3o7CCimMkNFtzZNs8rMlwksnf8OQI9zt4yEH96s'
  },
  category: 'tourism',
  openGraph: {
    type: "website",
    url: "https://dunamisexpedicoes.com.br/",
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
              w[l] = w[l] || []; w[l].push({
                'gtm.start':
                  new Date().getTime(), event: 'gtm.js'
              }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                  'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-W8PHTL9X');`}}>

        </Script>
        <Script>
          {`
            
          `}
        </Script>
      </head>
      <body className={`${bardonStamp.variable} ${blueDream.variable} ${workSans.variable} ${bardonClean.variable}`}>
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8PHTL9X"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>`}} />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

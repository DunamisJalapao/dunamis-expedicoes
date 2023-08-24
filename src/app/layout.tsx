import { Metadata } from 'next'
import { Lato } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'
import '../styles/globals.css'
import { Providers } from './providers'

const lato = Lato({ subsets: ['latin'], weight: ["400", "700", "900"], style: 'normal', variable: '--font-lato' })

const lemonMilk = localFont({
  src: [
    {
      path: '../../public/fonts/LEMONMILK-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LEMONMILK-Bold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-lemonMilk'
})

export const metadata: Metadata = {
  title: 'Dunamis Expedições',
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
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
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
    title: "Dunamis Expedições",
    description: "A sua agência de turismo",
    siteName: "Dunamis Expedições",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script>
          {`
            (function (w, d, s, l, i) {
              w[l] = w[l] || []; w[l].push({
                'gtm.start':
                  new Date().getTime(), event: 'gtm.js'
              }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                  'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-W8PHTL9X');
          `}
        </Script>

      </head>
      <body className={`${lato.variable} ${lemonMilk.variable}`}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8PHTL9X"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

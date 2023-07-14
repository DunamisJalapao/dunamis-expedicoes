import { Metadata } from 'next'
import { Lato } from 'next/font/google'
import localFont from 'next/font/local'
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
  category: 'tourism',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${lato.variable} ${lemonMilk.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

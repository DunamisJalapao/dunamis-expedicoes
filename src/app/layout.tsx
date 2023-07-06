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

export const metadata = {
  title: 'Dunamis Expedições',
  description: 'A sua agência de turismo',
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

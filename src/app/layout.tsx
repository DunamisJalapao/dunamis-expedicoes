import { Lato } from 'next/font/google'
import { Providers } from './providers'

const lato = Lato({ subsets: ['latin'], weight: ["400", "700", "900"], style: 'normal' })

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
      <body className={lato.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

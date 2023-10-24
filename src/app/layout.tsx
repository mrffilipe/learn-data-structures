import './globals.css'
import './fonts.css'

import Header from '@/components/Header'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aprender estruturas de dados',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
import 'app/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/header/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Igreja Cristã Sal da Terra',
  description: 'Mateus 5:13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
        <body className={inter.className}>
            <Header />
            {children}
        </body>
    </html>
  )
}

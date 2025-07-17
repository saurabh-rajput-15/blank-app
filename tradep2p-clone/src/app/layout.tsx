import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "TradeP2P - Peer-to-Peer Cryptocurrency Trading Platform",
  description: "Secure P2P cryptocurrency trading platform for buying and selling digital assets with Indian Rupee",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  )
}

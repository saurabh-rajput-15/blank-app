import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "TradeP2P - P2P Cryptocurrency Trading Platform",
  description: "Secure peer-to-peer cryptocurrency trading platform for buying and selling digital assets with Indian Rupee. Trade USDT, BTC, ETH with bank-level security.",
  keywords: "cryptocurrency, P2P trading, USDT, Bitcoin, Ethereum, crypto exchange, India",
  authors: [{ name: "TradeP2P" }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TradeP2P - P2P Cryptocurrency Trading Platform",
  description: "Secure P2P cryptocurrency trading platform for buying and selling digital assets with Indian Rupee",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Abril_Fatface, Averia_Serif_Libre, Open_Sans } from "next/font/google"
import "./globals.css"

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abril",
  display: "swap",
})

const averia = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-averia",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MEPHOCODEX",
  description: "Art & Commissions Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${abril.variable} ${averia.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  )
}

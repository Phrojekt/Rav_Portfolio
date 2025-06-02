import type React from "react"
import type { Metadata } from "next"
import { Nunito, Comfortaa } from "next/font/google"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "600", "700", "800"],
})
const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Ravly - Artist Portfolio",
  description: "Professional artist portfolio and commission services",
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
      <body className={`${nunito.variable} ${comfortaa.variable}`}>
        {children}
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { FramerMotionProvider } from "@/components/framer-motion-provider"

const inter = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Harsh Gandhi - Developer Portfolio",
  description: "Personal portfolio website showcasing my projects and skills as a developer",
  icons: "/favicon.ico"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <FramerMotionProvider>{children}</FramerMotionProvider>
      </body>
    </html>
  )
}



import './globals.css'
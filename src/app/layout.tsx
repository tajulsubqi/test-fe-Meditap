import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Provider from "./Provider"
import "./globals.css"
import { Toaster } from "react-hot-toast"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "VingzPoké",
  description: "Generated by create next app",
  icons: {
    icon: "/public/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "white",
                color: "green",
              },
            },
            error: {
              style: {
                background: "white",
                color: "red",
              },
            },
          }}
        />
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}

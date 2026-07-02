import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "VALE - Smarter Water Access",
  description: "Join the waitlist and be among the first to experience a better way to access, manage, and improve water in Enugu.",
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

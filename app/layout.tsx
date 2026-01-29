import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Moltbot',
  description: 'A Next.js application with TypeScript and Tailwind CSS',
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
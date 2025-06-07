import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Techflow',
  description: 'Created with Next.js, Tailwind CSS, and TypeScript',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

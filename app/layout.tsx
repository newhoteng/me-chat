import type { Metadata } from 'next'
import { Rubik, Inter } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'MeChat',
  description: 'Talk to and decide with your future self',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}

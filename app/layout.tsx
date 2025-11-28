import type { Metadata, Viewport } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-work-sans',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'TenTwenty Farms - From Our Farms To Your Hands',
  description: 'Welcome to TenTwenty Farms. Quality products from our farms to your hands.',
  keywords: 'farms, agriculture, fresh produce, quality products, TenTwenty Farms',
  authors: [{ name: 'TenTwenty Farms' }],
  creator: 'TenTwenty Farms',
  publisher: 'TenTwenty Farms',
  openGraph: {
    title: 'TenTwenty Farms - From Our Farms To Your Hands',
    description: 'Welcome to TenTwenty Farms. Quality products from our farms to your hands.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TenTwenty Farms',
    description: 'From Our Farms To Your Hands',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased ${workSans.variable}`}>{children}</body>
    </html>
  )
}


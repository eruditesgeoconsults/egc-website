import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Erudites GeoConsults | Professional Surveying & Geospatial Solutions',
  description: 'Innovation, precision, accuracy and excellence — delivering authoritative geospatial solutions across Nigeria and West Africa. Land surveying, GIS mapping, drone surveys, and engineering survey services.',
  keywords: ['surveying', 'geospatial', 'GIS', 'land surveying', 'drone survey', 'Nigeria', 'West Africa', 'engineering survey', 'topographic mapping'],
  authors: [{ name: 'Erudites GeoConsults' }],
  openGraph: {
    title: 'Erudites GeoConsults | Professional Surveying & Geospatial Solutions',
    description: 'Innovation, precision, accuracy and excellence — delivering authoritative geospatial solutions across Nigeria and West Africa.',
    type: 'website',
    locale: 'en_NG',
    siteName: 'Erudites GeoConsults',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erudites GeoConsults',
    description: 'Professional Surveying & Geospatial Solutions across Nigeria and West Africa',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#166534',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

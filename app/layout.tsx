import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { siteUrl, personName, portraitImage, personJsonLd } from '@/lib/site'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

const description = 'Monther Al-Omari is the CEO and co-founder of OHG, an award-winning packaging design and pre-press group in Amman, Jordan whose artwork reaches 55 markets. OHG’s sister company Brandex runs the all-in-one design asset library.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personName} | CEO & Co-Founder of OHG`,
    template: `%s | ${personName}`,
  },
  description,
  generator: 'v0.app',
  openGraph: {
    type: 'profile',
    siteName: personName,
    title: `${personName} | CEO & Co-Founder of OHG`,
    description,
    images: [{ url: portraitImage, alt: `${personName}, CEO and co-founder of OHG` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personName} | CEO & Co-Founder of OHG`,
    description,
    images: [portraitImage],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '256x256',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-192.png',
        type: 'image/png',
        sizes: '192x192',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

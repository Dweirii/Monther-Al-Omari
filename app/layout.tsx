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

const description = 'Welcome to the world of visionary leadership. Monther Al Omari, the founder and regional owner of OHG, stands at the helm of a remarkable journey spanning three decades of innovation, growth, and unwavering commitment to success.'

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
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
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

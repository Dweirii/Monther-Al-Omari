import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { siteUrl, personName } from '@/lib/site'
import { brandex } from '@/lib/profile'
import { brandexImages } from '@/lib/gallery'

const title = 'Brandex: the design asset library from OHG'
const description = `Brandex, sister company of ${personName}’s OHG: over a million mockups, packaging templates and PSD/EPS files, 600,000+ downloads and a design team on call.`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/brandex' },
  openGraph: { title, description, url: '/brandex', images: [brandexImages[0].src] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteUrl}/brandex#page`,
  url: `${siteUrl}/brandex`,
  name: title,
  description,
  inLanguage: 'en',
  about: { '@id': 'https://brandexme.com/#organization' },
  author: { '@id': `${siteUrl}/#person` },
}

export default function BrandexPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">Brandex</p>
          <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-balance">{brandex.headline}</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{brandex.intro}</p>
          <p className="text-muted-foreground leading-relaxed">
            Brandex is a sister company of{' '}
            <Link href="/ohg" className="text-foreground underline underline-offset-4 hover:text-primary">
              OHG
            </Link>
            , the packaging design and pre-press group co-founded by{' '}
            <Link href="/about" className="text-foreground underline underline-offset-4 hover:text-primary">
              {personName}
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" className="group">
              <Link href="https://brandexme.com" target="_blank" rel="noopener noreferrer">
                Visit brandexme.com
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {brandex.stats.map((item) => (
            <div key={item.label}>
              <p className="text-2xl md:text-3xl font-serif text-primary">{item.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Catalogue */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-10 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            The library
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandex.catalogue.map((item) => (
              <li key={item.name} className="border-t border-border pt-4">
                <p className="font-serif text-xl">{item.name}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Samples */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-10 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            From the library
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {brandexImages.map((image) => (
              <Link key={image.slug} href={`/gallery/${image.slug}`} className="group block">
                <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden border border-border group-hover:border-primary transition-colors">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground group-hover:text-primary transition-colors line-clamp-2">{image.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

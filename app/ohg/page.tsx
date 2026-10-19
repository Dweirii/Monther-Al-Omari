import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { siteUrl, personName } from '@/lib/site'
import { ohg, awards, whyOhg, clientGroups } from '@/lib/profile'
import { ohgImages } from '@/lib/gallery'

const title = 'OHG: packaging design and pre-press in Jordan and MENA'
const description = `OHG (Omari Holdings Group), co-founded and led by ${personName}, is an award-winning packaging design, reprographics and pre-press group in Amman, Jordan, one of the leading studios of its kind in the Middle East and North Africa, with artwork on shelves in 55 markets.`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/ohg' },
  openGraph: { title, description, url: '/ohg', images: [ohgImages[0].src] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteUrl}/ohg#page`,
  url: `${siteUrl}/ohg`,
  name: title,
  description,
  inLanguage: 'en',
  about: { '@id': 'https://ohg.world/#organization' },
  author: { '@id': `${siteUrl}/#person` },
}

const featured = ohgImages.filter((image) =>
  ['coca-cola', 'red-bull-classic', 'pepsi-splash', 'nescafe-gold', 'haagen-dazs-mango-raspberry-set', 'dove-body-wash-range', 'pringles-cheese', 'monster-original'].includes(image.slug),
)

export default function OhgPage() {
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
          <p className="text-primary font-medium tracking-widest uppercase text-sm">OHG · Omari Holdings Group</p>
          <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-balance">{ohg.headline}</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{ohg.intro}</p>
          <p className="text-muted-foreground leading-relaxed">
            OHG was co-founded and is led by{' '}
            <Link href="/about" className="text-foreground underline underline-offset-4 hover:text-primary">
              {personName}
            </Link>
            . Its sister company{' '}
            <Link href="/brandex" className="text-foreground underline underline-offset-4 hover:text-primary">
              Brandex
            </Link>{' '}
            runs the design asset library.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" className="group">
              <Link href="https://ohg.world" target="_blank" rel="noopener noreferrer">
                Visit ohg.world
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://ohg.world/contact" target="_blank" rel="noopener noreferrer">
                Contact OHG
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {ohg.stats.map((item) => (
            <div key={item.label}>
              <p className="text-2xl md:text-3xl font-serif text-primary">{item.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-4 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            What OHG does
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Two disciplines in one studio: the design, and the engineering that gets it printed exactly as approved.
          </p>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ohg.services.map((service, index) => (
              <li key={service.name} className="border-t border-border pt-4">
                <p className="text-primary text-sm font-medium">{String(index + 1).padStart(2, '0')}</p>
                <p className="font-serif text-xl mt-1">{service.name}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{service.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Work */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-4 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Work on shelves in 55 markets
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">{ohg.brandsQualifier}</p>
          <ul className="flex flex-wrap gap-3 mb-4">
            {ohg.brands.map((brand) => (
              <li key={brand} className="px-4 py-2 border border-border rounded-full text-sm">
                {brand}
              </li>
            ))}
          </ul>
          <p className="mb-10">
            <Link href="/clients" className="text-sm text-muted-foreground hover:text-primary underline underline-offset-4">
              All {clientGroups.reduce((sum, group) => sum + group.brands.length, 0)} brands by sector
            </Link>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featured.map((image) => (
              <Link key={image.slug} href={`/gallery/${image.slug}`} className="group block">
                <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden border border-border group-hover:border-primary transition-colors">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground group-hover:text-primary transition-colors">{image.title}</p>
              </Link>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-10 group">
            <Link href="/gallery">
              See more work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why OHG */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-4 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Why brands stay with OHG
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">Two disciplines, one studio. In OHG’s own words.</p>
          <ol className="grid md:grid-cols-3 gap-6 mb-12">
            {whyOhg.principles.map((item, index) => (
              <li key={item.title} className="p-6 border border-border rounded-lg">
                <p className="text-primary text-sm font-medium">{String(index + 1).padStart(2, '0')}</p>
                <p className="font-serif text-xl mt-1">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ol>
          <div className="grid md:grid-cols-3 gap-8">
            {whyOhg.themes.map((item) => (
              <div key={item.title} className="border-t border-border pt-4">
                <p className="font-serif text-xl">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors and formats */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Sectors
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              {ohg.sectors.map((sector) => (
                <li key={sector} className="border-b border-border pb-3">{sector}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Formats
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              {ohg.formats.map((format) => (
                <li key={format} className="border-b border-border pb-3">{format}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-10 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Case studies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ohg.caseStudies.map((study) => (
              <Link
                key={study.href}
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border border-border rounded-lg hover:border-primary transition-colors"
              >
                <p className="text-primary text-xs font-medium tracking-widest uppercase">{study.client}</p>
                <p className="font-serif text-xl mt-2 group-hover:text-primary transition-colors">{study.title}</p>
                <p className="text-sm text-muted-foreground mt-4 flex items-center gap-1">
                  Read on ohg.world <ArrowUpRight className="w-4 h-4" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-10 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Awards
          </h2>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <li key={award.name}>
                <p className="text-primary text-sm font-medium">{award.year}</p>
                <p className="font-serif text-lg mt-1">{award.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  )
}

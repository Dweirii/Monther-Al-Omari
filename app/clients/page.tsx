import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { siteUrl, personName, portraitImage } from '@/lib/site'
import { ohg, clientGroups } from '@/lib/profile'

const total = clientGroups.reduce((sum, group) => sum + group.brands.length, 0)

const title = `Brands reached by OHG: ${total} names on shelves in 55 markets`
const description = `${total} brands whose packaging carries artwork by ${personName}’s OHG: Coca-Cola, Pepsi, Nestlé, Unilever, Heineken, Red Bull, Colgate, Marlboro and more, by sector.`

export const metadata: Metadata = {
  title: 'Clients and brands',
  description,
  alternates: { canonical: '/clients' },
  openGraph: { title, description, url: '/clients', images: [portraitImage] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteUrl}/clients#page`,
  url: `${siteUrl}/clients`,
  name: title,
  description,
  inLanguage: 'en',
  about: { '@id': 'https://ohg.world/#organization' },
  author: { '@id': `${siteUrl}/#person` },
}

export default function ClientsPage() {
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
          <p className="text-primary font-medium tracking-widest uppercase text-sm">OHG · Clients and brands</p>
          <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-balance">
            Work that reaches shelves in 55 markets
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {total} brands whose packaging carries artwork engineered by{' '}
            <Link href="/ohg" className="text-foreground underline underline-offset-4 hover:text-primary">OHG</Link>
            , the award-winning packaging design and pre-press group co-founded by{' '}
            <Link href="/about" className="text-foreground underline underline-offset-4 hover:text-primary">{personName}</Link>
            {' '}in Amman, Jordan.
          </p>
          <p className="text-muted-foreground leading-relaxed">{ohg.brandsQualifier}</p>
        </div>
      </section>

      {/* Groups */}
      <section className="py-12 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto space-y-14">
          {clientGroups.map((group) => (
            <div key={group.sector}>
              <h2 className="text-2xl font-serif mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {group.sector}
                <span className="text-sm text-muted-foreground font-sans ml-2">{group.brands.length}</span>
              </h2>
              <ul className="flex flex-wrap gap-3">
                {group.brands.map((brand) => (
                  <li key={brand} className="px-4 py-2 border border-border rounded-full text-sm">
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif">See the work</h2>
          <p className="text-muted-foreground">Packaging programmes from the gallery, and the case studies on ohg.world.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="group">
              <Link href="/gallery">
                Gallery
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://ohg.world/work" target="_blank" rel="noopener noreferrer">
                ohg.world/work
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

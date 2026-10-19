import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { siteUrl, personName, portraitImage } from '@/lib/site'
import { companies } from '@/lib/about'
import { headline, bio, atAGlance, awards, investments, books } from '@/lib/profile'

const title = `About ${personName}`
const description = `${personName}: ${headline}`

export const metadata: Metadata = {
  title: { absolute: `${title} | CEO & Co-Founder of OHG` },
  description,
  alternates: { canonical: '/about', languages: { en: '/about', ar: '/ar' } },
  openGraph: { type: 'profile', title: `${title} | CEO & Co-Founder of OHG`, description, url: '/about', images: [portraitImage] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/about#page`,
  url: `${siteUrl}/about`,
  name: title,
  description,
  inLanguage: 'en',
  mainEntity: { '@id': `${siteUrl}/#person` },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="space-y-6">
            <p className="text-primary font-medium tracking-widest uppercase text-sm">About</p>
            <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-balance">
              {personName}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{headline}</p>
            <p className="text-sm text-muted-foreground">
              <Link href="/ar" lang="ar" className="hover:text-primary underline underline-offset-4">
                اقرأ هذه الصفحة بالعربية
              </Link>
            </p>
          </div>
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-border grayscale hover:grayscale-0 transition-all duration-500 relative justify-self-center">
            <Image src={portraitImage} alt={`${personName}, CEO and co-founder of OHG`} fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="py-12 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {atAGlance.map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-serif text-primary">{item.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Biography */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Biography
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            {bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-10 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Companies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {companies.map((company) => (
              <div key={company.name} className="p-8 border border-border rounded-lg">
                <h3 className="text-2xl font-serif">{company.name}</h3>
                {company.fullName !== company.name && (
                  <p className="text-sm text-muted-foreground mt-1">{company.fullName}</p>
                )}
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{company.description}</p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href={company.name === 'OHG' ? '/ohg' : '/brandex'}>
                      About {company.name}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={company.url} target="_blank" rel="noopener noreferrer">
                      {company.label}
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-4 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Awards
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            International recognition for OHG and its companies, from the Red Dot and iF Design Awards to the Campaign BIG Awards.
          </p>
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <li key={award.name} className="border-t border-border pt-4">
                <p className="text-primary text-sm font-medium">{award.year}</p>
                <p className="font-serif text-xl mt-1">{award.name}</p>
                <p className="text-sm text-muted-foreground mt-2">{award.note}</p>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" className="mt-10 group">
            <Link href="/awards">
              All awards
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Investments */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-10 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Investments
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investments.map((item) => (
              <li key={item.name} className="p-6 border border-border rounded-lg">
                <p className="text-primary text-xs font-medium tracking-widest uppercase">{item.sector}</p>
                <p className="font-serif text-xl mt-2">{item.name}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.summary}</p>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" className="mt-10 group">
            <Link href="/investments">
              Full portfolio
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Books */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-10 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Books
          </h2>
          <ul className="grid md:grid-cols-3 gap-6">
            {books.map((book) => (
              <li key={book.title}>
                <p className="font-serif text-xl">{book.title}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{book.summary}</p>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" className="mt-10 group">
            <Link href="/books">
              The books
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

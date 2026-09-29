import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ShowcaseGrid } from '@/components/showcase-grid'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ohgWork, brandexWork } from '@/lib/showcase'

export const metadata: Metadata = {
  title: 'OHG & Brandex',
  description:
    'Packaging work from OHG and design assets from Brandex, the companies of Monther Al-Omari, CEO and co-founder of OHG.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'OHG & Brandex | Monther Al-Omari',
    url: '/work',
    images: [ohgWork[0].image, brandexWork[0].image],
  },
}

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-medium flex items-center gap-4">
            <span className="w-3 h-3 rounded-sm bg-primary" />
            OHG & Brandex
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            Work from the companies of Monther Al-Omari. OHG engineers packaging design,
            reprographics and pre-press for brands across 55 markets. Brandex, its sister
            company, runs the design asset library that other people start from.
          </p>
        </div>
      </section>

      {/* OHG */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-serif flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                OHG
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">
                Packaging design, reprographics and pre-press engineering by Monther Al-Omari&apos;s OHG.
              </p>
            </div>
            <Button asChild variant="outline" className="group self-start md:self-auto">
              <Link href="https://ohg.world/work" target="_blank" rel="noopener noreferrer">
                More on ohg.world
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <ShowcaseGrid items={ohgWork} />
        </div>
      </section>

      {/* Brandex */}
      <section className="py-20 px-6 mt-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-serif flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Brandex
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">
                Packaging templates and mockups from Brandex, OHG&apos;s sister company.
              </p>
            </div>
            <Button asChild variant="outline" className="group self-start md:self-auto">
              <Link href="https://brandexme.com" target="_blank" rel="noopener noreferrer">
                More on brandexme.com
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <ShowcaseGrid items={brandexWork} />
        </div>
      </section>

      <Footer />
    </main>
  )
}

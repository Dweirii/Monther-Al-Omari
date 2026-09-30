import type { Metadata } from 'next'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { siteUrl, personName } from '@/lib/site'
import { ohgImages, brandexImages, type GalleryImage } from '@/lib/gallery'

// Deliberately not linked from anywhere on the site: Google finds it through the sitemap.

const title = `${personName} — OHG & Brandex work`
const description = `A gallery of packaging work by OHG and design assets by Brandex, the companies of ${personName}, CEO and co-founder of OHG.`

export const metadata: Metadata = {
  title: 'OHG & Brandex work',
  description,
  alternates: { canonical: '/gallery' },
  openGraph: {
    title,
    description,
    url: '/gallery',
    images: [ohgImages[0].src, brandexImages[0].src],
  },
}

const ohg = { '@type': 'Organization', name: 'OHG', url: 'https://ohg.world' }
const brandex = { '@type': 'Organization', name: 'Brandex', url: 'https://brandexme.com' }

const imageObject = (image: GalleryImage, creator: typeof ohg) => ({
  '@type': 'ImageObject',
  contentUrl: `${siteUrl}${image.src}`,
  name: image.title,
  caption: image.alt,
  width: image.width,
  height: image.height,
  creator,
  creditText: creator.name,
  copyrightNotice: `© ${creator.name}`,
})

const galleryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  '@id': `${siteUrl}/gallery#gallery`,
  url: `${siteUrl}/gallery`,
  name: title,
  description,
  about: { '@id': `${siteUrl}/#person` },
  associatedMedia: [
    ...ohgImages.map((image) => imageObject(image, ohg)),
    ...brandexImages.map((image) => imageObject(image, brandex)),
  ],
}

function Masonry({ images }: { images: GalleryImage[] }) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
      {images.map((image) => (
        <figure key={image.src} className="break-inside-avoid mb-4">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-auto rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">{image.title}</figcaption>
        </figure>
      ))}
    </div>
  )
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd).replace(/</g, '\\u003c') }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-medium flex items-center gap-4">
            <span className="w-3 h-3 rounded-sm bg-primary" />
            {title}
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            Packaging design, reprographics and pre-press by OHG, and packaging templates and
            mockups from Brandex, its sister company.
          </p>
        </div>
      </section>

      {/* OHG */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            OHG
          </h2>
          <Masonry images={ohgImages} />
        </div>
      </section>

      {/* Brandex */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Brandex
          </h2>
          <Masonry images={brandexImages} />
        </div>
      </section>

      <Footer />
    </main>
  )
}

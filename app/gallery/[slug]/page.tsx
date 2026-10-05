import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { siteUrl, personName } from '@/lib/site'
import { galleryImages, type GalleryImage } from '@/lib/gallery'

// One page per image: Google Images indexes an image with the page it is the main content of,
// and picks only a few from a page that holds a hundred.

export const dynamicParams = false

export function generateStaticParams() {
  return galleryImages.map((image) => ({ slug: image.slug }))
}

const creators = {
  OHG: { '@type': 'Organization', name: 'OHG', url: 'https://ohg.world' },
  Brandex: { '@type': 'Organization', name: 'Brandex', url: 'https://brandexme.com' },
}

const heading = (image: GalleryImage) =>
  image.source === 'OHG' ? `${image.title} packaging by OHG` : image.title

const detail = (image: GalleryImage) =>
  image.source === 'OHG'
    ? `${image.caption}. Packaging pre-press by OHG, the packaging design and pre-press group co-founded and led by ${personName}.`
    : `A ${image.caption.toLowerCase()} from Brandex, the design asset library and sister company of ${personName}’s OHG.`

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const image = galleryImages.find((item) => item.slug === slug)
  if (!image) return {}

  return {
    title: heading(image),
    description: detail(image),
    alternates: { canonical: `/gallery/${image.slug}` },
    openGraph: {
      title: `${heading(image)} | ${personName}`,
      description: detail(image),
      url: `/gallery/${image.slug}`,
      images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }],
    },
  }
}

export default async function GalleryImagePage({ params }: Props) {
  const { slug } = await params
  const image = galleryImages.find((item) => item.slug === slug)
  if (!image) notFound()

  const siblings = galleryImages.filter((item) => item.source === image.source)
  const index = siblings.indexOf(image)
  const more = Array.from({ length: 8 }, (_, offset) => siblings[(index + 1 + offset) % siblings.length])

  const creator = creators[image.source]
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${siteUrl}${image.src}`,
    url: `${siteUrl}/gallery/${image.slug}`,
    name: heading(image),
    caption: image.alt,
    description: detail(image),
    width: image.width,
    height: image.height,
    creator,
    creditText: creator.name,
    copyrightNotice: `© ${creator.name}`,
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Navigation />

      <article className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All work
          </Link>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mt-8">
            {image.source}
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-medium mt-2 text-balance">
            {heading(image)}
          </h1>
          <figure className="mt-8">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority
              className="mx-auto w-auto h-auto max-w-full max-h-[80vh] rounded-lg border border-border"
            />
            <figcaption className="mt-6 text-muted-foreground leading-relaxed">
              {detail(image)}
            </figcaption>
          </figure>
        </div>
      </article>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            More {image.source} work
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {more.map((item) => (
              <Link key={item.slug} href={`/gallery/${item.slug}`} className="group block">
                <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden border border-border group-hover:border-primary transition-colors">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

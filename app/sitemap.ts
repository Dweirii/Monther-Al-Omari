import type { MetadataRoute } from 'next'
import { siteUrl, portraitImage } from '@/lib/site'
import { galleryImages } from '@/lib/gallery'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
      images: [portraitImage],
    },
    {
      url: `${siteUrl}/about`,
      lastModified: '2026-10-19',
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [portraitImage],
      alternates: { languages: { en: `${siteUrl}/about`, ar: `${siteUrl}/ar` } },
    },
    {
      url: `${siteUrl}/ar`,
      lastModified: '2026-10-19',
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [portraitImage],
      alternates: { languages: { en: `${siteUrl}/about`, ar: `${siteUrl}/ar` } },
    },
    { url: `${siteUrl}/ohg`, lastModified: '2026-10-19', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/brandex`, lastModified: '2026-10-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/clients`, lastModified: '2026-10-19', changeFrequency: 'yearly', priority: 0.8 },
    {
      url: `${siteUrl}/gallery`,
      lastModified: '2026-10-05',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Each image is listed under its own page, the landing page Google should show it with.
    ...galleryImages.map((image) => ({
      url: `${siteUrl}/gallery/${image.slug}`,
      lastModified: '2026-10-05',
      changeFrequency: 'yearly' as const,
      priority: 0.6,
      images: [`${siteUrl}${image.src}`],
    })),
    {
      url: `${siteUrl}/investments`,
      changeFrequency: 'yearly',
      priority: 0.8,
      images: ['https://static.wixstatic.com/media/fdd745_2db1aa2a18c349e29ae7a1704a19e760~mv2.jpg'],
    },
    { url: `${siteUrl}/awards`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${siteUrl}/books`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${siteUrl}/contact`, changeFrequency: 'yearly', priority: 0.5 },
  ]
}

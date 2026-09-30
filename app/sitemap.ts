import type { MetadataRoute } from 'next'
import { siteUrl, portraitImage } from '@/lib/site'
import { ohgImages, brandexImages } from '@/lib/gallery'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
      images: [portraitImage],
    },
    {
      url: `${siteUrl}/gallery`,
      lastModified: '2026-09-30',
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [...ohgImages, ...brandexImages].map((image) => `${siteUrl}${image.src}`),
    },
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

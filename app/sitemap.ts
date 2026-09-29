import type { MetadataRoute } from 'next'
import { siteUrl, portraitImage } from '@/lib/site'
import { ohgWork, brandexWork, homeShowcase, type ShowcaseItem } from '@/lib/showcase'

const imageUrls = (items: ShowcaseItem[]) => items.map((item) => `${siteUrl}${item.image}`)

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
      images: [portraitImage, ...imageUrls(homeShowcase)],
    },
    {
      url: `${siteUrl}/work`,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: imageUrls([...ohgWork, ...brandexWork]),
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

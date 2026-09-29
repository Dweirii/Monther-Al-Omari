import Link from 'next/link'
import Image from 'next/image'
import type { ShowcaseItem } from '@/lib/showcase'

export function ShowcaseGrid({ items }: { items: ShowcaseItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {items.map((item) => (
        <Link
          key={item.image}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <figure className="space-y-3">
            <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden border border-border group-hover:border-primary transition-colors">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <figcaption>
              <p className="text-sm font-medium group-hover:text-primary transition-colors">
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {item.caption}
              </p>
            </figcaption>
          </figure>
        </Link>
      ))}
    </div>
  )
}

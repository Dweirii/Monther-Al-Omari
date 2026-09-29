// Copies of ohg.world and brandexme.com images, resized to 1200px and served from
// public/showcase: the Brandex CDN originals run up to 6MB and this site ships images unoptimized.

export type ShowcaseItem = {
  title: string
  caption: string
  image: string
  alt: string
  href: string
}

const ohg = (slug: string, title: string, caption: string): ShowcaseItem => ({
  title,
  caption,
  image: `/showcase/ohg/${slug}.jpg`,
  alt: `${title} packaging, pre-press by OHG`,
  href: 'https://ohg.world/work',
})

const brandex = (file: string, title: string, caption: string, product: string): ShowcaseItem => ({
  title,
  caption,
  image: `/showcase/brandex/${file}.jpg`,
  alt: `${title} ${caption.toLowerCase()} from Brandex`,
  href: `https://brandexme.com/products/${product}`,
})

// Captions are ohg.world's own, from its work gallery.
export const ohgWork: ShowcaseItem[] = [
  ohg('coca-cola', 'Coca-Cola', 'Red ground, one spot colour at full strength'),
  ohg('red-bull-classic', 'Red Bull', 'Silver and blue base, the metal participating in the colour'),
  ohg('nescafe-gold', 'NESCAFÉ Gold', 'Glass jar, gold decoration registered to the closure'),
  ohg('haagen-dazs-mango-raspberry-set', 'Häagen-Dazs Mango & Raspberry', 'Tub programme, one palette across the flavour range'),
  ohg('pepsi-splash', 'Pepsi', 'Deep blue ground, metallic highlight around the mark'),
  ohg('monster-original', 'Monster Energy', 'Matte black sleeve, one high-chroma mark over a dark ground'),
  ohg('fanta-grape', 'Fanta Grape', 'Deep violet base, high-chroma fruit over a saturated ground'),
  ohg('sprite', 'Sprite', 'Green ground with fine white knockout and citrus detail'),
  ohg('nutella', 'Nutella', 'Glass jar, label and closure registered as one system'),
  ohg('pringles-cheese', 'Pringles Cheese', 'Composite can, second variant on the same wrap system'),
  ohg('la-roche-posay-serums', 'La Roche-Posay serum range', 'Four bottles, one system across differing fills'),
  ohg('dove-body-wash-range', 'Dove body wash range', 'Three variants, photographic fruit on a formed bottle'),
]

export const brandexWork: ShowcaseItem[] = [
  brandex('wall-sign-mockup', 'Building wall sign', 'Mockup', 'outdoor-building-facade-wall-sign-mockup-realistic-branding-8aba291c'),
  brandex('kafenzo-coffee-bag', 'Roasted coffee bag', 'Packaging template', 'roasted-coffee-bag-packaging-design-ai-psd-editable-mockup-48a61d98'),
  brandex('beverage-can-mockup', 'Aluminium beverage can', 'Mockup', 'realistic-aluminum-beverage-can-mockup-with-concrete-arch-background-d46b46b9'),
  brandex('candy-bar', 'Candy bar wrapper', 'Packaging template', 'vibrant-tropical-fruit-candy-bar-wrapper-packaging-eb2658e7'),
  brandex('cream-jar-mockup', 'Skincare cream jar', 'Mockup', 'skincare-cream-jar-floating-mockup-green-background-branding-2634ff77'),
  brandex('milk-carton', 'Milk carton set', 'Packaging template', 'whimsical-cow-theme-milk-carton-packaging-design-for-dairy-products-2b411eed'),
  brandex('coffee-cup-mockup', 'Paper coffee cup', 'Mockup', 'vibrant-coffee-cup-mockup-psd-with-dynamic-swirls-orange-background-0f8b0508'),
  brandex('pasta-packaging', 'Gourmet pasta pack', 'Packaging template', 'gourmet-pasta-packaging-mockup-with-chef-portrait-and-farfalle-5ea2048a'),
  brandex('cosmetic-bottle-mockup', 'Frosted glass cosmetic bottle', 'Mockup', 'pink-frosted-glass-cosmetic-bottle-mockup-skincare-product-f342b3bb'),
  brandex('pump-bottle-mockup', 'Metallic pump bottle', 'Mockup', 'metallic-red-pump-bottle-branding-mockup-handheld-9445824f'),
  brandex('cosmetic-tube-mockup', 'Cosmetic tube', 'Mockup', 'cosmetic-tube-mockup-minimalist-purple-background-product-display-716cbc77'),
  brandex('snack-bar-mockup', 'Handheld snack bar', 'Mockup', 'realistic-handheld-snack-bar-packaging-mockup-beige-background-b206b6ce'),
]

export const homeShowcase = [...ohgWork.slice(0, 4), ...brandexWork.slice(0, 4)]

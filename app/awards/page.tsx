import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const awards = [
  {
    name: 'BIG Campaign Awards',
    date: '12-6-2019',
    description: 'The International Big Campaign Awards goes to OHG for outstanding achievements in big and impactful advertising campaigns designed to capture the attention of a wide audience.',
    image: 'https://static.wixstatic.com/media/fdd745_a94bd384a44f424db01c93354bd159e0~mv2.jpg',
  },
  {
    name: 'AIGA',
    date: '8-2020',
    description: 'AIGA is a professional association for design whose mission is to advance design as a professional craft, strategic advantage, and vital cultural force.',
    image: 'https://static.wixstatic.com/media/fdd745_1b30e9c7bfdc4f0893f3b1ca772cc9b4~mv2.jpg',
  },
  {
    name: 'Strategy Awards Sweden',
    date: '20-7-2018',
    description: 'An international awards program recognizing outstanding achievements in strategic planning across industries including advertising, marketing, and communication.',
    image: 'https://static.wixstatic.com/media/fdd745_da325983504e4a9f9015a24cc68ec82f~mv2.jpg',
  },
  {
    name: 'Brand Film Awards',
    date: '2021',
    description: 'An international awards program recognizing the best brand films, documentaries, and advertising content including Best Documentary and Best Branded Content Series.',
    image: 'https://static.wixstatic.com/media/fdd745_49b490e08ed842469d094c82e690230e~mv2.jpg',
  },
  {
    name: 'DIGIZ Awards',
    date: '2022',
    description: 'A German award recognizing outstanding digital innovations across various industries including Digital Transformation, Mobile Solutions, and Innovative Technologies.',
    image: 'https://static.wixstatic.com/media/fdd745_6a344fcfff84455f98fd59db87844de1~mv2.jpg',
  },
  {
    name: 'iF Award',
    date: '2019',
    description: 'A prestigious international design award running since 1953. Recognizes outstanding achievements in design across various categories including product design and communication design.',
    image: 'https://static.wixstatic.com/media/fdd745_15c462939c224f0c9d75f23e60d81ea9~mv2.jpg',
  },
  {
    name: 'IGDEA',
    date: '6-4-2022',
    description: 'The International Graphic Design Awards recognizes outstanding achievements in graphic design across categories including branding, packaging, print, web, and typography.',
    image: 'https://static.wixstatic.com/media/fdd745_35567a97c90743109ce2ed1cc498db67~mv2.jpg',
  },
  {
    name: 'Red Dot Award',
    date: '2022',
    description: 'The award "Red Dot" for high design quality, expressing innovation in form and function in an exemplary manner, is presented to WG / Whispers Global.',
    image: 'https://static.wixstatic.com/media/fdd745_422605b7ae814ec3ab7b82f85c8d9961~mv2.jpg',
  },
]

export default function AwardsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-medium flex items-center gap-4">
            <span className="w-3 h-3 rounded-sm bg-primary" />
            Awards
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Recognition and accolades from prestigious organizations around the world, 
            celebrating excellence in design, innovation, and strategic leadership.
          </p>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="group border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
              >
                <div className="relative aspect-[16/10] bg-secondary">
                  <Image
                    src={award.image}
                    alt={award.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif">{award.name}</h3>
                    <span className="text-sm text-primary font-medium">{award.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

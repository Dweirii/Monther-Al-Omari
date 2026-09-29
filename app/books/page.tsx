import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Books',
  description: 'Books by Monther Al-Omari: Heisting Millions with AI, Rising with Whispers in the Wind, and Hidden Truths.',
  alternates: { canonical: '/books' },
}

const books = [
  {
    title: 'Heisting Millions with AI',
    description: 'Discover the secrets to leveraging AI for financial success. Dive into the world of artificial intelligence and unlock lucrative opportunities, whether you\'re a beginner or an expert. Get ready to turn your AI knowledge into wealth with practical insights and real-world examples.',
    image: 'https://static.wixstatic.com/media/fdd745_4a970f43dcba442bb433750004adf3ac~mv2.png',
    link: '#',
  },
  {
    title: 'Rising with Whispers in the Wind',
    description: 'Prepare to embark on a transformative journey. This empowering book is your guide to rediscovering motivation, unlocking your true potential, and starting a new, more productive chapter in your life. Let the whispers in the wind inspire you to rewrite your story.',
    image: 'https://static.wixstatic.com/media/fdd745_3efb19497e5446cabe58d5151d7b55fd~mv2.png',
    link: '#',
  },
  {
    title: 'Hidden Truths',
    description: 'A thought-provoking book that delves into the fascinating connections between the law of gravity and the principles of attraction. This insightful work explores the idea that our thoughts and desires have the power to attract what we want into our lives.',
    image: 'https://static.wixstatic.com/media/fdd745_4c69f2add1e54a03866b0ea5631096dc~mv2.png',
    link: '#',
  },
]

export default function BooksPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-medium flex items-center gap-4">
            <span className="w-3 h-3 rounded-sm bg-primary" />
            Books
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            These books are transformative resources for those aspiring to excel in the realms 
            of AI and financial growth. They&apos;ve proven to be instrumental in the personal and 
            professional development of countless individuals.
          </p>
        </div>
      </section>

      {/* Books List */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {books.map((book, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative aspect-[3/4] max-w-sm mx-auto">
                  <Image
                    src={book.image}
                    alt={`${book.title}, a book by Monther Al-Omari`}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h2 className="text-3xl font-serif">{book.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {book.description}
                </p>
                <Button asChild className="group">
                  <Link href={book.link}>
                    Buy Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

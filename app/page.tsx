import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight, Facebook, Linkedin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

const socialLinks = [
  { 
    href: 'https://facebook.com/p/Monther-Al-Omari-100082675527957/', 
    icon: Facebook, 
    label: 'Facebook' 
  },
  { 
    href: 'https://linkedin.com/in/whispersjo', 
    icon: Linkedin, 
    label: 'LinkedIn' 
  },
  { 
    href: 'https://instagram.com/montheralomari1', 
    icon: Instagram, 
    label: 'Instagram' 
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <p className="text-primary font-medium tracking-widest uppercase text-sm">
                  Welcome
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-balance">
                  Monther AlOmari
                </h1>
                <p className="text-lg text-muted-foreground">
                  CEO & Co-Founder of the OHG.
                </p>
              </div>

              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" size="lg">
                  <Link href="/awards">
                    Awards
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/books">
                    Books
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-border grayscale hover:grayscale-0 transition-all duration-500">
                  <Image
                    src="https://static.wixstatic.com/media/fdd745_b49e25fe2cf74db28d2225b4c35621ff~mv2.png"
                    alt="Monther AlOmari"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">OHG.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            The world of visionary leadership, where excellence knows no bounds. Monther Al Omari, 
            the founder and regional owner of OHG, stands at the helm of a remarkable journey that 
            spans three decades of innovation, growth, and unwavering commitment to success.
          </p>
          
          <Button asChild size="lg" className="group">
            <Link href="https://ohg.world" target="_blank" rel="noopener noreferrer">
              Visit OHG
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/investments"
              className="group p-8 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Explore</span>
              <h3 className="text-2xl font-serif mt-2 group-hover:text-primary transition-colors">
                Investments
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                Discover the diverse portfolio of innovative companies.
              </p>
            </Link>

            <Link 
              href="/awards"
              className="group p-8 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <span className="text-primary text-sm font-medium tracking-widest uppercase">View</span>
              <h3 className="text-2xl font-serif mt-2 group-hover:text-primary transition-colors">
                Awards
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                Recognition and accolades from around the world.
              </p>
            </Link>

            <Link 
              href="/books"
              className="group p-8 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Read</span>
              <h3 className="text-2xl font-serif mt-2 group-hover:text-primary transition-colors">
                Books
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                Transformative resources for AI and financial growth.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

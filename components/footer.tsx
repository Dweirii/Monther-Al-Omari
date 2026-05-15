import Link from 'next/link'
import { Facebook, Linkedin, Instagram, Mail } from 'lucide-react'

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

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 by OHG
          </p>
          
          <div className="flex items-center gap-6">
            <Link 
              href="mailto:m.omari@ohg.world"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>m.omari@ohg.world</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

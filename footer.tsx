'use client'

import { Facebook, Twitter, Linkedin } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]

const services = [
  'Land Surveying',
  'GIS & Mapping',
  'Drone Surveys',
  'Engineering Survey',
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-emerald-800 font-bold text-lg">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm leading-tight">
                  Erudites{' '}
                  <span className="text-emerald-400">GEO</span>
                  <span className="font-light">Consults</span>
                </span>
                <span className="text-emerald-400 text-xs italic">
                  mapping into reality.
                </span>
              </div>
            </div>
            <p className="text-emerald-200/80 text-sm leading-relaxed mb-4">
              Precision surveying and authoritative geospatial data solutions
              for developers, engineering firms, and government agencies.
            </p>
            <p className="text-emerald-300/70 text-xs mb-4">
              RC: 9134621 · CAC Registered
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-emerald-800/50 rounded-full flex items-center justify-center text-emerald-200 hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-emerald-800/50 rounded-full flex items-center justify-center text-emerald-200 hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-emerald-800/50 rounded-full flex items-center justify-center text-emerald-200 hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-emerald-200/80 hover:text-emerald-300 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-emerald-200/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="text-emerald-200/80">
                20 UNIZIK Lock-Up Shops, Ifite Awka,
                <br />
                Awka-Ifite, Anambra, Nigeria
              </p>
              <a
                href="tel:+2347038622672"
                className="block text-emerald-200/80 hover:text-emerald-300 transition-colors"
              >
                +234 703 862 2672
              </a>
              <a
                href="mailto:admin@eruditesgeoconsults.com"
                className="block text-emerald-200/80 hover:text-emerald-300 transition-colors"
              >
                admin@eruditesgeoconsults.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-emerald-300/60 text-sm">
              &copy; {new Date().getFullYear()} Erudites GeoConsults. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-emerald-300/60 hover:text-emerald-300 text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-emerald-300/60 hover:text-emerald-300 text-sm transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

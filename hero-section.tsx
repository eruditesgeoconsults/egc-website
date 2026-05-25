'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Shield, Award, Clock } from 'lucide-react'
import Image from 'next/image'

const features = [
  { icon: Shield, label: 'CAC Registered' },
  { icon: Award, label: 'Certified Experts' },
  { icon: Clock, label: '24/7 Support' },
]

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 pt-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                              linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800/40 backdrop-blur-sm border border-emerald-600/30 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-200 text-sm font-medium tracking-wide">
                Nigeria&apos;s Trusted Geospatial Partner
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              <span className="block">Precision</span>
              <span className="block text-emerald-300">Surveying</span>
              <span className="block text-white/90 font-light">Solutions</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-emerald-200/90 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Innovation, precision, accuracy and excellence — delivering
              authoritative geospatial solutions across Nigeria and West Africa.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="bg-white text-emerald-900 hover:bg-emerald-50 font-semibold px-8 py-6 text-base shadow-xl hover:shadow-2xl transition-all group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('#portfolio')}
                variant="outline"
                size="lg"
                className="border-emerald-400/30 text-white hover:bg-emerald-800/50 font-medium px-8 py-6 text-base backdrop-blur-sm group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Our Work
              </Button>
            </motion.div>

            {/* Trust Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2 text-emerald-200/80"
                >
                  <feature.icon className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image Card */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-3xl p-1 shadow-2xl">
                <div className="bg-emerald-900/50 rounded-[22px] overflow-hidden backdrop-blur-sm">
                  {/* Header */}
                  <div className="px-6 py-4 border-b border-emerald-700/50 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-emerald-800 font-bold text-xl font-serif">E</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Erudites GeoConsults</p>
                      <p className="text-emerald-300 text-sm">Mapping into reality</p>
                    </div>
                  </div>

                  {/* Image Grid */}
                  <div className="grid grid-cols-2 gap-3 p-4">
                    <div className="relative aspect-square rounded-xl overflow-hidden group">
                      <Image
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400"
                        alt="Survey planning and documentation"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 200px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />
                    </div>
                    <div className="relative aspect-square rounded-xl overflow-hidden group">
                      <Image
                        src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=400"
                        alt="Drone aerial survey"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 200px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />
                    </div>
                    <div className="relative aspect-square rounded-xl overflow-hidden group">
                      <Image
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400"
                        alt="Surveyor at work"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 200px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />
                    </div>
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-white font-bold text-3xl">10+</p>
                        <p className="text-emerald-100 text-xs font-medium mt-1">Years</p>
                        <p className="text-emerald-200/80 text-xs">Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-4 lg:-left-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl hidden sm:block"
              >
                <p className="text-emerald-800 font-bold text-2xl">150+</p>
                <p className="text-gray-600 text-xs font-medium">Projects Done</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-4 lg:-right-8 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl hidden sm:block"
              >
                <p className="text-emerald-800 font-bold text-2xl">50+</p>
                <p className="text-gray-600 text-xs font-medium">Happy Clients</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-emerald-300/60"
        >
          <span className="text-xs font-medium tracking-wider">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-emerald-400/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

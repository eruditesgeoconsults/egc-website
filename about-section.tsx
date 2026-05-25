'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Building2, Award, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { value: '150+', label: 'PROJECTS COMPLETED' },
  { value: '10+', label: 'YEARS EXPERIENCE' },
  { value: '50+', label: 'CORPORATE CLIENTS' },
  { value: '100%', label: 'DATA ACCURACY TARGET' },
]

const credentials = [
  { icon: Building2, text: 'CAC Registered Business' },
  { icon: Award, text: 'Certified Surveyors' },
  { icon: MapPin, text: 'Nigeria & West Africa' },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-emerald-600 font-semibold text-sm tracking-wider mb-3">
              ABOUT US
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Founded on precision. Built on trust.
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
              Erudites GeoConsults is a premier team of certified surveyors and
              GIS specialists delivering accurate, reliable geospatial solutions
              across Nigeria and West Africa.
            </p>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
              We combine decades of field experience with cutting-edge
              technology—from drone photogrammetry to advanced GIS analytics—to
              provide the critical data foundations for complex engineering,
              construction, and development projects.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-4 mb-8">
              {credentials.map((cred, index) => (
                <motion.div
                  key={cred.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-800 text-sm font-medium">
                    {cred.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection('#portfolio')}
              className="bg-emerald-800 hover:bg-emerald-700 text-white"
            >
              View our work
            </Button>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-emerald-50 rounded-xl p-6 lg:p-8 text-center border border-emerald-100"
              >
                <p className="text-3xl lg:text-4xl font-bold text-emerald-800 mb-2">
                  {stat.value}
                </p>
                <p className="text-xs lg:text-sm text-emerald-600 font-medium tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

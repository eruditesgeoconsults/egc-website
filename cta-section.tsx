'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle } from 'lucide-react'

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-16 lg:py-20 bg-emerald-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-balance">
              Need a quote for your project?
            </h3>
            <p className="text-emerald-200 text-base lg:text-lg">
              Chat with our surveying team directly on WhatsApp — fast response
              guaranteed.
            </p>
          </div>

          <motion.a
            href="https://wa.me/2347038622672?text=Hello%20Erudites%20GeoConsults%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full shadow-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

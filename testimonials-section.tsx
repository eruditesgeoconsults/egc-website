'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Erudites GeoConsults delivered our boundary demarcation project with exceptional accuracy and professionalism. Their team was thorough and their report was comprehensive.',
    author: 'Engr. Adebayo Okafor',
    role: 'Director of Works, Ogun State Government',
    rating: 5,
  },
  {
    quote:
      'Their GIS mapping of our 500-hectare estate was flawless. We relied on their data to begin construction immediately — zero revision needed.',
    author: 'Arc. Chinwe Nwosu',
    role: 'Principal Architect, Nwosu & Partners',
    rating: 5,
  },
  {
    quote:
      'Outstanding drone survey and photogrammetry work on our pipeline route. They met tight deadlines without compromising quality.',
    author: 'Mr. Emeka Eze',
    role: 'Project Manager, TotalEnergies Nigeria',
    rating: 5,
  },
  {
    quote:
      'We have used Erudites GeoConsults for 3 major cadastral projects. Their precision and integrity in all dealings is second to none.',
    author: 'Dr. Fatima Aliyu',
    role: 'CEO, Aliyu Property Development Ltd',
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-600 font-semibold text-sm tracking-wider mb-3">
            TRUSTED BY LEADERS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Carousel - Mobile */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-emerald-50 rounded-2xl p-6 sm:p-8 relative">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-emerald-200" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed mb-6 text-center text-pretty">
                &quot;{testimonials[activeIndex].quote}&quot;
              </p>

              <div className="text-center">
                <p className="font-semibold text-gray-900">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-emerald-600' : 'bg-emerald-200'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-emerald-50 rounded-2xl p-8 relative group hover:bg-emerald-100/70 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-200 group-hover:text-emerald-300 transition-colors" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-base lg:text-lg italic leading-relaxed mb-6 text-pretty">
                &quot;{testimonial.quote}&quot;
              </p>

              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

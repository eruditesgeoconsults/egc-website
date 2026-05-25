'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  MapPin,
  Mountain,
  Satellite,
  Fence,
  Plane,
  TreePine,
  HardHat,
  BarChart3,
  GraduationCap,
} from 'lucide-react'

const services = [
  {
    icon: MapPin,
    title: 'Land Surveying',
    description:
      'Precision boundary, cadastral, and topographic surveys for property development.',
  },
  {
    icon: Mountain,
    title: 'Topographic Mapping',
    description:
      'Detailed 3D elevation models and contour mapping for engineering design.',
  },
  {
    icon: Satellite,
    title: 'GIS & Remote Sensing',
    description:
      'Advanced spatial data collection, analysis, and visualization solutions.',
  },
  {
    icon: Fence,
    title: 'Boundary Demarcation',
    description:
      'Legal property boundary establishment and conflict resolution.',
  },
  {
    icon: Plane,
    title: 'Drone Surveys',
    description:
      'High-resolution aerial photography and photogrammetry for large-scale projects.',
  },
  {
    icon: TreePine,
    title: 'Environmental Assessment',
    description:
      'Spatial analysis for environmental impact studies and monitoring.',
  },
  {
    icon: HardHat,
    title: 'Engineering Survey',
    description:
      'As-built surveys, setting out, and monitoring for construction projects.',
  },
  {
    icon: BarChart3,
    title: 'Geospatial Data Analysis',
    description:
      'Transforming location data into actionable insights for decision-makers.',
  },
  {
    icon: GraduationCap,
    title: 'Educational Support',
    description:
      'Project writing, research assistance, GIS & survey training, and academic consultations for students and institutions.',
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-600 font-semibold text-sm tracking-wider mb-3">
            EXPERTISE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Comprehensive Geospatial Services
          </h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto text-pretty">
            We leverage advanced instrumentation and deep technical knowledge to
            deliver authoritative spatial data for any scale of project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-emerald-200"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-600 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

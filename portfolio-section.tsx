'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const categories = [
  'All',
  'Land Surveying',
  'GIS & Remote Sensing',
  'Drone Surveys',
  'Engineering Survey',
  'Topographic Mapping',
]

const projects = [
  {
    title: 'Highway Expansion Survey',
    category: 'Engineering Survey',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=600',
  },
  {
    title: 'City Aerial Mapping',
    category: 'Drone Surveys',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=600',
  },
  {
    title: 'National Land Registry System',
    category: 'GIS & Remote Sensing',
    image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=600',
  },
  {
    title: 'Dam Site Topography',
    category: 'Topographic Mapping',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600',
  },
  {
    title: 'Estate Boundary Setup',
    category: 'Land Surveying',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600',
  },
  {
    title: 'Urban Masterplan Base Map',
    category: 'GIS & Remote Sensing',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=600',
  },
  {
    title: 'Cadastral Survey Documentation',
    category: 'Land Surveying',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=600',
  },
  {
    title: 'Pipeline Route Survey',
    category: 'Engineering Survey',
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=600',
  },
  {
    title: 'Hydrographic Survey',
    category: 'Topographic Mapping',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600',
  },
  {
    title: 'GIS Field Data Collection',
    category: 'GIS & Remote Sensing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600',
  },
  {
    title: '3D Terrain Elevation Model',
    category: 'Topographic Mapping',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600',
  },
  {
    title: 'Geodetic Control Network',
    category: 'Engineering Survey',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600',
  },
]

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-emerald-600 font-semibold text-sm tracking-wider mb-3">
              PORTFOLIO
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
              Featured Projects
            </h2>
          </div>
          <p className="text-gray-600 text-base lg:text-lg max-w-md text-pretty">
            A selection of our high-impact work across engineering,
            infrastructure, and regional planning.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-800 transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

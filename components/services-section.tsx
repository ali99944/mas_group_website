"use client"

import { useState } from "react"

const services = [
  {
    title: "Interior Design",
    description: "Complete interior design solutions tailored to your lifestyle and preferences.",
    icon: "🏠",
    details: "From concept to completion, we create stunning interiors that reflect your personality.",
  },
  {
    title: "Modern Finishes",
    description: "Premium finishing materials and techniques for contemporary spaces.",
    icon: "✨",
    details: "State-of-the-art finishes that combine beauty with durability and functionality.",
  },
  {
    title: "Renovation",
    description: "Transform existing spaces with our comprehensive renovation services.",
    icon: "🔨",
    details: "Complete makeovers that breathe new life into your residential or commercial spaces.",
  },
  {
    title: "Custom Solutions",
    description: "Bespoke finishing solutions designed specifically for your unique needs.",
    icon: "🎨",
    details: "Tailored approaches that ensure every detail meets your exact specifications.",
  },
]

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive interior finishing solutions that exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-heading text-xl font-bold text-accent mb-3">{service.title}</h3>
              <p className="text-card-foreground leading-relaxed">
                {hoveredService === index ? service.details : service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

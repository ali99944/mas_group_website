"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Home, Palette, Wrench, Key } from "lucide-react"
import SectionHeader from "./ui/section_header"

export default function ServicesCategoriesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Building2,
      title: "Contracting",
      subtitle: "Quality Construction Projects",
      description:
        "Delivering comprehensive construction solutions with precision, reliability, and adherence to the highest industry standards.",
      features: ["Structural Engineering", "Project Management", "Quality Assurance", "Safety Compliance"],
    },
    {
      icon: Home,
      title: "Interior Finishing",
      subtitle: "Modern Design Solutions",
      description:
        "Transform your interior spaces with contemporary designs that blend functionality with aesthetic appeal.",
      features: ["Custom Millwork", "Flooring Solutions", "Wall Treatments", "Lighting Design"],
    },
    {
      icon: Palette,
      title: "Exterior Finishing",
      subtitle: "Elegant Facades",
      description:
        "Create stunning exterior appearances that make lasting impressions while ensuring durability and weather resistance.",
      features: ["Facade Design", "Cladding Systems", "Weatherproofing", "Architectural Details"],
    },
    {
      icon: Wrench,
      title: "Design Services",
      subtitle: "Creative Spaces",
      description:
        "Innovative design solutions that maximize space utilization while reflecting your unique style and requirements.",
      features: ["Space Planning", "3D Visualization", "Material Selection", "Design Consultation"],
    },
    {
      icon: Key,
      title: "Turnkey Solutions",
      subtitle: "Complete Delivery",
      description:
        "End-to-end project management from initial concept to final handover, ensuring seamless execution throughout.",
      features: ["Project Planning", "Coordination", "Quality Control", "Final Handover"],
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">

          <SectionHeader name="Our Services We Offer" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive construction and finishing services tailored to bring your vision to life with unmatched
            quality and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`bg-container p-6  border border-border hover:bg-primary/5 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-primary/10  flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

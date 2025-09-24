"use client"

import { Building2, Home, Palette, Wrench, Key, Check } from "lucide-react"

export default function ServicesList() {
  const services = [
    {
      icon: Building2,
      title: "General Contracting",
      description: "Comprehensive management of construction projects, ensuring they are completed on time, within budget, and to the highest quality standards. We handle everything from material procurement to site management.",
      points: ["Project Planning & Scheduling", "Budget Management", "Subcontractor Coordination", "Quality Control Assurance"],
    },
    {
      icon: Home,
      title: "Interior Finishing",
      description: "Transforming interiors into breathtaking spaces. Our expertise covers everything from flooring and wall treatments to custom millwork and lighting, ensuring a cohesive and luxurious finish.",
      points: ["Drywall & Painting", "Custom Cabinetry", "Flooring & Tiling", "Lighting Installation"],
    },
    {
      icon: Palette,
      title: "Exterior Finishing",
      description: "Enhancing curb appeal and structural integrity with premium exterior solutions. We specialize in creating durable and aesthetically pleasing facades that make a lasting impression.",
      points: ["Facade Cladding", "Stucco & Plastering", "Exterior Painting", "Waterproofing Solutions"],
    },
    {
      icon: Wrench,
      title: "Design & Build",
      description: "An integrated approach that combines the design and construction phases into a single, seamless process. This ensures clear communication, efficient timelines, and a unified vision from start to finish.",
      points: ["Architectural Design", "3D Visualization", "Material Selection", "Permit Acquisition"],
    },
    {
      icon: Key,
      title: "Turnkey Projects",
      description: "Our complete, end-to-end solution for clients who want a hassle-free experience. We manage every single detail from the initial concept to the final handover, delivering a space that is ready for immediate use.",
      points: ["Full Project Management", "Interior & Exterior Design", "Furnishing & Staging", "Final Handover & Support"],
    },
  ]

  return (
    <section id="services-list" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Our expertise spans the entire project lifecycle to bring your vision to reality.
          </p>
        </div>
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isReversed = index % 2 !== 0
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center`}>
                <div className={`relative ${isReversed ? "lg:order-last" : ""}`}>
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Icon className="w-24 h-24 text-primary opacity-20" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
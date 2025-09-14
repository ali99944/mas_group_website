"use client"

import { useState, useEffect, useRef } from "react"
import { Target, Eye, Heart, Users } from "lucide-react"

export default function WhoWeAreSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To deliver exceptional construction and finishing services that exceed expectations, creating spaces that inspire and endure.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the leading construction and finishing company, recognized for innovation, quality, and transforming spaces into masterpieces.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Integrity, excellence, and customer satisfaction guide every decision we make and every project we undertake.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "A passionate group of skilled professionals dedicated to bringing your vision to life with precision and care.",
    },
  ]

  return (
    <section ref={sectionRef} id="who-we-are" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who <span className="text-primary">We Are</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            MAS Group is a premier construction and finishing company dedicated to transforming spaces through
            exceptional craftsmanship, innovative design, and unwavering commitment to quality. We bring together
            expertise in contracting, interior finishing, exterior finishing, and complete turnkey solutions to create
            spaces that inspire and endure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className={`p-8 bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-700 hover:bg-primary/5 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Company Story */}
        <div
          className={`bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Founded with a vision to redefine construction and finishing standards, MAS Group has grown from a small
              team of passionate craftsmen to a comprehensive construction company. Our journey is marked by countless
              successful projects, satisfied clients, and a relentless pursuit of excellence in every detail.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-gray-600">Completed Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Star, Users, Lightbulb } from "lucide-react"

export default function CompanyValues() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest standards of integrity in all of our actions.",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We are committed to delivering the highest quality and craftsmanship in every project.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together, with our clients and partners, to achieve common goals.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creativity and new ideas to provide the best solutions for our clients.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            The principles that guide our work and define our character.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className={`text-center p-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center items-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center">
                    <Icon size={32} />
                  </div>
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
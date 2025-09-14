"use client"

import { useState, useEffect, useRef } from "react"
import { Shield, Award, Clock, Users, CheckCircle, Star } from "lucide-react"
import StatisticsSection from "./statistics-section"
import SectionHeader from "./ui/section_header"

export default function WhyMasSection() {
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

  const reasons = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Every project undergoes rigorous quality checks to ensure exceptional standards and lasting results.",
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Our skilled artisans bring years of experience and attention to detail to every finishing touch.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect your time and deliver projects on schedule without compromising on quality.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "A passionate team of professionals committed to bringing your vision to life with precision.",
    },
    {
      icon: CheckCircle,
      title: "Complete Solutions",
      description: "From contracting to finishing, we provide comprehensive services under one roof.",
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority, with personalized service and ongoing support.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="why-mas"
      className="py-24 bg-white relative overflow-hidden max-w-7xl mx-auto"
    >


      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >

          <SectionHeader name="Why Choose MAS Group" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference of working with a team that combines expertise, innovation, and unwavering
            commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className={`group p-6 border border-border transition-all duration-700 bg-container ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <StatisticsSection />
    </section>
  )
}

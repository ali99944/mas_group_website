"use client"

import { useEffect, useRef, useState } from "react"
import { Palette, Hammer, Lightbulb, Shield } from "lucide-react"
import SectionHeader from "./ui/section_header"

export default function CraftsmanshipSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProcess, setActiveProcess] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const processes = [
    {
      icon: Lightbulb,
      title: "Design Consultation",
      description:
        "We begin with understanding your vision, lifestyle, and preferences to create a personalized design concept.",
      image: "https://plus.unsplash.com/premium_photo-1666299871945-a86eb6814a79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVzaWduJTIwQ29uc3VsdGF0aW9ufGVufDB8fDB8fHww",
    },
    {
      icon: Palette,
      title: "Material Selection",
      description:
        "Our experts guide you through premium materials, finishes, and color palettes that align with your aesthetic.",
      image: "https://plus.unsplash.com/premium_photo-1681584472258-6ef06bfa771c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWF0ZXJpYWwlMjBTZWxlY3Rpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      icon: Hammer,
      title: "Expert Execution",
      description:
        "Our skilled craftsmen bring the design to life with precision, attention to detail, and superior workmanship.",
      image: "https://images.unsplash.com/photo-1621293980277-d9969186cd72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RXhwZXJ0JTIwRXhlY3V0aW9ufGVufDB8fDB8fHww",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Every project undergoes rigorous quality checks to ensure it meets our exacting standards and your expectations.",
      image: "https://plus.unsplash.com/premium_photo-1661634426490-60069e79a4e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UXVhbGl0eSUyMEFzc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]

  return (
    <section id="craftsmanship" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>

          <SectionHeader name="Our Craftsmansip Process" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every masterpiece begins with a process. Discover how we transform your vision into reality through our
            meticulous four-stage approach to interior finishing.
          </p>
        </div>

        {/* Interactive Process Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Process Steps */}
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            {processes.map((process, index) => {
              const Icon = process.icon
              return (
                <div
                  key={index}
                  className={`p-6 cursor-pointer transition-all duration-300 border-l-4 ${
                    activeProcess === index
                      ? "border-accent bg-accent/5"
                      : "border-border bg-background hover:bg-muted/30"
                  }`}
                  onClick={() => setActiveProcess(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg ${
                        activeProcess === index ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{process.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Process Image */}
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative overflow-hidden bg-muted aspect-[4/3]">
              <img
                src={processes[activeProcess].image || "/placeholder.svg"}
                alt={processes[activeProcess].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

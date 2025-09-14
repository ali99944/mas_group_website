"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, Clock, Target } from "lucide-react"
import SectionHeader from "./ui/section_header"

export default function StorySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const stats = [
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Clock, value: "1000+", label: "Projects Completed" },
    { icon: Target, value: "100%", label: "Quality Guarantee" },
  ]

  return (
    <section id="story" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader name="Our Story of Excellence" />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story content */}
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Founded with a vision to redefine interior finishing, MAS Group has been at the forefront of luxury
                design and craftsmanship for over a decade. Our journey began with a simple belief: every space has the
                potential to become extraordinary.
              </p>

              <p>
                We specialize in creating bespoke interior solutions that reflect our clients&apos; unique personalities and
                lifestyles. From concept to completion, our team of skilled artisans and designers work tirelessly to
                ensure every detail exceeds expectations.
              </p>

              <p>
                Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in the
                industry. We don&apos;t just finish spaces; we craft experiences that last a lifetime.
              </p>
            </div>
          </div>

          {/* Right side - Stats grid */}
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-primary/5 border border-border  p-6 text-center hover:bg-primary/15 transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon size={32} className="text-accent mx-auto mb-4" />
                    <div className="font-heading font-bold text-2xl text-foreground mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

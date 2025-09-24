"use client"

import { useEffect, useRef, useState } from "react"
import { Building, Flag, Zap, Award } from "lucide-react"

export default function CompanyTimeline() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const timelineEvents = [
    {
      year: "2008",
      title: "Foundation of MAS Group",
      description: "MAS Group was founded with a vision to revolutionize the contracting and finishing industry in Saudi Arabia.",
      icon: Flag,
    },
    {
      year: "2012",
      title: "First Major Project",
      description: "Completed our first large-scale commercial project, setting a new standard for quality and efficiency.",
      icon: Building,
    },
    {
      year: "2018",
      title: "Expansion of Services",
      description: "Expanded our service offerings to include turnkey solutions and specialized interior design.",
      icon: Zap,
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received the 'Excellence in Construction' award for our commitment to innovation and craftsmanship.",
      icon: Award,
    },
  ]

  return (
    <section id="timeline" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Tracing the milestones that have shaped MAS Group into an industry leader.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>
          {timelineEvents.map((event, index) => {
            const Icon = event.icon
            const isEven = index % 2 === 0
            return (
              <div key={index} className={`relative mb-12 flex w-full items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${isEven ? 'pr-8' : 'pl-8'}`}>
                  <div className={`p-6 bg-container border border-border transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${isEven ? 'text-right' : 'text-left'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                    <p className="text-primary font-semibold text-lg mb-1">{event.year}</p>
                    <h3 className="font-bold text-xl mb-2 text-foreground">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-primary/10 border-2 border-primary text-primary flex items-center justify-center">
                  <Icon size={20} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
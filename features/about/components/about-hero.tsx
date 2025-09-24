"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-container py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              About <span className="text-primary">MAS Group</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              We are a passionate team of designers, engineers, and craftsmen dedicated to transforming spaces and
              exceeding expectations. Our journey is one of relentless innovation and an unwavering commitment to
              quality.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              At MAS Group, we believe that great design is about more than just aesthetics; it's about creating
              environments that inspire, function, and endure.
            </p>
          </div>
          <div className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092445837-1e53b9a456a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5naW5lZXJpbmclMjB0ZWFtfGVufDB8fDB8fHww"
                alt="MAS Group Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
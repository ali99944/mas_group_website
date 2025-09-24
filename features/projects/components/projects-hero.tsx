"use client"

import { useEffect, useRef, useState } from "react"

export default function ProjectsHero() {
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
    <section ref={sectionRef} className="bg-container py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Portfolio</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore a selection of our finest work, showcasing our commitment to quality, innovation, and exceptional
            craftsmanship across a range of sectors. Each project is a testament to our passion for transforming spaces.
          </p>
        </div>
      </div>
    </section>
  )
}
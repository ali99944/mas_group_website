"use client"

import { useEffect, useRef, useState } from "react"

export default function ContactHero() {
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
    <section ref={sectionRef} className="bg-container relative py-24">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/contact-hero-bg.jpg')" }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to answer your questions and help you get started on your next project. Reach out to us, and let's create something remarkable together.
          </p>
        </div>
      </div>
    </section>
  )
}
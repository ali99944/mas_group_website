"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"
import SectionHeader from "./ui/section_header"

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
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

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Villa Owner",
      content:
        "MAS Group transformed our villa beyond our expectations. Their attention to detail in both interior and exterior finishing is remarkable. The project was completed on time and within budget.",
      rating: 5,
      project: "Luxury Villa Renovation",
    },
    {
      name: "Sarah Mohamed",
      role: "Restaurant Owner",
      content:
        "Working with MAS Group on our restaurant was an excellent experience. They understood our vision and delivered a space that perfectly reflects our brand. Highly professional team.",
      rating: 5,
      project: "Commercial Interior Design",
    },
    {
      name: "Omar Khalil",
      role: "Office Manager",
      content:
        "The office renovation by MAS Group has significantly improved our work environment. Their modern design solutions and quality finishing work exceeded our expectations.",
      rating: 5,
      project: "Office Space Renovation",
    },
    {
      name: "Fatima Ali",
      role: "Homeowner",
      content:
        "From initial consultation to final handover, MAS Group provided exceptional service. Their turnkey approach made the entire process smooth and stress-free for our family.",
      rating: 5,
      project: "Complete Home Finishing",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2> */}

          <SectionHeader name="What our clients say" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about their experience with
            MAS Group.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div
            className={`relative p-4 md:p-4 border-2 border-border transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >

            <div className="flex justify-between items-center mb-4">
              <Quote className="w-8 h-8 text-primary" />
              <div className="py-1 px-4 bg-primary text-white">
                <p className="text-sm text-black">{testimonials[currentTestimonial].project}</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                &quot;{testimonials[currentTestimonial].content}&quot;
              </p>

              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground">{testimonials[currentTestimonial].name}</h4>
                <p className="text-muted-foreground mb-2">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 transition-all duration-300 cursor-pointer ${
                  index === currentTestimonial
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}

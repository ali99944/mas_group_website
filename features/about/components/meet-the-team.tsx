"use client"

import { useEffect, useRef, useState } from "react"
import { Linkedin, Twitter } from "lucide-react"

export default function MeetTheTeam() {
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

  const teamMembers = [
    {
      name: "Eng. Mohammed Al-Saad",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2VvfGVufDB8fDB8fHww",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Arch. Fatima Al-Fahad",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1580894908361-967195033215?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFyY2hpdGVjdHxlbnwwfHwwfHx8MA%3D%3D",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Mr. Omar Khaled",
      role: "Project Director",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2plY3QlMjBtYW5hZ2VyfGVufDB8fDB8fHww",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Meet Our Leaders</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            The driving force behind our success is a team of passionate and experienced professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-container p-6 text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
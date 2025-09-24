"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactFormAndDetails() {
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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      details: ["123 Design Street", "Interior City, IC 12345", "Saudi Arabia"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@masgroup.com", "projects@masgroup.com"],
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Sat - Thu: 9:00 AM - 6:00 PM", "Fri: Closed"],
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <h2 className="font-bold text-3xl text-foreground mb-4">Get In Touch</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Have a question or a project in mind? Use the form to send us a message, or contact us directly through one of the methods below. Our team is ready to assist you.
            </p>
            <div className="grid lg:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 text-primary flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`bg-container p-8 border border-border transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="font-bold text-3xl text-foreground mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" required />
                <Input placeholder="Last Name" required />
              </div>
              <Input placeholder="Email Address" type="email" required />
              <Input placeholder="Subject" required />
              <Textarea placeholder="Tell us about your project..." rows={6} required />
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
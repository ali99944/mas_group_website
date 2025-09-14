"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import SectionHeader from "./ui/section_header"

export default function ImmersiveContact() {
  const [isVisible, setIsVisible] = useState(false)
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@masgroup.com", "projects@masgroup.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Design Street", "Interior City, IC 12345"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <SectionHeader name="Start your project today" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Get in touch with our team to discuss your vision and discover how we can
            bring it to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="bg-container p-6">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6">Send us a message</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>

                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" type="tel" />
                <Input placeholder="Project Type" />

                <Textarea placeholder="Tell us about your project..." rows={5} />

                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-6">Get in touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We&apos;re here to help you create the perfect interior space. Contact us through any of the methods below,
                  and our team will get back to you promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-3 bg-accent/10 text-accent">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Call to Action */}
              <div className="bg-accent/5 p-6 border-l-4 border-accent">
                <h4 className="font-semibold text-foreground mb-2">Ready to get started?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Schedule a free consultation to discuss your project requirements and get a personalized quote.
                </p>
                <Button
                  variant="outline"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

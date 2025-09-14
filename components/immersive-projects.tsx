"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import SectionHeader from "./ui/section_header"
import { DotPattern } from "./ui/dot-pattern"

export default function ImmersiveProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
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

  const projects = [
    {
      title: "Luxury Villa Renovation",
      category: "Residential",
      description:
        "Complete interior transformation of a 5-bedroom villa featuring modern finishes, custom millwork, and premium materials.",
      image: "https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8THV4dXJ5JTIwVmlsbGElMjBSZW5vdmF0aW9ufGVufDB8fDB8fHww",
      features: ["Custom Millwork", "Premium Marble", "Smart Home Integration", "Designer Lighting"],
    },
    {
      title: "Corporate Office Design",
      category: "Commercial",
      description:
        "Contemporary office space design emphasizing productivity, collaboration, and brand identity through innovative interior solutions.",
      image: "https://plus.unsplash.com/premium_photo-1683880731785-e5b632e0ea13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29ycG9yYXRlJTIwT2ZmaWNlJTIwRGVzaWdufGVufDB8fDB8fHww",
      features: ["Open Plan Layout", "Acoustic Solutions", "Ergonomic Design", "Brand Integration"],
    },
    {
      title: "Boutique Hotel Interiors",
      category: "Hospitality",
      description:
        "Sophisticated hotel interior design combining comfort and elegance to create memorable guest experiences.",
      image: "https://plus.unsplash.com/premium_photo-1661881436846-5a0f53025711?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qm91dGlxdWUlMjBIb3RlbCUyMEludGVyaW9yc3xlbnwwfHwwfHx8MA%3D%3D",
      features: ["Bespoke Furniture", "Ambient Lighting", "Luxury Finishes", "Cultural Elements"],
    },
    {
      title: "Modern Apartment Makeover",
      category: "Residential",
      description: "Compact apartment transformation maximizing space efficiency while maintaining luxury and comfort.",
      image: "https://images.unsplash.com/photo-1620633490433-eee56db52eb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW9kZXJuJTIwQXBhcnRtZW50JTIwTWFrZW92ZXJ8ZW58MHx8MHx8fDA%3D",
      features: ["Space Optimization", "Built-in Storage", "Natural Light", "Minimalist Design"],
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <DotPattern />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <SectionHeader name="Featured Projects"/>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of exceptional interior finishing projects that showcase our commitment to quality,
            innovation, and client satisfaction.
          </p>
        </div>

        {/* Project Showcase */}
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="relative overflow-hidden bg-background">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <img
                  src={projects[currentProject].image || "/placeholder.svg"}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10" />
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/10 mb-4">
                    {projects[currentProject].category}
                  </span>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{projects[currentProject].description}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {projects[currentProject].features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={prevProject} className="p-2 bg-transparent">
                      <ChevronLeft size={16} />
                    </Button>
                    <Button variant="outline" size="sm" onClick={nextProject} className="p-2 bg-transparent">
                      <ChevronRight size={16} />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">
                      {currentProject + 1} / {projects.length}
                    </span>
                    <Button variant="outline" size="sm" className="text-sm bg-transparent">
                      <ExternalLink size={14} className="mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 transition-colors duration-200 ${
                  currentProject === index ? "bg-accent" : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

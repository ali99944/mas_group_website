"use client"

import { Lightbulb, PencilRuler, Hammer, PartyPopper } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Lightbulb,
      title: "1. Consultation & Discovery",
      description: "We start by understanding your vision, requirements, and budget to lay a solid foundation for the project.",
    },
    {
      icon: PencilRuler,
      title: "2. Design & Planning",
      description: "Our team creates detailed plans, blueprints, and 3D models, meticulously planning every aspect of the project.",
    },
    {
      icon: Hammer,
      title: "3. Execution & Construction",
      description: "Our skilled craftsmen bring the design to life, using premium materials and ensuring the highest standards of quality.",
    },
    {
      icon: PartyPopper,
      title: "4. Handover & Support",
      description: "We deliver the completed project on time and provide ongoing support to ensure your absolute satisfaction.",
    },
  ]

  return (
    <section className="py-20 bg-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            A streamlined approach to ensure a seamless and successful project from start to finish.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center items-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center">
                    <Icon size={32} />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
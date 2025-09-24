"use client";

import { useEffect, useRef, useState } from "react";
import { Palette, Hammer, Lightbulb, Shield } from "lucide-react";
import SectionHeader from "./ui/section_header";

export default function CraftsmanshipSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const processes = [
    {
      icon: Lightbulb,
      title: "Design Consultation",
      description:
        "We begin by understanding your vision, lifestyle, and preferences to create a personalized design concept that serves as the blueprint for your project.",
      image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop",
    },
    {
      icon: Palette,
      title: "Material Selection",
      description:
        "Our experts guide you through our curated library of premium materials, finishes, and color palettes that align with your aesthetic and ensure lasting quality.",
      image: "https://images.unsplash.com/photo-1523413214959-5f6578f73131?q=80&w=2070&auto=format&fit=crop",
    },
    {
      icon: Hammer,
      title: "Expert Execution",
      description:
        "Our skilled craftsmen bring the design to life with precision and superior workmanship. We manage every detail on-site to ensure a seamless build process.",
      image: "https://images.unsplash.com/photo-1581092445837-1e53b9a456a7?q=80&w=1974&auto=format&fit=crop",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Before handover, every project undergoes rigorous quality checks to ensure it meets our exacting standards and, more importantly, your expectations.",
      image: "https://images.unsplash.com/photo-1556742044-597b15d34199?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section id="craftsmanship" ref={sectionRef} className="py-20 bg-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <SectionHeader name="Our Craftsmanship Process" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every masterpiece begins with a process. Discover how we transform your vision into reality through our meticulous four-stage approach to interior finishing.
          </p>
        </div>

        {/* New Static Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <div
                key={index}
                className={`bg-background border border-border transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image at the top */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-primary/10 text-primary mr-4 flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary">
                        STEP 0{index + 1}
                      </span>
                      <h3 className="font-bold text-xl text-foreground">
                        {process.title}
                      </h3>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
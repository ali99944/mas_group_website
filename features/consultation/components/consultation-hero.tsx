"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ConsultationHero() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-container relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('/images/consultation-bg.jpg')" }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Schedule Your Complimentary Consultation
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            This is the first step towards transforming your space. Let's discuss your vision, explore the possibilities, and outline a plan for your project.
          </p>
          <Button
            size="lg"
            className="mt-8"
            onClick={() => {
              document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Your Session
          </Button>
        </div>
      </div>
    </section>
  );
}
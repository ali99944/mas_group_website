"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CalculatorBanner() {
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

  const benefits = [
    "Receive an instant, detailed cost estimate.",
    "Experiment with different materials and finishes.",
    "Plan your project with financial clarity.",
    "A transparent, no-obligation planning tool.",
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Plan Your Project with Confidence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Take the guesswork out of budgeting with our interactive Project Budget Calculator. This powerful tool allows you to select finishes for each room and get a real-time estimate of the costs, empowering you to make informed decisions for your upcoming project.
            </p>
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <Link href="/budget-calculator">
              <Button size="lg">
                <span>Launch the Calculator</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Right Column: Image */}
          <div
            className={`relative aspect-[4/3] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop"
              alt="Person using a calculator for planning"
              className="w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-primary/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
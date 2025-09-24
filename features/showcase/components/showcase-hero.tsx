"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function ShowcaseHero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // A simple timeout to trigger the animation shortly after the page loads
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen min-h-[700px] flex items-center justify-center relative text-white bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div
        className={`relative z-10 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold font-heading">
          Where Vision Meets Reality
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          A visual journey through the spaces we've transformed. Explore the details, feel the quality, and find inspiration for your own project.
        </p>
      </div>
      <button
        onClick={() => {
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
        }}
        className="absolute bottom-10 z-10 animate-bounce"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
}
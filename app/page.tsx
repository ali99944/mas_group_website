"use client"

import ImmersiveContact from "@/components/contact-section"
import CraftsmanshipSection from "@/components/craftsmanship-section"
import ImmersiveHero from "@/components/hero-section"
import ImmersiveProjects from "@/components/immersive-projects"
import Layout from "@/components/layout/layout"
import ServicesCategoriesSection from "@/components/services-categories-section"
import StorySection from "@/components/story-section"
import TestimonialsSection from "@/components/testimonials-section"
import WhyMasSection from "@/components/why-mas-section"
import { useState, useEffect } from "react"


export default function HomePage() {
  const [, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "story", "craftsmanship", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      {/* <ImmersiveNavigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <ImmersiveHero />
      <StorySection />
      <CraftsmanshipSection />
      <ImmersiveProjects />
      <ImmersiveContact />
      <ImmersiveFooter /> */}
      <Layout>
        <ImmersiveHero />
        <StorySection />
        <ServicesCategoriesSection />
        <WhyMasSection />
        <CraftsmanshipSection />
        <ImmersiveProjects />
        <TestimonialsSection />
        <ImmersiveContact />
      </Layout>
    </main>
  )
}

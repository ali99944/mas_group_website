"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export interface Project {
  id: number;
  title: string;
  category: "Residential" | "Commercial" | "Hospitality"; // Using a union type for better type safety
  location: string;
  year: number;
  client: string;
  services: string[];
  image: string; // Main thumbnail/cover image
  description: string; // Short description for the gallery card
  details: string; // Longer, more detailed description for the project detail page
  gallery: {
    url: string;
    alt: string;
  }[]; // An array of image objects for the gallery
  challenge?: string; // New: The primary challenge of the project
  solution?: string; // New: How MAS Group addressed the challenge
}

interface ProjectGalleryProps {
  projects: Project[];
}

const projectCategories = ["All", "Residential", "Commercial", "Hospitality"]

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className="px-6"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id}>
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.4 }}
    className="group bg-container border border-border overflow-hidden cursor-pointer"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white flex items-center gap-2 border-2 border-white py-2 px-4">
            View Project <ExternalLink className="h-4 w-4" />
        </div>
      </div>
    </div>
    <div className="p-6">
      <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
      <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
      <p className="text-sm text-muted-foreground">{project.location}</p>
    </div>
  </motion.div>
</Link>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
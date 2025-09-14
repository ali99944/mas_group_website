"use client"

import { Award, Shield, Star, Trophy } from "lucide-react"
import { Button } from "./ui/button"
import { BlueprintGrid } from "./ui/blueprint-grid-pattern"

export default function ImmersiveHero() {
  return (
    <section className="min-h-screen bg-container relative">
      <BlueprintGrid />
      <div className="container mx-auto px-4 py-8 flex items-center relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden shadow-2xl">
              <img
                src="/images/mas-logo.jpg"
                alt="Construction blueprints and planning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 bg-primary/80 px-4 py-2 rounded-full text-sm font-medium">
              <span>
                <Star className="w-4 h-4"/>
              </span>
              <span>Your Ideal Partner for Future Projects</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-gray-800 flex gap-2">
                  <span className="text-primary">MAS</span>
                  <span>-</span>
                  <span>Group</span>
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                Your Ideal Partner for Future Projects
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              A leading group in contracting and development in Saudi Arabia. We provide excellence in contracting
              services, maintenance, and specialized services.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-primary/80 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="h-4 w-4" />
                <span>Team of Professional Engineers</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/80 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                <span>Quality Guarantee in Every Project</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/80 px-4 py-2 rounded-full text-sm font-medium">
                <Trophy className="h-4 w-4" />
                <span>Over 15 Years Experience</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                // className="bg-primary text-black px-8 py-3 text-md  cursor-pointer"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Our Projects
              </Button>
              <Button
                variant="outline"
                // className="border-2 border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white px-8 py-3 text-md  cursor-pointer bg-transparent"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics section at bottom */}

    </section>
  )
}

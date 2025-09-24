"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { id: 1, category: "Residential", src: "https://images.unsplash.com/photo-1613553423779-6139c2f3b593?q=80&w=1932&auto=format&fit=crop" },
  { id: 2, category: "Commercial", src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format=fit=crop" },
  { id: 3, category: "Hospitality", src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format=fit=crop" },
  { id: 4, category: "Residential", src: "https://images.unsplash.com/photo-1617104679233-a3b82d3e3a47?q=80&w=1935&auto=format=fit=crop" },
  { id: 5, category: "Residential", src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format=fit=crop" },
  { id: 6, category: "Commercial", src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1974&auto=format=fit=crop" },
  { id: 7, category: "Hospitality", src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1932&auto=format=fit=crop" },
  { id: 8, category: "Commercial", src: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format=fit=crop" },
];

const categories = ["All", "Residential", "Commercial", "Hospitality"];

export default function InspirationGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = activeFilter === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Inspiration Gallery</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">Browse selections from our portfolio to discover the possibilities for your space.</p>
        </div>
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button key={category} variant={activeFilter === category ? "default" : "outline"} onClick={() => setActiveFilter(category)} className="px-6">
              {category}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group aspect-square overflow-hidden"
              >
                <img src={image.src} alt={`Gallery image ${image.id}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
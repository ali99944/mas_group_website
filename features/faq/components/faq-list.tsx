"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface Faq {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  faqs: Faq[];
}

interface FaqListProps {
  data: FaqCategory[];
}

export default function FaqList({ data }: FaqListProps) {
  // The state will hold the index of the currently open accordion item.
  // We'll store it as a string "categoryIndex-faqIndex" to ensure uniqueness.
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFaq = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {data.map((categoryItem, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-primary pb-2">
              {categoryItem.category}
            </h2>
            <div className="space-y-4">
              {categoryItem.faqs.map((faq, faqIndex) => {
                const currentIndex = `${categoryIndex}-${faqIndex}`;
                const isOpen = openIndex === currentIndex;

                return (
                  <div
                    key={currentIndex}
                    className="border border-border bg-container"
                  >
                    <button
                      onClick={() => toggleFaq(currentIndex)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-lg text-foreground">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <Plus className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
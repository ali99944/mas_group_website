"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";

export default function BookingForm() {
  const benefits = [
    "Personalized advice from industry experts.",
    "A clear understanding of your project's potential.",
    "Preliminary budget and timeline discussion.",
    "Answers to all your specific questions.",
  ];

  return (
    <section id="booking-form" className="py-20 bg-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Information */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Book Your Free Consultation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Take the next step in your project's journey. By providing us with a few details, we can ensure our consultation is productive and tailored specifically to you. We look forward to speaking with you.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              In this session, you will get:
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Form */}
          <div className="bg-background p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Tell Us About Your Project
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" required />
                <Input placeholder="Last Name" required />
              </div>
              <Input placeholder="Email Address" type="email" required />
              <Input placeholder="Phone Number" type="tel" required />
              <Input placeholder="Project Type (e.g., Residential, Commercial)" />
              <Input placeholder="Preferred Date for Consultation" type="date" />
              <Textarea
                placeholder="Please describe your project or any questions you have..."
                rows={5}
                required
              />
              <Button type="submit" size="lg" className="w-full">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
import Layout from "@/components/layout/layout";
import CtaSection from "../common/components/cta_section";
import FaqHero from "./components/faq-hero";
import FaqList, { FaqCategory } from "./components/faq-list";

export default function FaqPage() {
  // Comprehensive FAQ data organized by category
  const faqData: FaqCategory[] = [
    {
      category: "General Questions",
      faqs: [
        {
          question: "What types of projects does MAS Group specialize in?",
          answer: "MAS Group specializes in a wide range of projects, including high-end residential villas, modern commercial office spaces, and luxury hospitality establishments. We offer comprehensive services from general contracting to complete turnkey solutions."
        },
        {
          question: "In which geographical areas do you operate?",
          answer: "Our primary area of operation is throughout the Kingdom of Saudi Arabia. We have extensive experience managing projects in major cities like Riyadh, Jeddah, and Dammam, and are equipped to handle projects in other regions as well."
        },
        {
          question: "How is MAS Group different from other contracting companies?",
          answer: "Our key differentiators are our unwavering commitment to quality, meticulous attention to detail, and a client-centric approach. We integrate modern technology with traditional craftsmanship to deliver exceptional results that are both beautiful and durable."
        }
      ]
    },
    {
      category: "Project Process",
      faqs: [
        {
          question: "What is the first step to starting a project with you?",
          answer: "The first step is an initial consultation. You can contact us via the form on our website or by phone to schedule a meeting. In this session, we'll discuss your vision, goals, budget, and timeline to understand the full scope of your project."
        },
        {
          question: "How long does a typical project take?",
          answer: "The timeline for each project varies significantly depending on its scale, complexity, and specific requirements. After our initial consultation and planning phase, we will provide you with a detailed project schedule."
        },
        {
          question: "Can I make changes to the design once the project has started?",
          answer: "Yes, we accommodate changes. However, any modifications after the design is finalized may impact the project's timeline and budget. We have a structured change order process to ensure all adjustments are clearly communicated, documented, and approved."
        }
      ]
    },
    {
      category: "Services & Materials",
      faqs: [
        {
          question: "Do you provide design services, or only construction?",
          answer: "We offer comprehensive 'Design & Build' and 'Turnkey' services, which means we can manage your project from the initial concept and design phase all the way through to construction and final handover. We also work with clients who already have their own architects and designers."
        },
        {
          question: "How do you source your materials?",
          answer: "We source our materials from a network of trusted, high-quality suppliers, both locally and internationally. Our selection process prioritizes durability, sustainability, and aesthetic excellence to ensure the best possible outcome for your project."
        }
      ]
    }
  ];

  return (
    <Layout>
      <FaqHero />
      <FaqList data={faqData} />
      <CtaSection />
    </Layout>
  );
}
import Layout from "@/components/layout/layout"
import { Faq, FaqsComponent } from "@/components/ui/faqs-component"
import ContactFormAndDetails from "./components/contact-form-and-details"
import ContactHero from "./components/contact-hero"
import MapSection from "./components/map-section"


export default function ContactPage() {
  // Sample FAQ data for the contact page
  const contactFaqs: Faq[] = [
    {
      question: "What is the best way to request a quote?",
      answer:
        "The best way to request a quote is by filling out the contact form on this page with as much detail about your project as possible. Alternatively, you can call us directly during business hours.",
    },
    {
      question: "What are your business hours?",
      answer:
        "Our office is open from 9:00 AM to 6:00 PM, Saturday to Thursday. We are closed on Fridays.",
    },
    {
      question: "Do you offer consultations?",
      answer:
        "Yes, we offer a complimentary initial consultation to discuss your project's vision, scope, and requirements. Please contact us to schedule an appointment.",
    },
    {
      question: "Which regions do you operate in?",
      answer:
        "MAS Group primarily operates within Saudi Arabia, with a focus on major metropolitan areas. For projects outside these regions, please contact us to discuss the possibilities.",
    },
  ]

  return (
    <Layout>
      <ContactHero />
      <ContactFormAndDetails />
      <MapSection />
      <FaqsComponent faqs={contactFaqs} />
    </Layout>
  )
}
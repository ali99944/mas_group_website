import Layout from "@/components/layout/layout"
import CtaSection from "../common/components/cta_section"
import HowItWorks from "./components/how-it-works"
import ServicesHero from "./components/services-hero"
import ServicesList from "./components/services-list"
import CalculatorBanner from "../common/components/calculator-banner"

export default function ServicesPage() {
  return (
    <Layout>
      <ServicesHero />
      <ServicesList />
      <HowItWorks />
      <CalculatorBanner />
      <CtaSection />
    </Layout>
  )
}
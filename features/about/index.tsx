import Layout from "@/components/layout/layout"
import AboutHero from "./components/about-hero"
import CompanyTimeline from "./components/company-timeline"
import MeetTheTeam from "./components/meet-the-team"
import CompanyValues from "./components/company-values"
import CtaSection from "../common/components/cta_section"

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <CompanyValues />
      <CompanyTimeline />
      <MeetTheTeam />
      <CtaSection />
    </Layout>
  )
}
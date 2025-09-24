import Layout from "@/components/layout/layout";
import BeforeAfter from "../landing/components/before-after";
import InspirationGallery from "../landing/components/inspiration-gallery";
import DetailsFocus from "../landing/components/details-focus";
import CtaSection from "../common/components/cta_section";
import ShowcaseHero from "./components/showcase-hero";
import BentoGridShowcase from "../landing/components/bento-grid-showcase";


export default function ShowcasePage() {
  return (
    <Layout>
      <ShowcaseHero />
      <InspirationGallery />
      <BentoGridShowcase />
      <BeforeAfter
        beforeImage="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop"
        afterImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
      />
      <DetailsFocus />
      <CtaSection />
    </Layout>
  );
}
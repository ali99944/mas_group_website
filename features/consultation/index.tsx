import Layout from "@/components/layout/layout";
import BookingForm from "./components/booking-form";
import ConsultationHero from "./components/consultation-hero";
import ConsultationProcess from "./components/consultation-process";


export default function ConsultationPage() {
  return (
    <Layout>
      <ConsultationHero />
      <ConsultationProcess />
      <BookingForm />
    </Layout>
  );
}
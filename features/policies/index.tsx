import { notFound } from "next/navigation";
import Layout from "@/components/layout/layout";
import PolicyDisplay from "./components/policy-display";
import { getPolicyBySlug } from "./data";

export default function PolicyPage({ params }: { params: { slug: string } }) {
  // Fetch the policy content based on the slug from the URL
  const policy = getPolicyBySlug(params.slug);

  // If no policy is found for the given slug, show a 404 page
  if (!policy) {
    notFound();
  }

  return (
    <Layout>
      <PolicyDisplay policy={policy} />
    </Layout>
  );
}
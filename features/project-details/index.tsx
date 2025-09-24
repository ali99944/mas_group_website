import Layout from "@/components/layout/layout";
import CtaSection from "../common/components/cta_section";
import { Project } from "../projects/components/project-gallery";
import ProjectHeader from "./components/project-header";
import ProjectImageGallery from "./components/project_image_gallery";
import ProjectDetails from "./components/project_details";
import RelatedProjects from "./components/related-projects";

// --- Sample Data ---
// In a real application, you would fetch this from a CMS or database.
const allProjects: Project[] = [
  {
    id: 1,
    title: "Luxury Residential Villa",
    category: "Residential",
    location: "Riyadh, Saudi Arabia",
    year: 2024,
    client: "Private Homeowner",
    services: ["Turnkey Solution", "Interior Finishing", "Exterior Finishing"],
    image: "https://images.unsplash.com/photo-1613553423779-6139c2f3b593?q=80&w=1932&auto=format&fit=crop",
    description: "A modern villa in Riyadh featuring custom millwork and smart home integration.",
    details: "This project involved a complete interior and exterior finishing for a modern villa in Riyadh. Key features include custom Italian marble flooring, bespoke walnut millwork, and a fully integrated smart home system. The design philosophy was to create a seamless flow between indoor and outdoor spaces, maximizing natural light and providing a serene living environment.",
    gallery: [
      { url: "https://images.unsplash.com/photo-1613553423779-6139c2f3b593?q=80&w=1932&auto=format&fit=crop", alt: "Villa main living area with high ceilings" },
      { url: "https://images.unsplash.com/photo-1612320443423-6f8e71c5a9a4?q=80&w=1935&auto=format&fit=crop", alt: "Modern kitchen with a large marble island" },
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop", alt: "Minimalist bedroom with neutral tones and statement lighting" },
      { url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop", alt: "Exterior view of the villa with a modern facade" }
    ]
  },
  {
    id: 2,
    title: "Corporate Headquarters",
    category: "Commercial",
    location: "Jeddah, Saudi Arabia",
    year: 2023,
    client: "Innovatech Solutions",
    services: ["General Contracting", "Design & Build", "Interior Finishing"],
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop",
    description: "State-of-the-art office designed for collaboration, with bespoke furniture and advanced acoustic solutions.",
    details: "We designed and built a state-of-the-art office space for a leading tech company. The project focused on creating a dynamic and collaborative environment with open-plan layouts, soundproof meeting pods, and ergonomic workstations. The design integrates the company's brand identity throughout the space, fostering a culture of innovation and teamwork.",
    gallery: [
      { url: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop", alt: "Collaborative open-plan office workspace" },
      { url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop", alt: "Modern meeting room with integrated technology" },
      { url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1974&auto=format&fit=crop", alt: "Breakout area for informal meetings and relaxation" },
      { url: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop", alt: "Spacious reception area with company branding" }
    ]
  },
  {
    id: 3,
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    location: "Dammam, Saudi Arabia",
    year: 2023,
    client: "The Oasis Collection Hotels",
    services: ["Interior Finishing", "Hospitality Design", "Custom Millwork"],
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
    description: "An elegant and welcoming lobby for a luxury boutique hotel, combining modern aesthetics with traditional elements.",
    details: "The goal for this project was to create a memorable first impression for guests. We designed and executed a complete overhaul of the hotel lobby, incorporating bespoke furniture, a custom-designed reception desk, ambient lighting, and unique art pieces. The result is a sophisticated and inviting space that reflects the hotel's luxury brand.",
    gallery: [
      { url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop", alt: "Elegant hotel lobby with a grand seating area" },
      { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop", alt: "Hotel reception desk with statement lighting" },
      { url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1949&auto=format&fit=crop", alt: "Comfortable lounge area within the hotel lobby" },
      { url: "https://images.unsplash.com/photo-1590447158034-69d65ff2654c?q=80&w=1932&auto=format&fit=crop", alt: "Architectural details of the lobby ceiling" }
    ]
  },
  {
    id: 4,
    title: "Modern Minimalist Apartment",
    category: "Residential",
    location: "Riyadh, Saudi Arabia",
    year: 2022,
    client: "Private Client",
    services: ["Interior Finishing", "Space Optimization", "Renovation"],
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop",
    description: "A sleek makeover for a city apartment, maximizing space and natural light with minimalist design principles.",
    details: "This apartment renovation focused on creating a sense of openness and tranquility within a compact urban space. We utilized a neutral color palette, built-in storage solutions, and multi-functional furniture to maximize efficiency. Large windows were emphasized to flood the space with natural light, creating a bright and airy atmosphere.",
    gallery: [
      { url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop", alt: "Open-plan living room with minimalist furniture" },
      { url: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1887&auto=format&fit=crop", alt: "Compact and functional modern kitchen" },
      { url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop", alt: "Serene bedroom with integrated storage" },
      { url: "https://images.unsplash.com/photo-1617104679233-a3b82d3e3a47?q=80&w=1935&auto-format&fit=crop", alt: "Stylish bathroom with clean lines" }
    ]
  },
  {
    id: 5,
    title: "Retail Flagship Store",
    category: "Commercial",
    location: "Jeddah, Saudi Arabia",
    year: 2024,
    client: "Elegance Fashion Group",
    services: ["Commercial Finishing", "Retail Design", "Brand Integration"],
    image: "https://images.unsplash.com/photo-1556742111-a3297a0d5ba1?q=80&w=1974&auto=format&fit=crop",
    description: "Innovative retail space design that enhances customer experience and showcases the brand's identity.",
    details: "For this flagship store, we created an immersive brand experience. The design features dynamic lighting, interactive displays, and a seamless customer flow. We used high-end materials and custom fixtures to reflect the brand's luxury positioning and create a unique shopping environment that encourages exploration and engagement.",
    gallery: [
      { url: "https://images.unsplash.com/photo-1556742111-a3297a0d5ba1?q=80&w=1974&auto=format&fit=crop", alt: "Main floor of the retail store with product displays" },
      { url: "https://images.unsplash.com/photo-1524502397800-2d82be81423c?q=80&w=1887&auto=format&fit=crop", alt: "Close-up of bespoke fixtures and brand details" },
      { url: "https://images.unsplash.com/photo-1595342938493-997e7a3f4e15?q=80&w=1887&auto=format=fit=crop", alt: "Fitting room area with luxury finishes" },
      { url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format=fit=crop", alt: "Exterior view of the store facade at night" }
    ]
  },
  {
    id: 6,
    title: "Seaside Resort Spa",
    category: "Hospitality",
    location: "Al Khobar, Saudi Arabia",
    year: 2022,
    client: "Azure Sands Resort",
    services: ["Hospitality Design", "Interior Finishing", "Wellness Spaces"],
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1932&auto=format&fit=crop",
    description: "A tranquil and luxurious spa interior featuring natural materials, ambient lighting, and serene water features.",
    details: "This project aimed to create a sanctuary of relaxation and well-being. The design incorporates natural elements like stone, wood, and water to create a calming atmosphere. We designed custom treatment rooms, a hydrotherapy pool, and relaxation lounges, all with carefully controlled lighting and acoustics to enhance the guest experience.",
    gallery: [
      { url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1932&auto=format=fit=crop", alt: "Luxurious spa treatment room" },
      { url: "https://images.unsplash.com/photo-1544161515-cfd636dc3656?q=80&w=1887&auto=format=fit=crop", alt: "Relaxation lounge area with comfortable seating" },
      { url: "https://plus.unsplash.com/premium_photo-1661963969545-5f5d88692a83?q=80&w=2070&auto=format=fit=crop", alt: "Indoor hydrotherapy pool with ambient lighting" },
      { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1924&auto=format=fit=crop", alt: "Spa reception with natural stone details" }
    ]
  },
  {
    id: 7,
    title: "Penthouse Renovation",
    category: "Residential",
    location: "Riyadh, Saudi Arabia",
    year: 2023,
    client: "Private Investor",
    services: ["Turnkey Solution", "Luxury Finishing", "Renovation"],
    image: "https://images.unsplash.com/photo-1617104679233-a3b82d3e3a47?q=80&w=1935&auto=format=fit=crop",
    description: "Complete overhaul of a luxury penthouse with panoramic city views, custom finishes, and high-end materials.",
    details: "This full-scale renovation transformed an outdated penthouse into a modern masterpiece. We reconfigured the layout to create an open-concept living space that capitalizes on the stunning city views. The project features a gourmet kitchen, a spa-like master bathroom, and a custom-built wine cellar. Every finish was selected for its quality and aesthetic appeal.",
    gallery: [
      { url: "https://images.unsplash.com/photo-1617104679233-a3b82d3e3a47?q=80&w=1935&auto=format=fit=crop", alt: "Main living area of the penthouse with city views" },
      { url: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1935&auto=format=fit=crop", alt: "Gourmet kitchen with high-end appliances" },
      { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1887&auto=format=fit=crop", alt: "Spa-like master bathroom with a freestanding tub" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format=fit=crop", alt: "Bedroom with a view of the city skyline" }
    ]
  },
  {
    id: 8,
    title: "Modern Office Complex",
    category: "Commercial",
    location: "Dammam, Saudi Arabia",
    year: 2021,
    client: "KSA Logistics Corp",
    services: ["General Contracting", "Commercial Finishing", "Exterior Cladding"],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format=fit=crop",
    description: "A multi-floor office complex featuring open-plan layouts, ergonomic workstations, and integrated technology.",
    details: "As the general contractor for this new office complex, we managed the project from groundbreaking to final handover. The building features a modern glass and steel facade, energy-efficient systems, and flexible interior spaces that can be adapted to the client's evolving needs. The complex includes office floors, a central atrium, a cafeteria, and conference facilities.",
    gallery: [
      { url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format=fit=crop", alt: "Collaborative workspace in the modern office complex" },
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format=fit=crop", alt: "Team working in an open-plan office environment" },
      { url: "https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=2070&auto=format=fit=crop", alt: "Bright and airy central atrium of the complex" },
      { url: "https://images.unsplash.com/photo-1554672408-730436b60dde?q=80&w=1936&auto=format=fit=crop", alt: "Exterior facade of the modern office complex" }
    ]
  }
];
  

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id, 10);
  const project = allProjects.find((p) => p.id === projectId);

  // Filter for related projects (e.g., in the same category, excluding the current one)
  const relatedProjects = allProjects.filter(p => p.category === project?.category && p.id !== projectId).slice(0, 3);

  if (!project) {
    return (
      <Layout>
        <div className="text-center py-24">Project not found.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ProjectHeader title={project.title} category={project.category} />
      <ProjectImageGallery images={project.gallery} />
      <ProjectDetails
        description={project.description}
        client={project.client}
        location={project.location}
        year={project.year}
        services={project.services}
      />
      <RelatedProjects projects={relatedProjects} />
      <CtaSection />
    </Layout>
  );
}
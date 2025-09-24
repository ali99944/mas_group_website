interface ProjectHeaderProps {
  title: string;
  category: string;
}

export default function ProjectHeader({ title, category }: ProjectHeaderProps) {
  return (
    <section className="bg-container py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary font-semibold mb-2">{category}</p>
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">{title}</h1>
      </div>
    </section>
  );
}
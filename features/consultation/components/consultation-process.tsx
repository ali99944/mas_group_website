import { ClipboardList, Presentation, Coffee } from "lucide-react";

export default function ConsultationProcess() {
  const steps = [
    {
      icon: ClipboardList,
      title: "1. Share Your Vision",
      description: "Fill out the form below with details about your project, including your goals, scope, and inspiration. The more we know, the better we can prepare.",
    },
    {
      icon: Presentation,
      title: "2. We Do Our Homework",
      description: "Our team will review your submission and prepare preliminary ideas and questions. We'll then contact you to confirm a time for our meeting.",
    },
    {
      icon: Coffee,
      title: "3. The Consultation",
      description: "In our meeting (in-person or virtual), we'll dive deep into your project, discuss potential solutions, and outline the next steps. It's a no-obligation conversation.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            What to Expect
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Our consultation process is simple, transparent, and designed to provide you with maximum value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center items-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center">
                    <Icon size={32} />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
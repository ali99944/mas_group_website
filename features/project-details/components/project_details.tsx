interface ProjectDetailsProps {
    description: string;
    client: string;
    location: string;
    year: number;
    services: string[];
}

export default function ProjectDetails({ description, client, location, year, services }: ProjectDetailsProps) {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
                {/* Left Column: Description */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-foreground mb-4">About the Project</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Right Column: Key Details */}
                <div className="bg-container p-8 border border-border">
                    <h3 className="text-xl font-bold text-foreground mb-6">Project Details</h3>
                    <ul className="space-y-4">
                        <li className="flex flex-col">
                            <span className="text-sm font-semibold text-muted-foreground">CLIENT</span>
                            <span className="text-foreground">{client}</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-sm font-semibold text-muted-foreground">LOCATION</span>
                            <span className="text-foreground">{location}</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-sm font-semibold text-muted-foreground">YEAR</span>
                            <span className="text-foreground">{year}</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-sm font-semibold text-muted-foreground">SERVICES</span>
                            <span className="text-foreground">{services.join(", ")}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
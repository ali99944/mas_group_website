const details = [
    { title: "Bespoke Millwork", image: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2080&auto=format=fit=crop" },
    { title: "Luxury Finishes", image: "https://images.unsplash.com/photo-1594026112272-cb452d37c883?q=80&w=1974&auto=format=fit=crop" },
    { title: "Intricate Tiling", image: "https://images.unsplash.com/photo-1599707374288-06d22171a4f0?q=80&w=1964&auto=format=fit=crop" },
];

export default function DetailsFocus() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">A Focus on the Details</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">Excellence is found in the smallest details. We pride ourselves on flawless execution of every element.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {details.map((detail, index) => (
                        <div key={index} className="group text-center">
                            <div className="aspect-square overflow-hidden">
                                <img src={detail.image} alt={detail.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mt-4">{detail.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
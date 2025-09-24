"use client";

// An array of items to display in our Bento Grid.
// The `gridClasses` property is key to creating the unique layout.
const bentoItems = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1617104679233-a3b82d3e3a47?q=80&w=1935&auto=format=fit=crop",
    altText: "Spacious modern penthouse living room",
    title: "Penthouse Renovation",
    gridClasses: "col-span-2 row-span-2", // This item will be the largest
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format=fit=crop",
    altText: "Minimalist apartment with a clean aesthetic",
    title: "City Apartment",
    gridClasses: "col-span-1 row-span-1",
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1932&auto=format=fit=crop",
    altText: "Luxurious resort spa with a tranquil atmosphere",
    title: "Resort Spa",
    gridClasses: "col-span-1 row-span-1",
  },
  {
    id: 4,
    imageSrc: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format=fit=crop",
    altText: "Elegant hotel lobby with sophisticated design",
    title: "Boutique Hotel",
    gridClasses: "col-span-2 row-span-1", // This item is wider
  },
];

export default function BentoGridShowcase() {
  return (
    <section className="py-20 bg-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            A Glimpse Into Our Work
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Our portfolio is a diverse tapestry of style and function, tailored to the unique vision of each client.
          </p>
        </div>

        {/* The Bento Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-[400px] md:h-[600px]">
          {bentoItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden ${item.gridClasses}`}
            >
              <img
                src={item.imageSrc}
                alt={item.altText}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay with Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
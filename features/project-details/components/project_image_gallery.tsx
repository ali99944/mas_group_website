interface ProjectImageGalleryProps {
    images: {
        url: string;
        alt: string;
    }[];
}

export default function ProjectImageGallery({ images }: ProjectImageGalleryProps) {
    if (!images || images.length === 0) return null;

    return (
        <section className="py-12 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:padding: 0 1rem;">
                <div className="grid grid-cols-1 gap-4">
                    {/* Main Image */}
                    <div className="aspect-[16/9] w-full overflow-hidden">
                        <img src={images[0].url} alt={images[0].alt} className="w-full h-full object-cover" />
                    </div>
                    {/* Thumbnail Images */}
                    {images.length > 1 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            {images.slice(1).map((img, index) => (
                                <div key={index} className="aspect-square w-full overflow-hidden">
                                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Crafting Excellence Since Day One
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MAS Group stands at the forefront of interior finishing and decoration, combining traditional
              craftsmanship with modern innovation. Our team of skilled professionals transforms ordinary spaces into
              extraordinary experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of expertise in luxury finishes, we pride ourselves on attention to detail and commitment to
              excellence. Every project is a testament to our dedication to quality and client satisfaction.
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-interior-designer-working-on-luxury-h.png"
                alt="MAS Group craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

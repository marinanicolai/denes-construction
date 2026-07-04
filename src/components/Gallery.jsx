const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80',
    alt: 'Roof replacement project completed by Denes Construction in Stafford VA — new asphalt shingles installed',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop&q=80',
    alt: 'Modern kitchen remodel with white cabinets and quartz countertops in Fredericksburg VA',
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80',
    alt: 'Beautifully completed home exterior renovation by Denes Construction in Stafford VA',
  },
  {
    src: 'https://images.unsplash.com/photo-1552321554-5fefcaf1d6ce?w=800&auto=format&fit=crop&q=80',
    alt: 'Luxury bathroom remodel with custom tile and fixtures in Montross VA',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
    alt: 'Custom deck construction with composite decking in Fredericksburg VA',
  },
  {
    src: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=800&auto=format&fit=crop&q=80',
    alt: 'New home build in progress by Denes Construction in Stafford VA — framing stage',
  },
  {
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
    alt: 'Home interior renovation and addition completed by Denes Construction in Montross VA',
  },
  {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80',
    alt: 'Denes Construction crew on a general contracting project in Northern Virginia',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white" aria-labelledby="gallery-heading">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">Our Work</span>
          <h2 id="gallery-heading" className="section-heading mt-2">
            Project Gallery
          </h2>
          <p className="section-subheading mx-auto text-center">
            A look at some of the roofing, remodeling, deck, and new construction projects we've completed
            across Montross, Stafford, and Fredericksburg VA.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-xl"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Ready to add your home to our portfolio?</p>
          <a href="#contact" className="btn-primary">
            Request a Free Estimate
          </a>
        </div>
      </div>
    </section>
  )
}

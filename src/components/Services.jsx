const SERVICES = [
  {
    title: 'Roof Replacement',
    description:
      'From worn shingles to full tear-offs, we handle every phase of roof replacement across Montross VA, Stafford VA, and Fredericksburg VA. Quality materials backed by our workmanship guarantee.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80',
    alt: 'Professional roof replacement project by Denes Construction in Stafford VA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <polyline points="3 10 12 2 21 10" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Kitchen Remodeling',
    description:
      'Transform your kitchen into the heart of your home. We handle full kitchen renovations — cabinets, countertops, flooring, and more — for homeowners in Fredericksburg VA and the surrounding region.',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop&q=80',
    alt: 'Modern kitchen remodeling project completed by Denes Construction in Fredericksburg VA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 6V4M12 6V3M16 6V4" />
      </svg>
    ),
  },
  {
    title: 'Bathroom Remodeling',
    description:
      'Upgrade your bathroom with modern fixtures, custom tile work, and expert craftsmanship. Denes Construction serves Stafford VA, Montross VA, and Fredericksburg VA homeowners.',
    image:
      'https://images.unsplash.com/photo-1552321554-5fefcaf1d6ce?w=600&auto=format&fit=crop&q=80',
    alt: 'Bathroom renovation with modern fixtures completed by Denes Construction in Montross VA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M4 12h16v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4z" />
        <path d="M6 12V7a3 3 0 013-3h1" />
        <circle cx="13" cy="5" r="1" />
      </svg>
    ),
  },
  {
    title: 'Deck Building & Repair',
    description:
      'From brand-new deck builds to repairs and full refinishing, we create outdoor living spaces your family will love for years. Serving homeowners in Montross, Stafford, and Fredericksburg VA.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80',
    alt: 'Custom deck construction project by Denes Construction in Fredericksburg VA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <rect x="2" y="14" width="20" height="2" rx="1" />
        <rect x="2" y="18" width="20" height="2" rx="1" />
        <path d="M7 14V10M12 14V9M17 14V10" />
        <path d="M4 10h16" />
      </svg>
    ),
  },
  {
    title: 'New Home Builds',
    description:
      'Ready to build from the ground up? Alex Denes and his team manage every phase — site prep, framing, mechanical, and finishing — delivering custom homes across Stafford VA and Northern Virginia.',
    image:
      'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=600&auto=format&fit=crop&q=80',
    alt: 'New home construction project underway by Denes Construction in Stafford VA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <rect x="3" y="11" width="18" height="10" rx="1" />
        <polyline points="3 11 12 3 21 11" />
        <line x1="10" y1="21" x2="10" y2="15" />
        <line x1="14" y1="21" x2="14" y2="15" />
      </svg>
    ),
  },
  {
    title: 'Home Additions',
    description:
      'Need more space? We seamlessly expand your living area — master suites, sunrooms, in-law suites, and more — for families in Montross VA, Stafford VA, and Fredericksburg VA.',
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80',
    alt: 'Home addition project adding new living space in Montross VA by Denes Construction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M3 12L12 3L21 12V20H15V14H9V20H3V12Z" />
        <line x1="12" y1="13" x2="12" y2="17" />
        <line x1="10" y1="15" x2="14" y2="15" />
      </svg>
    ),
  },
  {
    title: 'General Contracting',
    description:
      'As your full-service general contractor, Alex Denes oversees every aspect of your project — permits, subcontractors, scheduling, and final walk-through — across all of Northern Virginia.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80',
    alt: 'General contracting crew led by Alex Denes on a construction site in Northern Virginia',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white" aria-labelledby="services-heading">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 id="services-heading" className="section-heading mt-2">
            Our Construction Services
          </h2>
          <p className="section-subheading mx-auto text-center">
            From a single roof replacement to a complete custom home build, Denes Construction handles every project with care across{' '}
            <strong>Montross</strong>, <strong>Stafford</strong>, and <strong>Fredericksburg VA</strong>.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc) => (
            <article
              key={svc.title}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={svc.image}
                  alt={svc.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-navy-900 mb-2">{svc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Get a Free Estimate on Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

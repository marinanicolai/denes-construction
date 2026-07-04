const AREAS = [
  {
    name: 'Montross, VA',
    county: 'Westmoreland County',
    description: [
      'Denes Construction is proud to serve the community of Montross VA and the surrounding Westmoreland County area. Montross is a charming town in Virginia\'s Northern Neck, where many homeowners have properties that reflect the area\'s rich history — and deserve expert care.',
      'From storm-damaged roofs in need of replacement to kitchen and bathroom remodels that bring historic homes into the modern era, our team brings the same big-city craftsmanship to Montross that you\'d expect from a major metro contractor — at prices that make sense for this community.',
      'We also specialize in deck construction and home additions for Montross homeowners looking to expand their living space and enjoy everything rural Northern Neck Virginia has to offer.',
    ],
    services: ['Roof Replacement', 'Bathroom Remodeling', 'Deck Building', 'Home Additions'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    name: 'Stafford, VA',
    county: 'Stafford County',
    description: [
      'Stafford VA is one of the fastest-growing areas in Northern Virginia, with new neighborhoods and established communities alike. Denes Construction has been an active part of that growth, handling everything from new home builds in developing subdivisions to complete kitchen remodels in established Stafford County neighborhoods.',
      'Whether you\'re in Aquia Harbour, Embrey Mill, or anywhere throughout Stafford County, Alex Denes and his crew are ready to bring your project to life. Our licensed and insured team understands the local building codes and permit requirements for Stafford VA, ensuring every project goes smoothly from start to finish.',
      'Roofing is one of our most requested services in Stafford VA — the area\'s weather patterns make regular roof inspections and timely replacements a must for every homeowner.',
    ],
    services: ['Roof Replacement', 'Kitchen Remodeling', 'New Home Builds', 'General Contracting'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    name: 'Fredericksburg, VA',
    county: 'Fredericksburg City & Spotsylvania County',
    description: [
      'Fredericksburg VA is a historic city with a dynamic mix of older homes that need thoughtful renovation and newer developments that benefit from skilled general contracting. Denes Construction is experienced working in both environments — preserving the character of classic Fredericksburg homes while modernizing them for today\'s families.',
      'Our Fredericksburg VA services include full kitchen and bathroom remodels, roof replacements on aging homes, deck construction for suburban backyards, and home additions for families who love their neighborhood but need more space.',
      'We also serve the broader Fredericksburg area including Spotsylvania County and surrounding communities. When homeowners in Fredericksburg VA search for a contractor they can trust, Denes Construction delivers the personal service of a local company with the skill of a professional crew.',
    ],
    services: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Roof Replacement', 'Home Additions', 'Deck Building'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 md:py-28 bg-navy-900 text-white" aria-labelledby="area-heading">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Where We Work</span>
          <h2 id="area-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-2 leading-tight">
            Proudly Serving Three Communities
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            Denes Construction is rooted in Northern Virginia. We serve homeowners in{' '}
            <strong className="text-orange-400">Montross VA</strong>,{' '}
            <strong className="text-orange-400">Stafford VA</strong>, and{' '}
            <strong className="text-orange-400">Fredericksburg VA</strong> — and the communities in between.
          </p>
        </div>

        {/* Area cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {AREAS.map((area) => (
            <article
              key={area.name}
              className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-2xl p-8 hover:bg-opacity-10 transition-colors"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white leading-tight">{area.name}</h3>
                  <p className="text-orange-400 text-xs font-medium mt-0.5">{area.county}</p>
                </div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-3">
                {area.description.map((para, i) => (
                  <p key={i} className="text-gray-300 text-sm leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Service tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {area.services.map((svc) => (
                  <span
                    key={svc}
                    className="text-xs font-medium bg-orange-600 bg-opacity-20 text-orange-300 border border-orange-500 border-opacity-30 px-3 py-1 rounded-full"
                  >
                    {svc}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 mt-12 text-sm">
          Not sure if we serve your area?{' '}
          <a
            href="tel:+15402951060"
            className="text-orange-400 hover:text-orange-300 underline font-medium transition-colors"
          >
            Call Alex at (540) 295-1060
          </a>{' '}
          — we'll let you know right away.
        </p>
      </div>
    </section>
  )
}

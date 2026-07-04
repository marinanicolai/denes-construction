const REASONS = [
  {
    title: 'Years of Proven Experience',
    description:
      'Alex Denes brings decades of hands-on construction experience to every project — from single roofs in Montross to full custom homes in Stafford VA.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Quality Workmanship',
    description:
      'We don\'t cut corners. Every project is completed to the highest standards, whether it\'s a bathroom remodel in Fredericksburg VA or a new home build from the ground up.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Fair & Transparent Pricing',
    description:
      'We provide detailed, honest estimates with no hidden fees. What we quote is what you pay — that\'s the Denes Construction promise to every homeowner in our service area.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: 'Licensed & Insured in Virginia',
    description:
      'Denes Construction is fully licensed and insured to operate in Virginia, giving Montross, Stafford, and Fredericksburg homeowners complete peace of mind.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Satisfaction Guarantee',
    description:
      'We stand behind every nail, board, and shingle. If you\'re not completely satisfied, we make it right — because our reputation in this community means everything to us.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
        <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
      </svg>
    ),
  },
  {
    title: 'Local & Family-Owned',
    description:
      'We live and work in the same communities we serve. As neighbors in Montross, Stafford, and Fredericksburg VA, we treat every home as if it were our own.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50" aria-labelledby="about-heading">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — Story */}
          <div>
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 id="about-heading" className="section-heading mt-2 mb-6">
              Why Homeowners in Montross, Stafford &amp; Fredericksburg VA Choose Denes Construction
            </h2>

            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Denes Construction was founded by <strong className="text-navy-900">Alex Denes</strong> with a simple mission: deliver
                honest, high-quality construction services to families across Northern Virginia. We're not a large corporation — we're
                your neighbors right here in Montross, Stafford, and Fredericksburg VA, and we take enormous pride in every project we touch.
              </p>
              <p>
                When you hire Denes Construction, you work directly with Alex. He personally oversees each job from the first estimate
                through the final walk-through, so you always know exactly who is responsible for your home. That personal accountability
                is what sets us apart from the big-box contractors.
              </p>
              <p>
                Whether you need a roof replaced before winter, a kitchen transformed for the holidays, or a brand-new home built from
                the foundation up, the Denes Construction team brings the same dedication to every project — regardless of size.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Start Your Project
              </a>
              <a href="tel:+15402951060" className="btn-secondary">
                Call Alex Directly
              </a>
            </div>
          </div>

          {/* Right — Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((reason) => (
              <div
                key={reason.title}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-3">
                  {reason.icon}
                </div>
                <h3 className="font-heading font-bold text-navy-900 text-base mb-1">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

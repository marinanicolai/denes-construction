export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      aria-label="Hero – Denes Construction"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&auto=format&fit=crop&q=80')",
        }}
        role="img"
        aria-label="Beautiful home exterior representing Denes Construction projects in Montross, Stafford, and Fredericksburg VA"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-900 bg-opacity-70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <span className="inline-block bg-orange-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Serving Montross · Stafford · Fredericksburg VA
        </span>

        <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
          Built Right.{' '}
          <span className="text-orange-400">Built to Last.</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-4 leading-relaxed">
          Denes Construction is a family-owned company delivering expert roofing,
          remodeling, decks, and custom home builds across{' '}
          <strong className="text-white">Montross VA</strong>,{' '}
          <strong className="text-white">Stafford VA</strong>, and{' '}
          <strong className="text-white">Fredericksburg VA</strong>.
        </p>

        <p className="text-base text-gray-300 mb-10">
          Founded by Alex Denes · Licensed &amp; Insured · Free Estimates
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="btn-primary text-base px-10 py-4 text-lg shadow-lg shadow-orange-900/30"
          >
            Get a Free Estimate
          </a>
          <a
            href="tel:+15402951060"
            className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold px-8 py-4 rounded-lg transition-colors text-base"
            aria-label="Call us at (540) 295-1060"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            (540) 295-1060
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce" aria-hidden="true">
          <svg className="w-6 h-6 mx-auto text-white opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </section>
  )
}

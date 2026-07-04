const REVIEWS = [
  {
    name: 'Sarah M.',
    location: 'Stafford, VA',
    rating: 5,
    text: 'Alex and his team replaced our roof after storm damage and did an incredible job from start to finish. They were professional, punctual, and the price was exactly what was quoted — no surprises. I highly recommend Denes Construction to anyone in the Stafford area looking for a contractor they can trust.',
    service: 'Roof Replacement',
  },
  {
    name: 'Mike & Linda R.',
    location: 'Fredericksburg, VA',
    rating: 5,
    text: 'We hired Denes Construction for a full kitchen remodel in our Fredericksburg home and the results are absolutely stunning. Alex kept us informed every single step of the way, the crew was respectful of our home, and the craftsmanship is outstanding. Worth every penny — we cook in there every night now.',
    service: 'Kitchen Remodeling',
  },
  {
    name: 'Tom K.',
    location: 'Montross, VA',
    rating: 5,
    text: 'Our deck was falling apart and we needed it repaired quickly before summer. Alex came out to Montross, gave us a fair honest estimate, and had the whole thing done in just a few days. The new deck looks better than the original. Excellent work, great communication. Will use Denes Construction again.',
    service: 'Deck Repair',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 id="testimonials-heading" className="section-heading">
            What Our Customers Say
          </h2>
          <p className="section-subheading mx-auto text-center">
            Hear from homeowners in Montross VA, Stafford VA, and Fredericksburg VA who trusted
            Denes Construction with their most important investment — their home.
          </p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <blockquote
              key={review.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              <StarRating count={review.rating} />

              <p className="text-gray-600 leading-relaxed mt-4 flex-1 italic">
                "{review.text}"
              </p>

              <footer className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <cite className="not-italic font-heading font-bold text-navy-900 text-sm">{review.name}</cite>
                  <p className="text-gray-400 text-xs mt-0.5">{review.location}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Trust note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Join hundreds of satisfied homeowners across Montross, Stafford, and Fredericksburg VA.
          </p>
          <a href="#contact" className="btn-primary mt-6">
            Get Your Free Estimate Today
          </a>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

// To connect the form, sign up at https://formspree.io, create a new form,
// set the notification email to denesconstruction@gmail.com, then replace
// the placeholder below with your actual form ID (e.g. "xpwzrqvl").
const FORMSPREE_ID = 'YOUR_FORMSPREE_FORM_ID'

const SERVICES = [
  'Roof Replacement',
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Deck Building / Repair',
  'New Home Build',
  'Home Addition',
  'General Contracting',
  'Other / Not Sure Yet',
]

const INITIAL = { name: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _replyto: form.email,
          _subject: `New estimate request from ${form.name} — ${form.service || 'general inquiry'}`,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-navy-900" aria-labelledby="contact-heading">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 id="contact-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
            Request a Free Estimate
          </h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            Serving <strong className="text-orange-400">Montross VA</strong>,{' '}
            <strong className="text-orange-400">Stafford VA</strong>, and{' '}
            <strong className="text-orange-400">Fredericksburg VA</strong> — fill out the form and
            Alex Denes will personally follow up within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">

            <div>
              <h3 className="text-white font-heading font-bold text-xl mb-5">Contact Denes Construction</h3>

              <div className="space-y-5">
                {/* Owner */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Owner / Contact</p>
                    <p className="text-white font-semibold">Alex Denes</p>
                    <p className="text-gray-400 text-sm">Founder, Denes Construction</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Phone (click to call)</p>
                    <a
                      href="tel:+15402951060"
                      className="text-white font-semibold hover:text-orange-400 transition-colors"
                      aria-label="Call Alex Denes at (540) 295-1060"
                    >
                      (540) 295-1060
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Email</p>
                    <a
                      href="mailto:denesconstruction@gmail.com"
                      className="text-white font-semibold hover:text-orange-400 transition-colors break-all"
                    >
                      denesconstruction@gmail.com
                    </a>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Service Area</p>
                    <p className="text-white font-semibold">Montross · Stafford · Fredericksburg VA</p>
                    <p className="text-gray-400 text-sm">& surrounding Northern Virginia communities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time note */}
            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-5">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-orange-400">Fast response guaranteed.</strong> Alex personally reviews
                every estimate request and responds within one business day — often the same day.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-white font-heading font-bold text-2xl mb-2">Message Sent!</h3>
                <p className="text-gray-300">
                  Thanks for reaching out. Alex Denes will be in touch within one business day.
                  You can also call directly at{' '}
                  <a href="tel:+15402951060" className="text-orange-400 underline">(540) 295-1060</a>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-2xl p-8 space-y-5"
                noValidate
                aria-label="Free estimate request form"
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-1.5">
                      Full Name <span className="text-orange-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-1.5">
                      Email Address <span className="text-orange-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                {/* Phone + Service row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(540) 555-0100"
                      className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-300 text-sm font-medium mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-navy-900 border border-white border-opacity-20 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors appearance-none"
                    >
                      <option value="" className="bg-navy-900">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-navy-900">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-1.5">
                    Project Details <span className="text-orange-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project — location (Montross, Stafford, or Fredericksburg VA), scope, timeline, and any specific needs…"
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-y"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm" role="alert">
                    Something went wrong. Please try again or call us at{' '}
                    <a href="tel:+15402951060" className="underline">(540) 295-1060</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-colors text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-navy-900"
                  aria-busy={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Estimate Request'}
                </button>

                <p className="text-gray-500 text-xs text-center">
                  Or call Alex directly at{' '}
                  <a href="tel:+15402951060" className="text-orange-400 hover:text-orange-300 underline">
                    (540) 295-1060
                  </a>{' '}
                  ·{' '}
                  <a href="mailto:denesconstruction@gmail.com" className="text-orange-400 hover:text-orange-300 underline">
                    denesconstruction@gmail.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

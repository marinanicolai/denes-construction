import { useState, useEffect } from 'react'

function LogoMark({ className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 110" className={className} role="img" aria-label="Denes Construction logo">
      <title>Denes Construction</title>
      <polygon points="55,57 98,14 141,57 141,73 55,73" fill="#1a2238"/>
      <rect x="78" y="10" width="9" height="24" fill="#1a2238"/>
      <polygon points="109,57 157,3 205,57 205,73 109,73" fill="#1a2238"/>
      <rect x="149" y="60" width="16" height="11" fill="white"/>
      <line x1="149" y1="65.5" x2="165" y2="65.5" stroke="#1a2238" strokeWidth="1.5"/>
      <line x1="157" y1="60" x2="157" y2="71" stroke="#1a2238" strokeWidth="1.5"/>
      <text x="130" y="96" fontFamily="'Playfair Display', Georgia, serif" fontSize="30" fontWeight="700" fill="#1a2238" textAnchor="middle" letterSpacing="3">DENES</text>
      <text x="130" y="109" fontFamily="Arial, Helvetica, sans-serif" fontSize="9.5" fontWeight="400" fill="#64748b" textAnchor="middle" letterSpacing="4">CONSTRUCTION</text>
    </svg>
  )
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#home"
            aria-label="Denes Construction – Back to top"
            className="flex-shrink-0"
            onClick={closeMenu}
          >
            <LogoMark className="h-12 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-navy-900 hover:text-orange-600 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:+15402951060"
            className="hidden md:flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label="Call Denes Construction at (540) 295-1060"
          >
            <PhoneIcon />
            (540) 295-1060
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-navy-900 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-navy-900 font-semibold py-2 px-3 rounded-md hover:bg-orange-50 hover:text-orange-600 transition-colors"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <div className="pt-3 border-t border-gray-100 mt-2">
            <a
              href="tel:+15402951060"
              className="flex items-center gap-2 bg-orange-600 text-white font-semibold px-4 py-3 rounded-lg w-full justify-center"
              onClick={closeMenu}
              aria-label="Call Denes Construction at (540) 295-1060"
            >
              <PhoneIcon />
              (540) 295-1060
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Leaf } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/#experiences', label: 'Experiences' },
  { to: '/#gallery', label: 'Gallery' },
  { to: '/booking', label: 'Rooms' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isBooking = location.pathname === '/booking'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = scrolled || isBooking
    ? 'bg-warm shadow-md'
    : 'bg-transparent'

  const textColor = scrolled || isBooking
    ? 'text-forest'
    : 'text-warm'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className={`flex items-center gap-2 font-serif text-2xl font-semibold transition-colors duration-300 ${textColor}`}>
            <Leaf size={22} className="text-sage" />
            Vanavil
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.to}
                className={`font-sans text-sm tracking-wide transition-colors duration-200 hover:text-sage ${textColor}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/booking" className="btn-primary text-xs">
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 transition-colors ${textColor}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-warm shadow-xl border-t border-sand">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.to}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm text-charcoal hover:text-forest transition-colors py-2 border-b border-cream"
              >
                {link.label}
              </a>
            ))}
            <Link to="/booking" onClick={() => setMenuOpen(false)} className="btn-primary text-center mt-2">
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

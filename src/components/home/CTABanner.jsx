import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2D4A2D 0%, #4E6B4E 50%, #8B6914 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-white/5" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-warm">
        <span className="block font-sans text-xs tracking-[0.3em] uppercase text-sand mb-4">
          Limited Availability
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
          Your Forest Escape Awaits
        </h2>
        <p className="font-sans text-warm/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
          Rooms fill quickly during peak season. Reserve your stay today and secure your piece of paradise.
        </p>
        <Link to="/booking" className="btn-outline text-base px-12 py-4">
          Check Availability
        </Link>
      </div>
    </section>
  )
}

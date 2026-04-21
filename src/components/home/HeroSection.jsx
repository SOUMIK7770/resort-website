import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-warm px-6 max-w-4xl mx-auto">
        <span className="block font-sans text-xs tracking-[0.3em] uppercase text-sand mb-6 animate-fade-in">
          Coorg, Karnataka · Est. 2016
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-fade-up">
          Where the Forest
          <br />
          <em className="italic text-sand">Calls You Home</em>
        </h1>
        <p className="font-sans text-base md:text-lg text-warm/80 max-w-xl mx-auto mb-10 animate-fade-up-d">
          A luxury forest retreat in the heart of the Western Ghats. Reconnect with nature, savour stillness, and return transformed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-d">
          <Link to="/booking" className="btn-outline">Reserve a Stay</Link>
          <a href="#about" className="btn-outline border-warm/50 hover:bg-transparent hover:border-warm">
            Explore Resort
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-warm/60">
        <ChevronDown size={28} />
      </div>
    </section>
  )
}

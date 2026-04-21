import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../../data/testimonials'

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(c => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="py-24 lg:py-32 bg-forest text-warm">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="section-label !text-sage mb-3">Guest Stories</span>
        <h2 className="font-serif text-4xl md:text-5xl text-warm mb-16">What Our Guests Say</h2>

        <div className="relative">
          {/* Quote */}
          <div key={current} className="animate-fade-in">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} fill="#D4C4A0" stroke="none" />
              ))}
            </div>

            {/* Text */}
            <blockquote className="font-serif text-xl md:text-2xl italic leading-relaxed text-warm/90 mb-10 max-w-3xl mx-auto">
              "{t.text}"
            </blockquote>

            {/* Avatar + Name */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center font-serif text-warm text-lg font-medium">
                {t.avatar}
              </div>
              <div className="text-left">
                <p className="font-sans font-medium text-warm text-sm">{t.name}</p>
                <p className="font-sans text-xs text-warm/50">{t.location}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-warm/30 flex items-center justify-center hover:border-sage hover:text-sage transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-sage w-6' : 'bg-warm/30'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-warm/30 flex items-center justify-center hover:border-sage hover:text-sage transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

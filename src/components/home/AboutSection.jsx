import { useEffect, useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150)
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="reveal relative">
            <img
              src="/images/a1.PNG"
              alt="Resort interior — open-air pavilion"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            {/* Accent badge */}
            <div className="absolute -bottom-6 -right-6 bg-forest text-warm rounded-2xl p-6 shadow-xl hidden md:block">
              <p className="font-serif text-4xl font-light">4+</p>
              <p className="font-sans text-xs tracking-widest uppercase text-warm/70 mt-1">Years of Luxury</p>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <span className="reveal section-label">Our Story</span>
            <h2 className="reveal section-title">
              A Hidden Retreat in Bheempura
            </h2>
            <p className="reveal font-sans text-charcoal/70 leading-relaxed text-base">
              Designed to blend luxury with nature, 
              our resort offers a peaceful escape 
              from city life. Surrounded by beautifully 
              lit landscapes, private villas, open lawns, 
              and tranquil evenings, the property is ideal for 
              family stays, celebrations, weekend retreats,
               and relaxing getaways.
            </p>
            <p className="reveal font-sans text-charcoal/70 leading-relaxed text-base">
              Every corner is crafted to deliver comfort, privacy, and an unforgettable Rajasthan experience.
            </p>
            <div className="reveal grid grid-cols-3 gap-6 pt-4 border-t border-sand">
              {[
                { num: '5', unit: 'Acres', label: 'of Beautiful Estate' },
                { num: '2', unit: 'Bungalow', label: 'Private Retreats' },
                { num: '100%', unit: 'Organic', label: 'Farm-to-Table' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-forest">
                    {stat.num}<span className="text-sage text-xl"> {stat.unit}</span>
                  </p>
                  <p className="font-sans text-xs text-charcoal/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

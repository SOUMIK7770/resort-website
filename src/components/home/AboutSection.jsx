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
              src="/images/about.png"
              alt="Resort interior — open-air pavilion"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            {/* Accent badge */}
            <div className="absolute -bottom-6 -right-6 bg-forest text-warm rounded-2xl p-6 shadow-xl hidden md:block">
              <p className="font-serif text-4xl font-light">8+</p>
              <p className="font-sans text-xs tracking-widest uppercase text-warm/70 mt-1">Years of Luxury</p>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <span className="reveal section-label">Our Story</span>
            <h2 className="reveal section-title">
              A Hidden Sanctuary in the Heart of Coorg
            </h2>
            <p className="reveal font-sans text-charcoal/70 leading-relaxed text-base">
              Vanavil was born from a dream — to create a space where guests can truly disconnect from the noise of modern life and sink into the profound quietude of an ancient forest. Our 45-acre estate sits at 1,200 metres above sea level, cradled by misty peaks and a canopy of silver oak and teak.
            </p>
            <p className="reveal font-sans text-charcoal/70 leading-relaxed text-base">
              Every corner of Vanavil has been thoughtfully designed using local stone, reclaimed wood, and natural textiles — honouring the landscape rather than imposing upon it. We believe true luxury is the luxury of stillness.
            </p>
            <div className="reveal grid grid-cols-3 gap-6 pt-4 border-t border-sand">
              {[
                { num: '45', unit: 'Acres', label: 'of Forest Estate' },
                { num: '12', unit: 'Villas', label: 'Private Retreats' },
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

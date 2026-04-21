import { useEffect, useRef } from 'react'
import { experiences } from '../../data/experiences'

export default function ExperienceCards() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experiences" ref={ref} className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="reveal section-label">Curated Journeys</span>
          <h2 className="reveal section-title">Experiences That Stay With You</h2>
          <p className="reveal font-sans text-charcoal/60 mt-4 leading-relaxed">
            Each experience at Vanavil is crafted to deepen your connection to the forest and to yourself.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => {
            const Icon = exp.icon
            return (
              <div
                key={exp.id}
                className="reveal group card bg-warm p-8 cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-forest group-hover:text-warm transition-all duration-300">
                  <Icon size={24} className="text-forest group-hover:text-warm transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl text-forest mb-3 group-hover:text-moss transition-colors duration-200">
                  {exp.title}
                </h3>
                <p className="font-sans text-sm text-charcoal/60 leading-relaxed">
                  {exp.description}
                </p>
                <div className="mt-6 h-0.5 w-8 bg-sage group-hover:w-16 transition-all duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { X } from 'lucide-react'
import { galleryImages } from '../../data/gallery'

export default function GalleryGrid() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">The Property</span>
          <h2 className="section-title">A Glimpse of Vanavil</h2>
          <p className="font-sans text-charcoal/60 mt-4">
            Every frame tells a story of nature, craftsmanship, and quiet luxury.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3">
          {galleryImages.map(img => (
            <div
              key={img.id}
              className={`${img.span} relative overflow-hidden rounded-xl cursor-pointer group`}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-end">
                <p className="text-warm text-xs font-sans px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-warm hover:text-sand transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-warm/60 font-sans text-sm">
            {lightbox.alt}
          </p>
        </div>
      )}
    </section>
  )
}

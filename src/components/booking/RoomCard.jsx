import { Check } from 'lucide-react'

export default function RoomCard({ room, onBook, isSelected }) {
  return (
    <div className={`card flex flex-col ${isSelected ? 'ring-2 ring-forest' : ''}`}>
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-forest text-warm text-xs font-sans px-3 py-1 rounded-full uppercase tracking-wider">
          {room.type}
        </span>
        {isSelected && (
          <div className="absolute top-3 right-3 bg-sage text-warm rounded-full p-1">
            <Check size={14} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-serif text-xl text-forest">{room.title}</h3>
            <p className="font-sans text-xs text-charcoal/40 mt-0.5">Up to {room.capacity} guest{room.capacity > 1 ? 's' : ''}</p>
          </div>
          <div className="text-right">
            <p className="font-serif text-2xl text-earth">₹{room.price.toLocaleString('en-IN')}</p>
            <p className="font-sans text-xs text-charcoal/40">per night</p>
          </div>
        </div>

        <p className="font-sans text-sm text-charcoal/60 leading-relaxed mb-5">
          {room.description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.map(a => (
            <span key={a} className="bg-cream text-charcoal/60 text-xs font-sans px-3 py-1 rounded-full border border-sand">
              {a}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <button
            onClick={() => onBook(room)}
            className={`w-full py-3 rounded-full font-sans text-sm tracking-widest uppercase transition-all duration-300 ${
              isSelected
                ? 'bg-sage text-warm cursor-default'
                : 'bg-forest text-warm hover:bg-moss hover:shadow-md hover:-translate-y-0.5'
            }`}
          >
            {isSelected ? '✓ Selected' : 'Book Now'}
          </button>
        </div>
      </div>
    </div>
  )
}

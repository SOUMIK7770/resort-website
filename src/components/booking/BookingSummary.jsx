import { CalendarDays, Users, Leaf } from 'lucide-react'

function diffNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0
  const d1 = new Date(checkIn)
  const d2 = new Date(checkOut)
  const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24))
  return diff > 0 ? diff : 0
}

function fmt(dateStr) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
  })
}

export default function BookingSummary({ room, filters, onConfirm }) {
  const nights = diffNights(filters.checkIn, filters.checkOut)
  const roomTotal = room ? room.price * nights : 0
  const taxes = Math.round(roomTotal * 0.12)
  const total = roomTotal + taxes

  const ready = room && nights > 0

  return (
    <div className="bg-warm rounded-2xl border border-sand shadow-xl overflow-hidden sticky top-28">
      {/* Header */}
      <div className="bg-forest px-6 py-5">
        <div className="flex items-center gap-2 text-warm">
          <Leaf size={18} className="text-sage" />
          <h3 className="font-serif text-xl">Booking Summary</h3>
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* Room */}
        <div>
          <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-2">Selected Room</p>
          {room ? (
            <div className="flex gap-3 items-center">
              <img src={room.image} alt={room.title} className="w-14 h-14 rounded-xl object-cover shrink-0" />
              <div>
                <p className="font-serif text-base text-forest">{room.title}</p>
                <p className="font-sans text-xs text-charcoal/50 mt-0.5">₹{room.price.toLocaleString('en-IN')} / night</p>
              </div>
            </div>
          ) : (
            <p className="font-sans text-sm text-charcoal/40 italic">No room selected</p>
          )}
        </div>

        <div className="h-px bg-sand" />

        {/* Dates */}
        <div className="space-y-3">
          <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest">Dates</p>
          <div className="flex items-center gap-3 text-sm">
            <CalendarDays size={15} className="text-sage" />
            <span className="text-charcoal/70">{fmt(filters.checkIn)} → {fmt(filters.checkOut)}</span>
          </div>
          {nights > 0 && (
            <p className="font-sans text-xs text-charcoal/40 ml-6">{nights} night{nights > 1 ? 's' : ''}</p>
          )}
        </div>

        {/* Guests */}
        <div className="flex items-center gap-3 text-sm">
          <Users size={15} className="text-sage" />
          <span className="text-charcoal/70">{filters.guests} guest{filters.guests > 1 ? 's' : ''}</span>
        </div>

        <div className="h-px bg-sand" />

        {/* Price Breakdown */}
        <div className="space-y-3 font-sans text-sm">
          <div className="flex justify-between text-charcoal/60">
            <span>
              {room ? `₹${room.price.toLocaleString('en-IN')} × ${nights} night${nights !== 1 ? 's' : ''}` : 'Room charges'}
            </span>
            <span>₹{roomTotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-charcoal/60">
            <span>Taxes & fees (12%)</span>
            <span>₹{taxes.toLocaleString('en-IN')}</span>
          </div>
          <div className="h-px bg-sand" />
          <div className="flex justify-between font-medium text-base">
            <span className="font-serif text-forest text-lg">Total</span>
            <span className="font-serif text-earth text-lg">
              {ready ? `₹${total.toLocaleString('en-IN')}` : '—'}
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onConfirm}
          disabled={!ready}
          className={`w-full py-4 rounded-full font-sans text-sm tracking-widest uppercase transition-all duration-300 ${
            ready
              ? 'bg-earth text-warm hover:bg-bark hover:shadow-lg hover:-translate-y-0.5'
              : 'bg-sand text-charcoal/30 cursor-not-allowed'
          }`}
        >
          {ready ? 'Confirm Booking' : 'Select Room & Dates'}
        </button>

        <p className="font-sans text-xs text-center text-charcoal/40">
          Free cancellation up to 48 hours before check-in
        </p>
      </div>
    </div>
  )
}

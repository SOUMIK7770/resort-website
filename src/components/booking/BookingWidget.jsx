import { CalendarDays, Users, ChevronDown, Building2, PartyPopper } from 'lucide-react'

export default function BookingWidget({ filters, setFilters }) {
  const today = new Date().toISOString().split('T')[0]
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]

  const handleChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }))
  }

  const isPrivate = filters.bookingType === 'private'

  return (
    <div className="bg-warm rounded-2xl shadow-xl border border-sand p-6">
      <h2 className="font-serif text-2xl text-forest mb-6">Find Your Stay</h2>

      {/* Booking Type Toggle */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          onClick={() => handleChange('bookingType', 'room')}
          className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-sans text-sm tracking-wide transition-all duration-300 border ${
            !isPrivate
              ? 'bg-forest text-warm border-forest shadow-md'
              : 'bg-transparent text-charcoal/60 border-sand hover:border-sage hover:text-forest'
          }`}
        >
          <Building2 size={16} />
          Room Booking
        </button>
        <button
          onClick={() => handleChange('bookingType', 'private')}
          className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-sans text-sm tracking-wide transition-all duration-300 border ${
            isPrivate
              ? 'bg-forest text-warm border-forest shadow-md'
              : 'bg-transparent text-charcoal/60 border-sand hover:border-sage hover:text-forest'
          }`}
        >
          <PartyPopper size={16} />
          Private Booking
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        {/* Check-in */}
        <div>
          <label className="block font-sans text-xs text-charcoal/50 uppercase tracking-widest mb-2">
            Check-in
          </label>
          <div className="relative">
            <CalendarDays size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-sage pointer-events-none" />
            <input
              type="date"
              min={today}
              value={filters.checkIn}
              onChange={e => handleChange('checkIn', e.target.value)}
              className="form-input pl-9"
            />
          </div>
        </div>

        {/* Check-out */}
        <div>
          <label className="block font-sans text-xs text-charcoal/50 uppercase tracking-widest mb-2">
            Check-out
          </label>
          <div className="relative">
            <CalendarDays size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-sage pointer-events-none" />
            <input
              type="date"
              min={filters.checkIn || tomorrow}
              value={filters.checkOut}
              onChange={e => handleChange('checkOut', e.target.value)}
              className="form-input pl-9"
            />
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="block font-sans text-xs text-charcoal/50 uppercase tracking-widest mb-2">
            Guests
          </label>
          <div className="relative">
            <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-sage pointer-events-none" />
            <select
              value={filters.guests}
              onChange={e => handleChange('guests', Number(e.target.value))}
              className="form-input pl-9 appearance-none cursor-pointer"
            >
              {isPrivate
                ? [5, 10, 15, 20, 30, 50].map(n => (
                    <option key={n} value={n}>{n} Guests</option>
                  ))
                : [1, 2, 3, 4].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))
              }
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-sage pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  )
}

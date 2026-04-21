import { useState } from 'react'
import { CalendarDays, Users, ChevronDown } from 'lucide-react'

const ROOM_TYPES = [
  { value: '', label: 'All Room Types' },
  { value: 'villa', label: 'Forest Villa' },
  { value: 'suite', label: 'Treetop Suite' },
  { value: 'villa-pool', label: 'Pool Villa' },
  { value: 'cottage', label: 'Jungle Cottage' },
]

export default function BookingWidget({ filters, setFilters }) {
  // Get today's date and tomorrow in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0]
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]

  const handleChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-warm rounded-2xl shadow-xl border border-sand p-6">
      <h2 className="font-serif text-2xl text-forest mb-6">Find Your Stay</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

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
              {[1, 2, 3, 4].map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-sage pointer-events-none" />
          </div>
        </div>

        {/* Room Type */}
        <div>
          <label className="block font-sans text-xs text-charcoal/50 uppercase tracking-widest mb-2">
            Room Type
          </label>
          <div className="relative">
            <select
              value={filters.type}
              onChange={e => handleChange('type', e.target.value)}
              className="form-input appearance-none cursor-pointer"
            >
              {ROOM_TYPES.map(rt => (
                <option key={rt.value} value={rt.value}>{rt.label}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-sage pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  )
}

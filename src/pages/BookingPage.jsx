import { useState } from 'react'
import BookingWidget from '../components/booking/BookingWidget'
import RoomCard from '../components/booking/RoomCard'
import BookingSummary from '../components/booking/BookingSummary'
import { rooms } from '../data/rooms'

const today = new Date().toISOString().split('T')[0]
const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]

export default function BookingPage() {
  const [filters, setFilters] = useState({
    checkIn: today,
    checkOut: tomorrow,
    guests: 2,
    type: '',
  })
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [confirmed, setConfirmed] = useState(false)

  const filteredRooms = rooms.filter(r => {
    if (filters.type && r.type !== filters.type) return false
    if (r.capacity < filters.guests) return false
    return true
  })

  const handleBook = (room) => {
    setSelectedRoom(prev => prev?.id === room.id ? null : room)
    setConfirmed(false)
  }

  const handleConfirm = () => {
    setConfirmed(true)
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-forest pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="block font-sans text-xs tracking-[0.3em] uppercase text-sage mb-3">
            Vanavil Resort
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-warm">Reserve Your Stay</h1>
          <p className="font-sans text-warm/60 mt-3 text-base max-w-lg">
            Choose from our curated collection of forest villas, treetop suites, and private cottages.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

        {/* Booking Widget */}
        <div className="mb-10">
          <BookingWidget filters={filters} setFilters={setFilters} />
        </div>

        {/* Confirmation Banner */}
        {confirmed && (
          <div className="mb-8 bg-sage/10 border border-sage rounded-2xl p-5 text-center">
            <p className="font-serif text-xl text-forest">🌿 Your booking request has been received!</p>
            <p className="font-sans text-sm text-charcoal/60 mt-2">
              Our team will confirm your reservation at <strong>{selectedRoom?.title}</strong> shortly via email.
            </p>
          </div>
        )}

        {/* Main layout: rooms + summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Room Cards */}
          <div className="lg:col-span-2">
            <p className="font-sans text-sm text-charcoal/40 mb-5">
              {filteredRooms.length} room{filteredRooms.length !== 1 ? 's' : ''} available
            </p>

            {filteredRooms.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredRooms.map(room => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    isSelected={selectedRoom?.id === room.id}
                    onBook={handleBook}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-charcoal/40">
                <p className="font-serif text-2xl mb-3">No rooms match your filters</p>
                <p className="font-sans text-sm">Try adjusting your guest count or room type.</p>
              </div>
            )}
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <BookingSummary
              room={selectedRoom}
              filters={filters}
              onConfirm={handleConfirm}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

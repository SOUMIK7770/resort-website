import { useState } from 'react'
import BookingWidget from '../components/booking/BookingWidget'
import RoomCard from '../components/booking/RoomCard'
import BookingSummary from '../components/booking/BookingSummary'
import BookingSuccess from '../components/booking/BookingSuccess'
import { rooms } from '../data/rooms'

const today = new Date().toISOString().split('T')[0]
const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]

export default function BookingPage() {
  const [filters, setFilters] = useState({
    checkIn: today,
    checkOut: tomorrow,
    guests: 2,
    bookingType: 'room',
  })
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [successDetails, setSuccessDetails] = useState(null)

  const filteredRooms = rooms.filter(r => {
    if (r.bookingType !== filters.bookingType) return false
    // For room bookings, also filter by guest capacity
    if (filters.bookingType === 'room' && r.capacity < filters.guests) return false
    return true
  })

  // Clear selection when booking type changes
  const handleFiltersChange = (newFilters) => {
    if (typeof newFilters === 'function') {
      setFilters(prev => {
        const next = newFilters(prev)
        if (next.bookingType !== prev.bookingType) {
          setSelectedRoom(null)
          next.guests = next.bookingType === 'private' ? 5 : 2
        }
        return next
      })
    } else {
      setFilters(prev => {
        if (newFilters.bookingType !== prev.bookingType) {
          setSelectedRoom(null)
          newFilters.guests = newFilters.bookingType === 'private' ? 5 : 2
        }
        return newFilters
      })
    }
  }

  const handleSelect = (room) => {
    setSelectedRoom(prev => prev?.id === room.id ? null : room)
  }

  const handleSuccess = (details) => {
    setSuccessDetails(details)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleReset = () => {
    setSuccessDetails(null)
    setSelectedRoom(null)
    setFilters({
      checkIn: today,
      checkOut: tomorrow,
      guests: 2,
      bookingType: 'room',
    })
  }

  // Show success view
  if (successDetails) {
    return (
      <div className="min-h-screen bg-cream">
        <div className="bg-forest pt-32 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <span className="block font-sans text-xs tracking-[0.3em] uppercase text-sage mb-3">
              Angel Hill
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-warm">Booking Confirmed</h1>
          </div>
        </div>
        <BookingSuccess details={successDetails} onReset={handleReset} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-forest pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="block font-sans text-xs tracking-[0.3em] uppercase text-sage mb-3">
            Angel Hill
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-warm">Reserve Your Stay</h1>
          <p className="font-sans text-warm/60 mt-3 text-base max-w-lg">
            {filters.bookingType === 'private'
              ? 'Book the entire estate for your celebration, family function, or private retreat.'
              : 'Choose from our curated collection of forest villas, suites, and cottages.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

        {/* Booking Widget */}
        <div className="mb-10">
          <BookingWidget filters={filters} setFilters={handleFiltersChange} />
        </div>

        {/* Main layout: rooms + summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Room / Property Cards */}
          <div className="lg:col-span-2">
            <p className="font-sans text-sm text-charcoal/40 mb-5">
              {filteredRooms.length} {filters.bookingType === 'private' ? 'option' : 'room'}{filteredRooms.length !== 1 ? 's' : ''} available
            </p>

            {filteredRooms.length > 0 ? (
              <div className={`grid gap-6 ${
                filters.bookingType === 'private'
                  ? 'grid-cols-1'
                  : 'grid-cols-1 sm:grid-cols-2'
              }`}>
                {filteredRooms.map(room => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    isSelected={selectedRoom?.id === room.id}
                    onBook={handleSelect}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-charcoal/40">
                <p className="font-serif text-2xl mb-3">No rooms match your filters</p>
                <p className="font-sans text-sm">Try adjusting your guest count.</p>
              </div>
            )}
          </div>

          {/* Booking Inquiry Summary */}
          <div className="lg:col-span-1">
            <BookingSummary
              room={selectedRoom}
              filters={filters}
              onSuccess={handleSuccess}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

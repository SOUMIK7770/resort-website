import { useState } from 'react'
import { CalendarDays, Users, Leaf, User, Phone, Mail, MessageSquare, Loader2 } from 'lucide-react'
import { sendBookingInquiry } from '../../utils/emailService'

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

export default function BookingSummary({ room, filters, onSuccess }) {
  const nights = diffNights(filters.checkIn, filters.checkOut)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const ready = room && nights > 0

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    // Clear field error on change
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[+]?[\d\s-]{7,15}$/.test(form.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number'
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Enter a valid email address'
    }

    if (!room) {
      newErrors.room = 'Please select a room or property'
    }

    if (nights <= 0) {
      newErrors.dates = 'Please select valid check-in and check-out dates'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return

    setLoading(true)
    setSubmitError('')

    try {
      const bookingTypeLabel = filters.bookingType === 'private'
        ? 'Complete Private Booking'
        : 'Room Booking'

      await sendBookingInquiry({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        bookingType: bookingTypeLabel,
        selectedRoom: room.title,
        guests: filters.guests,
        checkIn: filters.checkIn,
        checkOut: filters.checkOut,
        notes: form.notes.trim(),
      })

      onSuccess({
        name: form.name.trim(),
        room: room.title,
      })
    } catch (err) {
      console.error('EmailJS error:', err)
      setSubmitError('Something went wrong. Please try again or contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-warm rounded-2xl border border-sand shadow-xl overflow-hidden sticky top-28">
      {/* Header */}
      <div className="bg-forest px-6 py-5">
        <div className="flex items-center gap-2 text-warm">
          <Leaf size={18} className="text-sage" />
          <h3 className="font-serif text-xl">Booking Inquiry</h3>
        </div>
      </div>

      <div className="p-6 space-y-5">

        {/* Selection Summary */}
        <div>
          <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-2">Selected</p>
          {room ? (
            <div className="flex gap-3 items-center">
              <img src={room.image} alt={room.title} className="w-14 h-14 rounded-xl object-cover shrink-0" />
              <div>
                <p className="font-serif text-base text-forest">{room.title}</p>
                <p className="font-sans text-xs text-charcoal/50 mt-0.5">
                  {filters.bookingType === 'private' ? 'Private Booking' : 'Room Booking'}
                </p>
              </div>
            </div>
          ) : (
            <p className="font-sans text-sm text-charcoal/40 italic">No room selected</p>
          )}
        </div>

        <div className="h-px bg-sand" />

        {/* Dates & Guests */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <CalendarDays size={15} className="text-sage shrink-0" />
            <span className="text-charcoal/70">{fmt(filters.checkIn)} → {fmt(filters.checkOut)}</span>
          </div>
          {nights > 0 && (
            <p className="font-sans text-xs text-charcoal/40 ml-6">{nights} night{nights > 1 ? 's' : ''}</p>
          )}
          <div className="flex items-center gap-3 text-sm">
            <Users size={15} className="text-sage shrink-0" />
            <span className="text-charcoal/70">{filters.guests} guest{filters.guests > 1 ? 's' : ''}</span>
          </div>
        </div>

        {(errors.room || errors.dates) && (
          <p className="font-sans text-xs text-red-500">{errors.room || errors.dates}</p>
        )}

        <div className="h-px bg-sand" />

        {/* Contact Form */}
        <div className="space-y-4">
          <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest">Your Details</p>

          {/* Name */}
          <div>
            <div className="relative">
              <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-sage pointer-events-none" />
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={e => handleChange('name', e.target.value)}
                className={`form-input pl-9 ${errors.name ? 'ring-2 ring-red-300 border-red-300' : ''}`}
              />
            </div>
            {errors.name && <p className="font-sans text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <div className="relative">
              <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-sage pointer-events-none" />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={e => handleChange('phone', e.target.value)}
                className={`form-input pl-9 ${errors.phone ? 'ring-2 ring-red-300 border-red-300' : ''}`}
              />
            </div>
            {errors.phone && <p className="font-sans text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <div className="relative">
              <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-sage pointer-events-none" />
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={e => handleChange('email', e.target.value)}
                className={`form-input pl-9 ${errors.email ? 'ring-2 ring-red-300 border-red-300' : ''}`}
              />
            </div>
            {errors.email && <p className="font-sans text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Notes */}
          <div>
            <div className="relative">
              <MessageSquare size={15} className="absolute left-3 top-3.5 text-sage pointer-events-none" />
              <textarea
                placeholder="Special requests or notes (optional)"
                value={form.notes}
                onChange={e => handleChange('notes', e.target.value)}
                rows={3}
                className="form-textarea pl-9"
              />
            </div>
          </div>
        </div>

        {/* Submit Error */}
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3">
            <p className="font-sans text-xs text-red-600">{submitError}</p>
          </div>
        )}

        {/* CTA */}
        <button
          onClick={handleSubmit}
          disabled={!ready || loading}
          className={`w-full py-4 rounded-full font-sans text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
            ready && !loading
              ? 'bg-earth text-warm hover:bg-bark hover:shadow-lg hover:-translate-y-0.5'
              : 'bg-sand text-charcoal/30 cursor-not-allowed'
          }`}
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : ready ? (
            'Submit Inquiry'
          ) : (
            'Select Room & Dates'
          )}
        </button>

        <p className="font-sans text-xs text-center text-charcoal/40">
          No payment required — our team will contact you to confirm your reservation.
        </p>
      </div>
    </div>
  )
}

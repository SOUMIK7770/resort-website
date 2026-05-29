import emailjs from '@emailjs/browser'

// ──────────────────────────────────────────────
// Replace these with your real EmailJS credentials
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service  → SERVICE_ID
// 3. Create an Email Template → TEMPLATE_ID
// 4. Copy your Public Key from Account → API Keys
// ──────────────────────────────────────────────
const SERVICE_ID = 'service_yhuecsa'
const TEMPLATE_ID = 'template_hu688gp'
const PUBLIC_KEY = 'caVqjJ_qfA9pzElhn'

/**
 * Sends a booking inquiry email via EmailJS.
 *
 * @param {Object} data
 * @param {string} data.name          - Customer full name
 * @param {string} data.phone         - Customer phone number
 * @param {string} data.email         - Customer email address
 * @param {string} data.bookingType   - 'Complete Private Booking' | 'Room Booking'
 * @param {string} data.selectedRoom  - Room or property title
 * @param {number} data.guests        - Number of guests
 * @param {string} data.checkIn       - Check-in date (YYYY-MM-DD)
 * @param {string} data.checkOut      - Check-out date (YYYY-MM-DD)
 * @param {string} data.notes         - Special requests / notes
 *
 * @returns {Promise} Resolves on success, rejects on failure.
 */
export async function sendBookingInquiry(data) {
  const templateParams = {
    name: data.name,
    phone: data.phone,
    email: data.email,
    booking_type: data.bookingType,
    room: data.selectedRoom,
    guests: data.guests,
    checkin: data.checkIn,
    checkout: data.checkOut,
    message: data.notes || 'None',
  }

  const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
  return response
}

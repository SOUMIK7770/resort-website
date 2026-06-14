export const rooms = [
  // ── Private Booking ──
  {
    id: 0,
    title: 'Complete Property',
    description:
      'Reserve the entire Angel Hill estate — all villas, lawns, pool, and event spaces — for an exclusive private celebration, family function, or corporate retreat. Minimum 5 guests required. Pricing is ₹1,000 per person; negotiable for groups of 15+.',
    price: 1000,
    priceType: 'per-head',
    image: '/images/side1.PNG',
    bookingType: 'private',
    capacity: 50,
    minGuests: 5,
    amenities: [
      'All Rooms',
      'Private Pool',
      'Event Lawns',
      'Catering Available',
      'Bonfire Setup',
      'Decoration Support',
    ],
  },

  // ── Room Bookings ──
  {
    id: 1,
    title: 'Royal Heritage Suite',
    description:
      'Experience timeless elegance in our Royal Heritage Suite, featuring handcrafted wooden interiors, traditional décor, premium furnishings, and a warm ambient atmosphere. Perfect for couples and guests seeking a refined and comfortable stay.',
    price: 1499,
    image: '/images/room1.PNG',
    bookingType: 'room',
    capacity: 2,
    amenities: ['King Bed', 'Air Conditioning','Wi-Fi', 'Private Bathroom','Premium Interiors' ,'Luxury Seating Area'],
  },
  {
    id: 2,
    title: 'Premium Exotic Room',
    description:
      "Designed for comfort and relaxation, the Premium Garden Room offers spacious interiors, soothing lighting, elegant décor, and a peaceful atmosphere. A perfect retreat for guests looking to unwind amidst nature and luxury.",
    price: 1499,
    image: '/images/room2.PNG',
    bookingType: 'room',
    capacity: 2,
    amenities: ['Queen Bed', 'Wi-Fi','Air Conditioning','Garden View','Private Bathroom','Premium Furnishings'],
  },
  {
    id: 3,
    title: 'Rustic Stone Cottage',
    description:
      'A unique countryside escape crafted with natural stone architecture and warm rustic charm. The Rustic Stone Cottage combines traditional character with modern comfort, offering an authentic and memorable stay experience.',
    price: 999,
    image: '/images/room4.PNG',
    bookingType: 'room',
    capacity: 2,
    amenities: ['Double Bed' , 'Non-AC', 'Stone Cottage Design' , 'Private Entrance' , 'Wi-Fi' , 'Nature View'],
  },
// we can use the 4th room in future

  // {
  //   id: 4,
  //   title: 'Jungle Cottage',
  //   description:
  //     'A charming cottage framed by lush undergrowth, offering the perfect balance of comfort and immersion in nature.',
  //   price: 6500,
  //   image: '/images/room1.png',
  //   bookingType: 'room',
  //   capacity: 2,
  //   amenities: ['Double Bed', 'Garden View', 'Sit-out', 'Hot Shower', 'Complimentary Breakfast', 'Wi-Fi'],
  // },
]

import { Link } from 'react-router-dom'
import { Leaf, Globe, Hash, AtSign, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-serif text-2xl text-warm mb-4">
              <Leaf size={20} className="text-sage" />
              Angel Hill Resort
            </div>
            <p className="text-sm leading-relaxed text-warm/60 mb-6">
              Enjoy a peaceful destination surrounded by nature while staying connected to the beauty and culture of Rajasthan.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Website" className="hover:text-sage transition-colors"><Globe size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-sage transition-colors"><Hash size={18} /></a>
              <a href="#" aria-label="Email" className="hover:text-sage transition-colors"><AtSign size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-warm text-lg mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'About Us', 'Experiences', 'Gallery', 'Rooms & Suites', 'Book a Stay'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-sage transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="font-serif text-warm text-lg mb-5">Experiences</h4>
            <ul className="space-y-3 text-sm">
              {['Nature Walks', 'Outdoor Dining', 'Wellness', 'Bonfire', 'Birdwatching'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-sage transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-warm text-lg mb-5">Contact Details </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sage mt-0.5 shrink-0" />
                <span>Angel Hill resorts, Seengwana, Bheempura, Rajasthan 303805 </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sage shrink-0" />
                <a href="tel:+917873419960" className="hover:text-sage transition-colors">+91 9929995216 / +91 9024109982</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-sage shrink-0" />
                <a href="angelhillresort14@gmail.com" className="hover:text-sage transition-colors">angelhillresort14@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warm/40">
          <span>© {new Date().getFullYear()} Angel Hill. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="iamsoumik.pohi@gmail.com" className="hover:text-warm/60 transition-colors">Contact Developer</a>
            {/* <a href="#" className="hover:text-warm/60 transition-colors">Terms of Service</a> */}
            {/* <a href="#" className="hover:text-warm/60 transition-colors">Cancellation Policy</a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

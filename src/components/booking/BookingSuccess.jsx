import { CheckCircle, ArrowLeft } from 'lucide-react'

export default function BookingSuccess({ details, onReset }) {
  return (
    <div className="max-w-2xl mx-auto py-16 px-6 text-center">
      {/* Animated Checkmark */}
      <div className="animate-scale-in mb-8">
        <div className="w-24 h-24 rounded-full bg-sage/15 flex items-center justify-center mx-auto">
          <div className="w-16 h-16 rounded-full bg-sage/25 flex items-center justify-center">
            <CheckCircle size={40} className="text-forest" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="animate-fade-slide-up space-y-4">
        <h2 className="font-serif text-3xl md:text-4xl text-forest leading-snug">
          Thank You{details?.name ? `, ${details.name.split(' ')[0]}` : ''}!
        </h2>
        <p className="font-sans text-charcoal/70 text-base max-w-md mx-auto leading-relaxed">
          Your booking request
          {details?.room ? (
            <> for <strong className="text-forest">{details.room}</strong></>
          ) : null}
          {' '}has been received successfully.
        </p>
        <p className="font-sans text-charcoal/50 text-sm max-w-md mx-auto leading-relaxed">
          Our team will contact you shortly with further details and to confirm your reservation.
        </p>
      </div>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center gap-3 my-10">
        <div className="h-px w-12 bg-sand" />
        <span className="text-sage text-lg">🌿</span>
        <div className="h-px w-12 bg-sand" />
      </div>

      {/* Info Cards */}
      <div className="animate-fade-slide-up grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-10">
        <div className="bg-cream rounded-xl p-4 border border-sand">
          <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-1">What's Next</p>
          <p className="font-sans text-sm text-charcoal/70">
            Expect a confirmation call or email within 2–4 hours.
          </p>
        </div>
        <div className="bg-cream rounded-xl p-4 border border-sand">
          <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest mb-1">Need Help?</p>
          <p className="font-sans text-sm text-charcoal/70">
            Reach us anytime at<br />
            <a href="mailto:iamsoumik.pohi@gmail.com" className="text-forest hover:text-sage transition-colors">
              iamsoumik.pohi@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 font-sans text-sm text-charcoal/50 hover:text-forest transition-colors duration-200"
      >
        <ArrowLeft size={16} />
        Make Another Inquiry
      </button>
    </div>
  )
}

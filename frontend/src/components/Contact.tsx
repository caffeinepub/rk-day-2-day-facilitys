import { Phone, Clock, MapPin, CheckCircle, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-teal-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-teal-700/25 -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal-600/15 translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-teal-800/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-2 rounded-full bg-teal-700/50 text-teal-200 text-sm font-bold tracking-widest uppercase mb-5 border border-teal-600/40">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Ready for a Cleaner Space?
          </h2>
          <p className="text-teal-200/75 text-lg max-w-xl mx-auto leading-relaxed">
            Give us a call today and let us take care of the cleaning &mdash; so you don&apos;t have to.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center mb-8 hover:bg-white/15 transition-all duration-300">
          {/* Phone Numbers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-8">
            {/* Primary Number */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-teal-500 flex items-center justify-center shadow-lg group-hover:bg-teal-400 group-hover:scale-110 transition-all duration-300">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <p className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-0.5">Primary</p>
                <a
                  href="tel:9962442558"
                  className="text-white text-2xl md:text-3xl font-bold tracking-wide hover:text-teal-300 transition-colors"
                >
                  99624 42558
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-14 bg-teal-600/40" />
            <div className="sm:hidden w-full h-px bg-teal-600/40" />

            {/* Secondary Number */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-teal-700/60 border border-teal-500/40 flex items-center justify-center shadow-lg group-hover:bg-teal-600/60 group-hover:scale-110 transition-all duration-300">
                <Phone className="w-7 h-7 text-teal-300" />
              </div>
              <div className="text-left">
                <p className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-0.5">Alternate</p>
                <a
                  href="tel:7358440081"
                  className="text-white text-2xl md:text-3xl font-bold tracking-wide hover:text-teal-300 transition-colors"
                >
                  7358440081
                </a>
              </div>
            </div>
          </div>

          <p className="text-teal-200/70 text-base mb-8 max-w-md mx-auto">
            Our team is ready to assist you. Call us to schedule a service, get a free quote, or ask any questions.
          </p>

          {/* Call Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:9962442558"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-teal-500 hover:bg-teal-400 text-white font-bold text-lg transition-all duration-200 shadow-hero hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <Phone className="w-5 h-5" />
              Call 99624 42558
            </a>
            <a
              href="tel:7358440081"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-lg transition-all duration-200 border border-white/20 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Call 7358440081
            </a>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/35 transition-colors">
              <Clock className="w-6 h-6 text-teal-400" />
            </div>
            <h4 className="text-white font-bold mb-1.5">Available Daily</h4>
            <p className="text-teal-300/65 text-sm">7 days a week for your convenience</p>
          </div>
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/35 transition-colors">
              <CheckCircle className="w-6 h-6 text-teal-400" />
            </div>
            <h4 className="text-white font-bold mb-1.5">Trusted Service</h4>
            <p className="text-teal-300/65 text-sm">Professional, reliable, and thorough</p>
          </div>
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/35 transition-colors">
              <MapPin className="w-6 h-6 text-teal-400" />
            </div>
            <h4 className="text-white font-bold mb-1.5">Local Experts</h4>
            <p className="text-teal-300/65 text-sm">Serving your area with pride</p>
          </div>
        </div>

        {/* Quick Contact hint */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-800/50 border border-teal-600/30 text-teal-300 text-sm">
            <MessageCircle className="w-4 h-4" />
            <span>Call or message us anytime &mdash; we respond quickly!</span>
          </div>
        </div>
      </div>
    </section>
  );
}

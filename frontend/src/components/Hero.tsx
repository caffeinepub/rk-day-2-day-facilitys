import { useState, useEffect } from 'react';
import { Phone, ChevronDown, Star } from 'lucide-react';

const taglines = [
  'Spotless Homes, Happy Lives.',
  'Deep Clean. Fresh Start.',
  'Professional Care, Every Time.',
];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTaglineIndex((i) => (i + 1) % taglines.length);
        setVisible(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1440x600.png')" }}
      />

      {/* Multi-layer Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950/90 via-teal-900/80 to-teal-700/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-teal-300/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-400/15 border border-teal-300/25 text-teal-100 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
          Professional Cleaning Services
          <span className="flex items-center gap-0.5 ml-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-teal-300 text-teal-300" />
            ))}
          </span>
        </div>

        {/* Company Name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none tracking-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
          RK Day 2 Day
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-100 mt-1">
            Facilitys
          </span>
        </h1>

        {/* Animated Tagline */}
        <div className="h-10 flex items-center justify-center mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <p
            className={`text-xl sm:text-2xl md:text-3xl text-teal-100 font-light tracking-wide transition-all duration-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            {taglines[taglineIndex]}
          </p>
        </div>

        <p className="text-base sm:text-lg text-teal-200/75 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Expert housekeeping, deep cleaning, and grouting services — delivered with care, precision, and a satisfaction guarantee.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2.5 px-9 py-4 rounded-full bg-teal-500 hover:bg-teal-400 text-white font-bold text-lg transition-all duration-300 shadow-hero hover:shadow-card-hover hover:-translate-y-1 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Get a Free Quote
          </button>
          <button
            onClick={scrollToServices}
            className="flex items-center gap-2.5 px-9 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-lg transition-all duration-300 border border-white/25 backdrop-blur-sm hover:-translate-y-1"
          >
            Explore Services
          </button>
        </div>

        {/* Phone numbers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="tel:9962442558"
            className="flex items-center gap-2 text-teal-200/80 hover:text-teal-100 transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/40 transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold tracking-wide">99624 42558</span>
          </a>
          <div className="hidden sm:block w-px h-5 bg-teal-600/50" />
          <a
            href="tel:7358440081"
            className="flex items-center gap-2 text-teal-200/80 hover:text-teal-100 transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/40 transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold tracking-wide">7358440081</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}

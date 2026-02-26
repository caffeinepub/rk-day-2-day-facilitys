import { Shield, Clock, Award, ThumbsUp, Users, Sparkles } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '7', label: 'Days a Week' },
  { value: '100%', label: 'Satisfaction' },
  { value: '5-Star', label: 'Rated Service' },
];

const reasons = [
  {
    icon: Shield,
    title: 'Trusted & Reliable',
    description: 'Background-verified professionals you can trust in your home or office. We take your safety and privacy seriously.',
  },
  {
    icon: Award,
    title: 'Expert Professionals',
    description: 'Trained and experienced cleaning specialists who use the best techniques and eco-friendly products.',
  },
  {
    icon: Clock,
    title: 'Always On Time',
    description: "We respect your schedule. Our team arrives on time, every time, and completes work within the agreed timeframe.",
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: "Not happy with the results? We'll come back and make it right — no questions asked, no extra charge.",
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'A consistent team assigned to your property so you always get familiar, trusted faces at your door.',
  },
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'We use professional-grade equipment and premium cleaning solutions for results that truly shine.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/why-choose-us-bg.dim_1440x400.png')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950/95 via-teal-900/92 to-teal-800/90" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-teal-400/5 -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal-300/5 translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-teal-400/15 text-teal-200 text-sm font-bold tracking-widest uppercase mb-5 border border-teal-400/25 backdrop-blur-sm">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            The RK Difference
          </h2>
          <p className="text-teal-200/75 text-lg max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just clean &mdash; we care. Here&apos;s why hundreds of families and businesses trust RK Day 2 Day Facilitys.
          </p>
          <div className="mt-6 flex justify-center items-center gap-2">
            <div className="w-8 h-0.5 rounded-full bg-teal-500/50" />
            <div className="w-16 h-0.5 rounded-full bg-teal-400" />
            <div className="w-8 h-0.5 rounded-full bg-teal-500/50" />
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-teal-300 mb-1">{stat.value}</p>
              <p className="text-teal-200/70 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/15 hover:border-teal-400/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/35 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-teal-200 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-teal-200/65 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-teal-200/70 mb-6 text-lg">
            Experience the difference yourself &mdash; book a service today!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="tel:9962442558"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-teal-500 hover:bg-teal-400 text-white font-bold text-base transition-all duration-200 shadow-hero hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              Call: 99624 42558
            </a>
            <a
              href="tel:7358440081"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base transition-all duration-200 border border-white/20 hover:-translate-y-0.5"
            >
              Call: 7358440081
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

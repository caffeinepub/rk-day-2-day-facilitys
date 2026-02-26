import ServiceCard from './ServiceCard';

const services = [
  {
    icon: '/assets/generated/icon-housekeeping.dim_128x128.png',
    title: 'House Keeping',
    description:
      'Regular, reliable housekeeping to keep your home spotless and welcoming every day. We handle all the details so you can focus on what matters most.',
    features: [
      'Daily & weekly cleaning schedules',
      'Dusting, vacuuming & mopping',
      'Kitchen & bathroom sanitization',
      'Laundry & linen management',
      'Organized & tidy living spaces',
    ],
    highlight: false,
  },
  {
    icon: '/assets/generated/icon-deep-cleaning.dim_128x128.png',
    title: 'Deep Cleaning',
    description:
      'Thorough, top-to-bottom deep cleaning that reaches every corner. Perfect for move-ins, move-outs, post-renovation, or seasonal refreshes.',
    features: [
      'Behind appliances & furniture',
      'Grease & grime removal',
      'Window & blind cleaning',
      'Disinfection & deodorizing',
      'Ceiling fans & light fixtures',
    ],
    highlight: true,
  },
  {
    icon: '/assets/generated/icon-grouting.dim_128x128.png',
    title: 'Grouting Service',
    description:
      'Specialized grouting and tile restoration to bring your floors and walls back to life. We clean, repair, and reseal grout lines for a like-new finish.',
    features: [
      'Grout line deep cleaning',
      'Tile surface restoration',
      'Grout resealing & repair',
      'Bathroom & kitchen tiles',
      'Anti-mold treatment',
    ],
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/assets/generated/services-bg.dim_1440x400.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cream-50/90 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-bold tracking-widest uppercase mb-5 border border-teal-200">
            What We Offer
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-teal-900 mb-5 leading-tight">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Professional cleaning solutions tailored to your needs — delivered with expertise, care, and a personal touch that makes every space shine.
          </p>
          <div className="mt-6 flex justify-center items-center gap-2">
            <div className="w-8 h-1 rounded-full bg-teal-300" />
            <div className="w-16 h-1 rounded-full bg-teal-500" />
            <div className="w-8 h-1 rounded-full bg-teal-300" />
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            Not sure which service you need? We're happy to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="tel:9962442558"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-teal-600 text-white font-bold hover:bg-teal-500 transition-all duration-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
            >
              📞 Call: 99624 42558
            </a>
            <a
              href="tel:7358440081"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-teal-100 text-teal-800 font-bold hover:bg-teal-200 transition-all duration-200 border border-teal-200 hover:-translate-y-0.5"
            >
              📞 Call: 7358440081
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

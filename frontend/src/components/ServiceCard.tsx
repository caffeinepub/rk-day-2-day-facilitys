import { Phone } from 'lucide-react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export default function ServiceCard({ icon, title, description, features, highlight }: ServiceCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border flex flex-col overflow-hidden ${
        highlight
          ? 'border-teal-400 ring-2 ring-teal-400/20'
          : 'border-teal-50 hover:border-teal-200'
      }`}
    >
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl transition-all duration-300 ${
        highlight ? 'bg-gradient-to-r from-teal-400 to-teal-600' : 'bg-gradient-to-r from-teal-200 to-teal-400 opacity-0 group-hover:opacity-100'
      }`} />

      {/* Popular badge */}
      {highlight && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-teal-500 text-white text-xs font-bold uppercase tracking-wide shadow-sm">
          Popular
        </div>
      )}

      {/* Icon */}
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 overflow-hidden ${
        highlight ? 'bg-teal-100 group-hover:bg-teal-200' : 'bg-teal-50 group-hover:bg-teal-100'
      }`}>
        <img
          src={icon}
          alt={title}
          className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-bold text-teal-900 mb-3 group-hover:text-teal-700 transition-colors">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{description}</p>

      {/* Features */}
      <ul className="space-y-2.5 mb-7 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-teal-700">
            <span className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto pt-4 border-t border-teal-50 flex flex-col gap-2">
        <a
          href="tel:9962442558"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-md"
        >
          <Phone className="w-4 h-4" />
          99624 42558
        </a>
        <a
          href="tel:7358440081"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-700 font-semibold text-sm transition-all duration-200"
        >
          <Phone className="w-3.5 h-3.5" />
          7358440081
        </a>
      </div>
    </div>
  );
}

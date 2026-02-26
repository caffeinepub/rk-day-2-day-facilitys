import { Sparkles, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'rk-day2day-facilitys');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-teal-950 text-teal-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-sm">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-base leading-tight">RK Day 2 Day</p>
                <p className="text-teal-400 text-xs tracking-widest uppercase font-semibold">Facilitys</p>
              </div>
            </div>
            <p className="text-teal-400/75 text-sm leading-relaxed mb-5">
              Your trusted partner for professional cleaning and facility services. We bring cleanliness and comfort to every space.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Housekeeping', 'Deep Cleaning', 'Grouting'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-teal-800/50 text-teal-300 text-xs font-medium border border-teal-700/40 hover:bg-teal-700/50 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Our Services', id: 'services' },
                { label: 'Why Choose Us', id: 'why-choose-us' },
                { label: 'Contact Us', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-teal-400/75 hover:text-teal-200 text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-600 group-hover:bg-teal-400 transition-colors" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:9962442558"
                className="flex items-center gap-3 text-teal-300 hover:text-white transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-700/50 flex items-center justify-center group-hover:bg-teal-600/60 transition-colors">
                  <Phone className="w-4 h-4 text-teal-400 group-hover:text-teal-200 transition-colors" />
                </div>
                <div>
                  <p className="text-teal-500 text-xs uppercase tracking-wide font-semibold">Primary</p>
                  <span className="font-bold text-base">99624 42558</span>
                </div>
              </a>
              <a
                href="tel:7358440081"
                className="flex items-center gap-3 text-teal-300 hover:text-white transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-700/50 flex items-center justify-center group-hover:bg-teal-600/60 transition-colors">
                  <Phone className="w-4 h-4 text-teal-400 group-hover:text-teal-200 transition-colors" />
                </div>
                <div>
                  <p className="text-teal-500 text-xs uppercase tracking-wide font-semibold">Alternate</p>
                  <span className="font-bold text-base">7358440081</span>
                </div>
              </a>
            </div>
            <p className="text-teal-500/70 text-xs mt-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Available 7 days a week
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-teal-800/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-teal-500">
          <p>© {year} RK Day 2 Day Facilitys. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3.5 h-3.5 text-teal-400 fill-teal-400 mx-0.5" />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

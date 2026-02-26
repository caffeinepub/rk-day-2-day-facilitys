import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-choose-us' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/97 backdrop-blur-md shadow-card border-b border-teal-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-display font-bold text-base md:text-lg transition-colors duration-300 ${isScrolled ? 'text-teal-800' : 'text-white'}`}>
                RK Day 2 Day
              </span>
              <span className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-teal-500' : 'text-teal-200'}`}>
                Facilitys
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-all duration-200 hover:text-teal-400 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? 'text-teal-800' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:9962442558"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-500 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Us
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-200 ${isScrolled ? 'text-teal-800 hover:bg-teal-50' : 'text-white hover:bg-white/10'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`transition-all duration-300 ${menuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-teal-100 shadow-lg overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left px-4 py-3 rounded-lg text-teal-800 font-medium hover:bg-teal-50 hover:text-teal-600 transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <a
              href="tel:9962442558"
              className="px-4 py-3 rounded-full bg-teal-600 text-white text-center font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              📞 99624 42558
            </a>
            <a
              href="tel:7358440081"
              className="px-4 py-3 rounded-full bg-teal-100 text-teal-800 text-center font-semibold hover:bg-teal-200 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              📞 7358440081
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

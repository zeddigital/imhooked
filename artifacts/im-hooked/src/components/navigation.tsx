import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, Fish, Waves, Anchor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';

const charterLinks = [
  {
    label: 'Snapper Charters',
    href: '/charters/snapper',
    desc: 'Oct–Dec · The iconic Red run',
    icon: Fish,
  },
  {
    label: 'Mixed Bag Charters',
    href: '/charters/mixed-bag',
    desc: 'Jan–Sep · Snapper, Whiting & Squid',
    icon: Waves,
  },
  {
    label: 'Melbourne Tuna Charters',
    href: '/charters/tuna',
    desc: 'Bass Strait · Tuna, Mako & Kingfish',
    icon: Anchor,
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chartersOpen, setChartersOpen] = useState(false);
  const [mobileChartersOpen, setMobileChartersOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setChartersOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setChartersOpen(false);
    setMobileMenuOpen(false);
    setMobileChartersOpen(false);
  }, [location]);

  const isChartersActive = location === '/charters' || location.startsWith('/charters/');

  const topLinks = [
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-secondary/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="relative z-10" data-testid="link-home">
            <img
              src="/brand/logo-white.png"
              alt="I'm Hooked Fishing Charters"
              className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'}`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">

              {/* Charters dropdown */}
              <li ref={dropdownRef} className="relative">
                <button
                  onClick={() => setChartersOpen((o) => !o)}
                  onMouseEnter={() => setChartersOpen(true)}
                  className={`flex items-center gap-1.5 font-medium text-sm uppercase tracking-wider transition-colors relative pb-1 ${
                    isChartersActive ? 'text-primary' : 'text-white/80 hover:text-white'
                  }`}
                >
                  Charters
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${chartersOpen ? 'rotate-180' : ''}`}
                  />
                  {isChartersActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {chartersOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      onMouseLeave={() => setChartersOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-secondary border border-white/10 shadow-2xl z-50"
                    >
                      {/* Overview link */}
                      <Link
                        href="/charters"
                        className="flex items-center gap-3 px-5 py-3 border-b border-white/10 hover:bg-white/5 transition-colors group"
                      >
                        <span className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors">
                          All Charters Overview →
                        </span>
                      </Link>

                      {charterLinks.map(({ label, href, desc, icon: Icon }) => {
                        const isActive = location === href;
                        return (
                          <Link
                            key={href}
                            href={href}
                            className={`flex items-start gap-4 px-5 py-4 transition-colors group border-b border-white/5 last:border-0 ${
                              isActive ? 'bg-primary/10' : 'hover:bg-white/5'
                            }`}
                          >
                            <div className={`mt-0.5 w-8 h-8 flex items-center justify-center shrink-0 ${isActive ? 'bg-primary' : 'bg-white/10 group-hover:bg-primary/80'} transition-colors`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className={`font-bold text-sm uppercase tracking-wide ${isActive ? 'text-primary' : 'text-white group-hover:text-primary'} transition-colors`}>
                                {label}
                              </p>
                              <p className="text-white/50 text-xs mt-0.5 font-medium">{desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {topLinks.map((link) => {
                const isActive = location === link.href || (link.href !== '/' && location.startsWith(link.href));
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`font-medium text-sm uppercase tracking-wider transition-colors relative pb-1 ${
                        isActive ? 'text-primary' : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4 border-l border-white/20 pl-6">
              <a href="tel:0418769384" className="text-white flex items-center gap-2 font-display font-semibold hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                0418 769 384
              </a>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold tracking-wide uppercase px-8">
                <a href="https://imhookedfishingcharters.com.au/fishing-charter-bookings/#bookings" target="_blank" rel="noreferrer" data-testid="button-book-now">
                  Book Now
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white relative z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-secondary/97 backdrop-blur-xl flex flex-col justify-center items-center p-6 overflow-y-auto"
          >
            <ul className="flex flex-col items-center gap-2 w-full text-center max-w-sm">

              {/* Charters section */}
              <motion.li
                className="w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <button
                  onClick={() => setMobileChartersOpen((o) => !o)}
                  className={`flex items-center justify-center gap-2 text-2xl font-display font-bold uppercase tracking-wide transition-colors w-full py-3 ${
                    isChartersActive ? 'text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  Charters
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileChartersOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileChartersOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white/5 border border-white/10 mb-2">
                        <Link
                          href="/charters"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-3 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-primary transition-colors border-b border-white/10"
                        >
                          All Charters Overview
                        </Link>
                        {charterLinks.map(({ label, href, desc }) => (
                          <Link
                            key={href}
                            href={href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 text-left border-b border-white/5 last:border-0 transition-colors ${
                              location === href ? 'bg-primary/10' : 'hover:bg-white/5'
                            }`}
                          >
                            <p className={`font-bold text-sm uppercase tracking-wide ${location === href ? 'text-primary' : 'text-white'}`}>{label}</p>
                            <p className="text-white/40 text-xs mt-0.5">{desc}</p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>

              {topLinks.map((link, i) => {
                const isActive = location === link.href || (link.href !== '/' && location.startsWith(link.href));
                return (
                  <motion.li
                    key={link.label}
                    className="w-full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (i + 1) * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-display font-bold uppercase tracking-wide transition-colors block py-3 ${
                        isActive ? 'text-primary' : 'text-white hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}

              <motion.div
                className="mt-6 flex flex-col items-center gap-4 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <a href="tel:0418769384" className="text-white flex items-center gap-3 text-xl font-display font-bold hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  0418 769 384
                </a>
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-14 uppercase font-bold">
                  <a href="https://imhookedfishingcharters.com.au/fishing-charter-bookings/#bookings" target="_blank" rel="noreferrer">
                    Book Your Charter
                  </a>
                </Button>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

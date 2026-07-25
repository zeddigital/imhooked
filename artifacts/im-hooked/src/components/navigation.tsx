import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Charters', href: '/charters' },
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
              {navLinks.map((link) => {
                const isActive = location === link.href || (link.href !== '/' && location.startsWith(link.href));
                return (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className={`font-medium text-sm uppercase tracking-wider transition-colors relative pb-1 ${isActive ? 'text-primary' : 'text-white/80 hover:text-white'}`}
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
            className="fixed inset-0 z-40 bg-secondary/95 backdrop-blur-xl flex flex-col justify-center items-center p-6"
          >
            <ul className="flex flex-col items-center gap-8 w-full text-center">
              {navLinks.map((link) => {
                const isActive = location === link.href || (link.href !== '/' && location.startsWith(link.href));
                return (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-3xl font-display font-bold uppercase tracking-wide transition-colors block ${isActive ? 'text-primary' : 'text-white hover:text-primary'}`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.div 
                className="mt-8 flex flex-col items-center gap-6 w-full max-w-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a href="tel:0418769384" className="text-white flex items-center gap-3 text-2xl font-display font-bold hover:text-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                  0418 769 384
                </a>
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white text-xl h-16 uppercase font-bold">
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

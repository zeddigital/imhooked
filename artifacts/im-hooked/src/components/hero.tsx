import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImg from '@assets/generated_images/hero-ocean.jpg';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-secondary flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10 opacity-90" />
        <img 
          src={heroImg} 
          alt="Dark ocean waves at dawn" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-white text-sm font-semibold tracking-widest uppercase">Melbourne's Friendliest Charter</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.1] tracking-tight text-balance mb-8">
            EXPERIENCE <span className="text-primary">RAW OCEAN</span> ADVENTURE
          </h1>
          
          <p className="text-lg md:text-2xl text-white/80 font-medium max-w-2xl text-balance mb-12">
            Join Mal for an unforgettable day on the water. 40 years of local knowledge, serious fish, and zero ego.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto h-16 px-10 bg-primary hover:bg-primary/90 text-white text-lg font-bold tracking-wide uppercase group">
              <a href="https://imhookedfishingcharters.com.au/fishing-charter-bookings/#bookings" target="_blank" rel="noreferrer">
                Book Your Trip
                <motion.span 
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >→</motion.span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-16 px-10 border-white/30 text-white hover:bg-white hover:text-secondary text-lg font-bold tracking-wide uppercase backdrop-blur-sm transition-all duration-300">
              <a href="#charters">
                View Charters
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll to Explore</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
      
      <div className="noise-bg" />
    </section>
  );
}

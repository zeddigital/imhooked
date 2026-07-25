import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Charters() {
  const charters = [
    {
      title: "Snapper & Whiting",
      subtitle: "Port Phillip & Western Port Bay",
      price: "$200",
      unit: "per person",
      duration: "Up to 5 hours",
      pax: "Min 5, Max 8 people",
      target: ["Snapper (Oct–Dec)", "King George Whiting", "Flathead", "Garfish", "Squid"],
      featured: false,
    },
    {
      title: "Offshore Bass Strait",
      subtitle: "The Ultimate Adventure",
      price: "From $300",
      unit: "per person",
      duration: "Up to 8 hours",
      pax: "Max 8 people",
      target: ["Kingfish", "Southern Bluefin Tuna", "Mako Shark", "Gummy Shark", "Wrasse"],
      featured: true,
    }
  ];

  return (
    <section id="charters" className="py-24 md:py-32 bg-secondary text-white relative">
      <div className="absolute inset-0 bg-[url('@assets/generated_images/reeling-action.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="noise-bg" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black mb-6 uppercase tracking-tight"
          >
            Choose Your <span className="text-primary">Weapon</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/70"
          >
            Whether you want a fun day in the bay or an adrenaline-pumping offshore expedition, we have the gear, the boat, and the know-how.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {charters.map((charter, i) => (
            <motion.div
              key={charter.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative flex flex-col p-8 md:p-10 transition-all duration-300 ${
                charter.featured 
                  ? 'bg-primary/5 border-2 border-primary' 
                  : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {charter.featured && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 border-b border-white/10 pb-8">
                <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-2">{charter.title}</h3>
                <p className="text-primary font-semibold tracking-wider text-sm uppercase">{charter.subtitle}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-display font-black">{charter.price}</span>
                  <span className="text-white/60 font-medium">{charter.unit}</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-10 flex-grow">
                <div className="flex items-center gap-3 text-white/80">
                  <Info className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-semibold">{charter.duration} • {charter.pax}</span>
                </div>
                
                <div className="mt-4 space-y-3">
                  <p className="text-sm font-bold tracking-wider text-white/50 uppercase">Target Species:</p>
                  {charter.target.map((t, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-medium text-white/90">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button asChild size="lg" className={`w-full h-14 text-lg font-bold tracking-widest uppercase ${
                charter.featured 
                  ? 'bg-primary hover:bg-white hover:text-primary text-white' 
                  : 'bg-white text-secondary hover:bg-primary hover:text-white'
              }`}>
                <a href="https://imhookedfishingcharters.com.au/fishing-charter-bookings/#bookings" target="_blank" rel="noreferrer">
                  Book This Charter
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-white/50 text-sm max-w-2xl mx-auto">
          <p>All bait and tackle is provided. Please bring appropriate clothing for the conditions, an esky for your catch, food and drinks (no glass), and a valid Victorian Recreational Fishing Licence.</p>
        </div>
      </div>
    </section>
  );
}

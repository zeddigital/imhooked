import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Users, Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import heroImg from '@assets/generated_images/bay-golden-hour-aerial.jpg';
import snapperImg from '@assets/generated_images/snapper-sunrise.jpg';
import westernPortImg from '@assets/generated_images/western-port-calm.jpg';

export default function BayCharterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const species = [
    { name: "Snapper", desc: "The crown jewel of the bay. Season highlights from Oct–Dec.", image: snapperImg },
    { name: "King George Whiting", desc: "A prized table fish caught year-round in the grass beds.", image: westernPortImg },
    { name: "Flathead", desc: "Reliable bottom-dwellers that provide great sport and eating.", image: null },
    { name: "Garfish & Squid", desc: "Excellent eating and highly sought after by local anglers.", image: null },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-0">
        
        {/* Page Hero */}
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-secondary flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-100" />
            <img 
              src={heroImg} 
              alt="Bay fishing at sunrise" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="container relative z-20 mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 bg-primary/90 text-white px-4 py-1.5 font-bold uppercase tracking-widest text-sm"
            >
              Port Phillip & Western Port Bay
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black text-white leading-tight tracking-tight uppercase"
            >
              BAY FISHING <span className="text-primary">CHARTERS</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-3xl md:text-4xl font-display font-bold text-white"
            >
              $200 <span className="text-xl text-white/70 font-sans font-medium">per person</span>
            </motion.div>
          </div>
        </section>

        {/* Back Link */}
        <div className="bg-background border-b border-border">
          <div className="container mx-auto px-6 py-4">
            <Link href="/charters" className="inline-flex items-center gap-2 text-secondary/60 hover:text-primary font-bold uppercase tracking-widest text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Charters
            </Link>
          </div>
        </div>

        {/* Charter Overview */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-display font-black text-secondary uppercase tracking-tight mb-8">
                  The Best of <span className="text-primary">Melbourne's Bays</span>
                </h2>
                
                <div className="space-y-6 text-lg text-secondary/80 font-medium mb-10">
                  <p>
                    Whether you're a seasoned angler chasing that elusive 10kg "Red" (Snapper) or a family looking for a fun day pulling in Whiting and Flathead, our bay charters offer something for everyone.
                  </p>
                  <p>
                    We operate across both Port Phillip Bay and Western Port Bay. Mal decides the launch location a few days prior based on weather, tides, and most importantly — where the fish are biting.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-6 bg-white border border-border">
                    <Clock className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold uppercase tracking-wider text-secondary mb-1">Duration</h4>
                      <p className="text-secondary/70 font-medium">Up to 5 hours on the water</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-white border border-border">
                    <Users className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold uppercase tracking-wider text-secondary mb-1">Capacity</h4>
                      <p className="text-secondary/70 font-medium">Min 5, Max 8 passengers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-white border border-border">
                    <Calendar className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold uppercase tracking-wider text-secondary mb-1">Season</h4>
                      <p className="text-secondary/70 font-medium">Year-round (Target species vary)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-white border border-border">
                    <MapPin className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold uppercase tracking-wider text-secondary mb-1">Departure</h4>
                      <p className="text-secondary/70 font-medium">Confirmed upon booking</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square md:aspect-[4/3] bg-secondary"
              >
                <img 
                  src={heroImg} 
                  alt="Bay fishing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Target Species */}
        <section className="py-24 bg-white border-y border-border">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-black text-secondary uppercase tracking-tight mb-4">
                Target <span className="text-primary">Species</span>
              </h2>
              <p className="text-secondary/60 font-medium text-lg max-w-2xl mx-auto">
                Melbourne's bays are teeming with life. Here's what we're usually hunting.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {species.map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background border border-border flex flex-col h-full group"
                >
                  <div className="h-48 bg-secondary relative overflow-hidden">
                    {s.image ? (
                      <img src={s.image} alt={s.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full bg-secondary flex items-center justify-center text-white/20">
                        <span className="font-display font-bold uppercase tracking-widest">Image Coming Soon</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-display font-bold uppercase tracking-tight text-secondary mb-3">{s.name}</h3>
                    <p className="text-secondary/70 font-medium leading-relaxed mt-auto">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Locations & Calendar */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-12 gap-12">
              
              <div className="lg:col-span-7 space-y-12">
                <div className="mb-10">
                  <h2 className="text-4xl font-display font-black text-secondary uppercase tracking-tight mb-4">
                    The <span className="text-primary">Locations</span>
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-white p-8 border-l-4 border-primary shadow-sm">
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-secondary mb-3">Port Phillip Bay</h3>
                    <p className="text-secondary/70 font-medium">Victoria's largest and most popular fishing ground. Famous for its snapper run in spring, it also produces excellent flathead, squid, and whiting year-round.</p>
                  </div>
                  <div className="bg-white p-8 border-l-4 border-secondary shadow-sm">
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-secondary mb-3">Western Port Bay</h3>
                    <p className="text-secondary/70 font-medium">Featuring two large islands (French and Phillip) and three tidal arms. Known for its deeper channels, faster currents, and exceptional King George Whiting and Gummy Shark fishing.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-secondary text-white p-10 h-full relative overflow-hidden">
                  <div className="noise-bg" />
                  <div className="relative z-10">
                    <h3 className="text-3xl font-display font-black uppercase tracking-tight mb-8">Season Highlight</h3>
                    
                    <div className="space-y-6">
                      <div className="pb-6 border-b border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-xl uppercase tracking-wider">Snapper Season</h4>
                          <span className="text-primary font-bold">PEAK</span>
                        </div>
                        <p className="text-white/70 font-medium mb-4">The famous Melbourne "Red" run brings the biggest fish into the bay.</p>
                        <div className="flex gap-2">
                          <span className="bg-primary/20 text-primary px-3 py-1 font-bold text-sm uppercase">Oct</span>
                          <span className="bg-primary px-3 py-1 text-white font-bold text-sm uppercase">Nov</span>
                          <span className="bg-primary/20 text-primary px-3 py-1 font-bold text-sm uppercase">Dec</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-xl uppercase tracking-wider mb-2">Whiting & Squid</h4>
                        <p className="text-white/70 font-medium mb-4">Reliable catches throughout the year, peaking in the warmer months.</p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="bg-white/10 px-3 py-1 font-bold text-sm uppercase">Jan</span>
                          <span className="bg-white/10 px-3 py-1 font-bold text-sm uppercase">Feb</span>
                          <span className="bg-white/10 px-3 py-1 font-bold text-sm uppercase">Mar</span>
                          <span className="bg-white/10 px-3 py-1 font-bold text-sm uppercase">Apr</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pricing & Booking */}
        <section className="py-24 bg-white border-t border-border">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <h2 className="text-4xl font-display font-black text-secondary uppercase tracking-tight mb-8">Ready to Fish?</h2>
            
            <div className="bg-background border border-border p-10 mb-10 max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left w-full md:w-auto">
                <p className="text-secondary/60 font-bold uppercase tracking-widest text-sm mb-2">Bay Charter</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-display font-black text-secondary">$200</span>
                  <span className="text-secondary/70 font-medium">per person</span>
                </div>
                <ul className="mt-4 space-y-2 text-secondary/80 font-medium">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> All bait & tackle included</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Fish cleaned & bagged</li>
                </ul>
              </div>
              <Button asChild size="lg" className="w-full md:w-auto h-16 px-12 bg-primary hover:bg-secondary text-white text-xl font-bold uppercase tracking-widest">
                <a href="https://imhookedfishingcharters.com.au/fishing-charter-bookings/#bookings" target="_blank" rel="noreferrer">
                  Book Now
                </a>
              </Button>
            </div>
            
            <p className="text-secondary/50 font-medium">Minimum 5 people required for a charter to proceed. Maximum 8 people.</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

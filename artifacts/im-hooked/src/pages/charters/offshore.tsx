import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Users, Anchor, Target, ArrowLeft } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import heroImg from '@assets/generated_images/bass-strait-storm.jpg';
import tunaImg from '@assets/generated_images/massive-tuna.jpg';
import makoImg from '@assets/generated_images/mako-shark.jpg';

export default function OffshoreCharterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const species = [
    { name: "Southern Bluefin Tuna", desc: "A true offshore game fish offering incredible runs and fights.", image: tunaImg },
    { name: "Mako Shark", desc: "Fast, aggressive, and known for spectacular aerial displays when hooked.", image: makoImg },
    { name: "Kingfish", desc: "Hard-fighting predators that put your gear and stamina to the test.", image: null },
    { name: "Gummy Shark", desc: "Exceptional table fish targeted on the offshore reefs.", image: null },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-0">
        
        {/* Page Hero */}
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-secondary flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-secondary/70 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-100" />
            <img 
              src={heroImg} 
              alt="Bass Strait offshore fishing" 
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
              The Ultimate Adventure
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black text-white leading-tight tracking-tight uppercase"
            >
              OFFSHORE BASS STRAIT <span className="text-primary">CHARTERS</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-3xl md:text-4xl font-display font-bold text-white"
            >
              From $300 <span className="text-xl text-white/70 font-sans font-medium">per person</span>
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
                  Conquer <span className="text-primary">The Strait</span>
                </h2>
                
                <div className="space-y-6 text-lg text-secondary/80 font-medium mb-10">
                  <p>
                    Bass Strait separates Victoria from Tasmania. It's a notoriously wild stretch of water, but when conditions align, it offers some of the most spectacular game fishing in the world.
                  </p>
                  <p>
                    This isn't your casual bay cruise. Heading offshore means early starts, big swells, and serious predators. We target Tuna, Sharks, and Kingfish using heavy-duty gear.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-6 bg-white border border-border">
                    <Clock className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold uppercase tracking-wider text-secondary mb-1">Duration</h4>
                      <p className="text-secondary/70 font-medium">Up to 8 hours offshore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-white border border-border">
                    <Users className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold uppercase tracking-wider text-secondary mb-1">Capacity</h4>
                      <p className="text-secondary/70 font-medium">Strictly max 8 passengers</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] bg-secondary"
              >
                <img 
                  src={heroImg} 
                  alt="Bass Strait" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/80 font-display text-xl font-bold italic">"Max 240km wide, 50–70m deep. Named after explorer George Bass. It demands respect."</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Target Species */}
        <section className="py-24 bg-white border-y border-border">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-black text-secondary uppercase tracking-tight mb-4">
                The <span className="text-primary">Monsters</span>
              </h2>
              <p className="text-secondary/60 font-medium text-lg max-w-2xl mx-auto">
                Offshore fishing requires heavy tackle and serious stamina. These fish fight back.
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

        {/* The Experience & Boat */}
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
          <div className="noise-bg" />
          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              
              <div className="space-y-8">
                <h2 className="text-4xl font-display font-black uppercase tracking-tight">The <span className="text-primary">Experience</span></h2>
                <div className="space-y-6 text-white/80 text-lg font-medium">
                  <p>It starts with an early morning departure, the hum of twin motors, and running out through the heads as the sun breaches the horizon.</p>
                  <p>Once you hit Bass Strait, the swell changes. The water turns a deep, dark blue. The sounder starts painting a picture of the reef systems below. This is where adrenaline takes over.</p>
                  <p>When the reel screams, it's all hands on deck. Offshore fishing is team work, patience, and raw power. Mal will guide you through the fight, but you've got to bring the muscle.</p>
                </div>
              </div>

              <div>
                <div className="bg-white/5 border border-white/10 p-10 h-full">
                  <Anchor className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-3xl font-display font-black uppercase tracking-tight mb-4">The Vessel</h3>
                  <p className="text-white/80 font-medium mb-8">
                    You're heading into Bass Strait on a custom-built Seaquest 9m. She's built exactly for these conditions.
                  </p>
                  <ul className="space-y-4 font-bold uppercase tracking-wider text-sm">
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Deep V Hull for offshore swell</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Twin High-Horsepower Motors</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Advanced Sonar & GPS</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Full Cabin Shelter & Toilet</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pricing & Booking */}
        <section className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <h2 className="text-4xl font-display font-black text-secondary uppercase tracking-tight mb-8">Ready for the Strait?</h2>
            
            <div className="bg-white border-2 border-primary shadow-xl p-10 mb-10 max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              
              <div className="text-left w-full md:w-auto">
                <p className="text-secondary/60 font-bold uppercase tracking-widest text-sm mb-2">Offshore Charter</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-display font-black text-secondary">From $300</span>
                  <span className="text-secondary/70 font-medium">per person</span>
                </div>
                <ul className="mt-4 space-y-2 text-secondary/80 font-medium">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Premium heavy tackle included</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Up to 8 hours on water</li>
                </ul>
              </div>
              <Button asChild size="lg" className="w-full md:w-auto h-16 px-12 bg-primary hover:bg-secondary text-white text-xl font-bold uppercase tracking-widest">
                <a href="https://imhookedfishingcharters.com.au/fishing-charter-bookings/#bookings" target="_blank" rel="noreferrer">
                  Book Now
                </a>
              </Button>
            </div>
            
            <p className="text-secondary/50 font-medium max-w-lg mx-auto">Offshore charters are strictly weather dependent. Mal makes the final call on safety 24-48 hours prior to departure.</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

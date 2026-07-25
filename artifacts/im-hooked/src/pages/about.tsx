import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Anchor, Users, ShieldCheck, Star } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

import heroImg from '@assets/generated_images/bay-golden-hour.jpg';
import malPortrait from '@assets/generated_images/captain-mal.jpg';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-0">
        
        {/* Page Hero */}
        <section className="relative h-[60vh] w-full overflow-hidden bg-secondary flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-secondary/50 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-100" />
            <img 
              src={heroImg} 
              alt="Warm golden light over water" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="container relative z-20 mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-display font-black text-white leading-tight tracking-tight uppercase"
            >
              THE MAN BEHIND <br/><span className="text-primary">THE CHARTER</span>
            </motion.h1>
          </div>
        </section>

        {/* The Story */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
              >
                <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4" />
                <div className="relative aspect-[4/5] bg-secondary border border-border overflow-hidden">
                  <img src={malPortrait} alt="Captain Mal smiling" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-7 space-y-8"
              >
                <div className="mb-10">
                  <h2 className="text-4xl font-display font-black text-secondary uppercase tracking-tight mb-4">
                    G'day, I'm <span className="text-primary">Mal</span>
                  </h2>
                  <div className="w-20 h-1.5 bg-primary" />
                </div>

                <div className="space-y-6 text-lg text-secondary/80 font-medium leading-relaxed">
                  <p>
                    I didn't start I'm Hooked Fishing Charters to build a massive corporate fleet. I started it because I've spent over 40 years learning the tides, reefs, and secrets of Melbourne's waters, and there's nothing I love more than seeing the smile on someone's face when they land a personal best.
                  </p>
                  <p>
                    Whether we're hunting Big Red in Port Phillip Bay, stalking Whiting in Western Port, or heading offshore into Bass Strait for Tuna, my philosophy is simple: it's your day, and my job is to make it unforgettable.
                  </p>
                  <p>
                    I've seen charters that treat guests like numbers on a manifest. That's not how we do things here. When you step on my boat, you're fishing with a mate. I'll bait your hook if you need it, give you the best spot on the deck, and share the local knowledge that only decades on the water can teach you.
                  </p>
                  <p>
                    It's not about the money. It's about the experience, the banter, and the thrill of the strike.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-border">
                  <div className="flex flex-col gap-1">
                    <span className="text-4xl font-display font-black text-secondary">40+</span>
                    <span className="text-xs font-bold tracking-widest uppercase text-secondary/60">Years Exp</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-4xl font-display font-black text-secondary">1000s</span>
                    <span className="text-xs font-bold tracking-widest uppercase text-secondary/60">Charters Run</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-4xl font-display font-black text-secondary">5<Star className="inline w-6 h-6 text-primary mb-2" fill="currentColor"/></span>
                    <span className="text-xs font-bold tracking-widest uppercase text-secondary/60">Reviewed</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-4xl font-display font-black text-secondary">100%</span>
                    <span className="text-xs font-bold tracking-widest uppercase text-secondary/60">Local Owned</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
          <div className="noise-bg" />
          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-black uppercase tracking-tight">The <span className="text-primary">Philosophy</span></h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors"
              >
                <ShieldCheck className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-4">Safety First</h3>
                <p className="text-white/70 font-medium">Your family's safety is my absolute priority. I constantly monitor the weather, maintain top-tier safety gear, and will never take risks. If it's not safe, we don't go.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors"
              >
                <Users className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-4">Everyone Welcome</h3>
                <p className="text-white/70 font-medium">From first-timers who have never held a rod, to seasoned veterans looking for a new PB. I meet you at your skill level with patience and zero ego.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors"
              >
                <Anchor className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-4">Tight Lines</h3>
                <p className="text-white/70 font-medium">I don't believe in "the one that got away". I use premium gear, fresh bait, and my 40 years of marks to put you right on top of the fish.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-24 bg-white border-y border-border">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-center text-4xl font-display font-black text-secondary uppercase tracking-tight mb-16">
              What The <span className="text-primary">Boys Say</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Dave T.", text: "Best charter in Melbourne hands down. Mal knows his stuff and goes out of his way to make sure everyone catches fish. No arrogance, just a great bloke and a top day out." },
                { name: "Steve R.", text: "Took my 12 year old son out for his first trip. Mal was incredibly patient, taught him how to cast, and put us right onto a school of snapper. Memories for a lifetime." },
                { name: "Mick J.", text: "We went offshore for Tuna. Mal handled the boat perfectly in the swell and when the reels went off, it was absolute chaos in the best way possible. Highly recommend." }
              ].map((review, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background border border-border p-8 relative"
                >
                  <div className="flex text-primary mb-4">
                    <Star fill="currentColor" className="w-5 h-5" />
                    <Star fill="currentColor" className="w-5 h-5" />
                    <Star fill="currentColor" className="w-5 h-5" />
                    <Star fill="currentColor" className="w-5 h-5" />
                    <Star fill="currentColor" className="w-5 h-5" />
                  </div>
                  <p className="text-secondary/80 font-medium mb-6">"{review.text}"</p>
                  <p className="font-display font-bold uppercase tracking-widest text-secondary">— {review.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-24 bg-background text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-black text-secondary uppercase tracking-tight mb-8">Ready to fish with Mal?</h2>
            <Button asChild size="lg" className="h-16 px-12 bg-primary hover:bg-secondary text-white text-xl font-bold uppercase tracking-widest">
              <a href="https://imhookedfishingcharters.com.au/fishing-charter-bookings/#bookings" target="_blank" rel="noreferrer">
                Book Your Spot
              </a>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

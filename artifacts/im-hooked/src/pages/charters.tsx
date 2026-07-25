import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Check, Anchor, Fish, Ship, Shield, Navigation as NavigationIcon, LifeBuoy } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import heroImg from '@assets/generated_images/hero-ocean.jpg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ChartersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const inclusions = [
    { title: "Bait & Tackle", desc: "Top quality gear and fresh bait provided for all target species.", icon: Fish },
    { title: "Safety Gear", desc: "Life jackets and comprehensive safety equipment on board.", icon: LifeBuoy },
    { title: "Expert Guidance", desc: "Mal provides coaching for beginners and tips for pros.", icon: NavigationIcon },
    { title: "Fish Cleaning", desc: "Your catch is cleaned, filleted, and bagged ready for the pan.", icon: Anchor },
    { title: "Comfortable Vessel", desc: "Weather protection and marine toilet available.", icon: Ship },
    { title: "Local Knowledge", desc: "40+ years of experience finding the best spots.", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-0">
        
        {/* Page Hero */}
        <section className="relative h-[60vh] w-full overflow-hidden bg-secondary flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-secondary/70 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-100" />
            <img 
              src={heroImg} 
              alt="Dark ocean waves" 
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
              FIND YOUR <span className="text-primary">PERFECT CHARTER</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest">
                <a href="https://imhookedfishingcharters.com.au/fishing-charter-bookings/#bookings" target="_blank" rel="noreferrer">
                  Book Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 border-white/30 text-white hover:bg-white hover:text-secondary font-bold uppercase tracking-widest backdrop-blur-sm">
                <a href="#options">
                  Explore Options
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Charter Cards */}
        <section id="options" className="py-24 bg-background relative z-10 -mt-10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Bay Charters */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-border shadow-xl flex flex-col group hover:border-primary/50 transition-colors"
              >
                <div className="p-8 md:p-10 border-b border-border">
                  <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-secondary mb-2">Bay Charters</h2>
                  <p className="text-primary font-semibold tracking-wider text-sm uppercase">Port Phillip & Western Port</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-5xl font-display font-black text-secondary">$200</span>
                    <span className="text-secondary/60 font-medium">per person</span>
                  </div>
                </div>
                
                <div className="p-8 md:p-10 flex flex-col gap-6 flex-grow">
                  <div className="space-y-2 text-secondary/80 font-medium">
                    <p><strong>Duration:</strong> Up to 5 hours</p>
                    <p><strong>Capacity:</strong> Min 5, Max 8 people</p>
                  </div>
                  
                  <div className="space-y-3 mt-2">
                    <p className="text-sm font-bold tracking-wider text-secondary/50 uppercase">Top Species:</p>
                    {["Snapper (Oct–Dec)", "King George Whiting", "Flathead", "Squid"].map((t, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="font-medium text-secondary/90">{t}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-8 flex gap-4">
                    <Button asChild variant="outline" className="flex-1 h-14 border-secondary/20 hover:bg-secondary hover:text-white uppercase font-bold tracking-widest">
                      <Link href="/charters/bay">Learn More</Link>
                    </Button>
                    <Button asChild className="flex-1 h-14 bg-primary hover:bg-primary/90 text-white uppercase font-bold tracking-widest">
                      <a href="https://imhookedfishingcharters.com.au/fishing-charter-bookings/#bookings" target="_blank" rel="noreferrer">Book Now</a>
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Offshore Charters */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-secondary text-white border-2 border-primary shadow-2xl flex flex-col relative"
              >
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 uppercase tracking-widest">
                  The Ultimate Adventure
                </div>

                <div className="p-8 md:p-10 border-b border-white/10">
                  <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-2">Offshore Charters</h2>
                  <p className="text-primary font-semibold tracking-wider text-sm uppercase">Bass Strait</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-5xl font-display font-black text-white">From $300</span>
                    <span className="text-white/60 font-medium">per person</span>
                  </div>
                </div>
                
                <div className="p-8 md:p-10 flex flex-col gap-6 flex-grow">
                  <div className="space-y-2 text-white/80 font-medium">
                    <p><strong>Duration:</strong> Up to 8 hours</p>
                    <p><strong>Capacity:</strong> Max 8 people</p>
                  </div>
                  
                  <div className="space-y-3 mt-2">
                    <p className="text-sm font-bold tracking-wider text-white/50 uppercase">Top Species:</p>
                    {["Kingfish", "Southern Bluefin Tuna", "Mako Shark", "Gummy Shark"].map((t, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="font-medium text-white/90">{t}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-8 flex gap-4">
                    <Button asChild variant="outline" className="flex-1 h-14 border-white/30 text-white hover:bg-white hover:text-secondary uppercase font-bold tracking-widest">
                      <Link href="/charters/offshore">Learn More</Link>
                    </Button>
                    <Button asChild className="flex-1 h-14 bg-primary hover:bg-white hover:text-primary text-white uppercase font-bold tracking-widest">
                      <a href="https://imhookedfishingcharters.com.au/fishing-charter-bookings/#bookings" target="_blank" rel="noreferrer">Book Now</a>
                    </Button>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-24 bg-white border-y border-border">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-black text-secondary uppercase tracking-tight mb-4">
                What's <span className="text-primary">Included</span>
              </h2>
              <p className="text-secondary/60 font-medium text-lg max-w-2xl mx-auto">
                We provide almost everything you need for a successful day on the water. Just bring yourself and your fishing licence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {inclusions.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-background border border-border"
                >
                  <item.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-xl font-display font-bold text-secondary uppercase tracking-wide mb-3">{item.title}</h3>
                  <p className="text-secondary/70 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Bring */}
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
          <div className="noise-bg" />
          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight mb-10 text-center">
                What to <span className="text-primary">Bring</span>
              </h2>
              
              <ul className="grid md:grid-cols-2 gap-6 text-lg font-medium text-white/80">
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>Appropriate clothing for the conditions (layers are best)</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>An esky (cooler) to take your catch home</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>Your own food and drinks (strictly no glass on board)</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>A valid Victorian Recreational Fishing Licence</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-black text-secondary uppercase tracking-tight">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-display text-xl text-secondary hover:text-primary transition-colors">Do I need a fishing licence?</AccordionTrigger>
                <AccordionContent className="text-base text-secondary/70 font-medium">
                  Yes, a Victorian Recreational Fishing Licence is required for all anglers between 18 and 70 years of age, unless you are exempt. You can purchase one online before your trip.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-display text-xl text-secondary hover:text-primary transition-colors">What do I need to bring?</AccordionTrigger>
                <AccordionContent className="text-base text-secondary/70 font-medium">
                  Bring weather-appropriate clothing, an esky for your catch, your own food and drinks (no glass bottles allowed), and your fishing licence. We provide all the fishing gear and safety equipment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-display text-xl text-secondary hover:text-primary transition-colors">Is bait provided?</AccordionTrigger>
                <AccordionContent className="text-base text-secondary/70 font-medium">
                  Yes! All premium bait, quality tackle, and rods are provided for your charter.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-display text-xl text-secondary hover:text-primary transition-colors">How many people can come?</AccordionTrigger>
                <AccordionContent className="text-base text-secondary/70 font-medium">
                  We need a minimum of 5 people to run a Bay charter, and we can take a maximum of 8 people per trip to ensure everyone has plenty of fishing room.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-display text-xl text-secondary hover:text-primary transition-colors">What happens in bad weather?</AccordionTrigger>
                <AccordionContent className="text-base text-secondary/70 font-medium">
                  Safety is paramount. Mal monitors the weather conditions closely. If the weather is deemed unsafe, we will reschedule your charter to another suitable date.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-display text-xl text-secondary hover:text-primary transition-colors">Can beginners come?</AccordionTrigger>
                <AccordionContent className="text-base text-secondary/70 font-medium">
                  Absolutely! Mal is more than happy to help beginners learn the ropes, set up their gear, and teach them how to land a great catch.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left font-display text-xl text-secondary hover:text-primary transition-colors">Where do we depart from?</AccordionTrigger>
                <AccordionContent className="text-base text-secondary/70 font-medium">
                  We depart from various locations across Port Phillip Bay and Western Port Bay depending on the weather and where the fish are biting. Your exact departure location will be confirmed when you book.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left font-display text-xl text-secondary hover:text-primary transition-colors">Can we keep the fish?</AccordionTrigger>
                <AccordionContent className="text-base text-secondary/70 font-medium">
                  Yes, whatever legal size fish you catch is yours to keep. We even clean, fillet, and bag them for you at the end of the trip so they're ready for the pan.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA strip */}
        <section className="bg-secondary py-16 text-center border-t border-white/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight mb-8">Ready to get out there?</h2>
            <Button asChild size="lg" className="h-16 px-12 bg-primary hover:bg-white hover:text-primary text-white text-xl font-bold uppercase tracking-widest">
              <a href="https://imhookedfishingcharters.com.au/fishing-charter-bookings/#bookings" target="_blank" rel="noreferrer">
                Book Your Charter
              </a>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

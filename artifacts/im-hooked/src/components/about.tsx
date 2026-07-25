import { motion } from 'framer-motion';
import { Anchor, Fish, Sailboat, Users } from 'lucide-react';
import hugeSnapper from '@assets/generated_images/huge-snapper.jpg';

export function About() {
  const stats = [
    { label: "Years Experience", value: "40+", icon: Anchor },
    { label: "Target Species", value: "6+", icon: Fish },
    { label: "Boat Capacity", value: "8 Pax", icon: Users },
    { label: "New Vessel", value: "2026", icon: Sailboat },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black text-secondary mb-6 leading-tight uppercase">
              Meet Mal, Your <br/><span className="text-primary">Local Legend</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary mb-8" />
            
            <div className="space-y-6 text-lg text-secondary/80 font-medium">
              <p>
                I'm Hooked Fishing Charters isn't a massive corporate operation where you're just another number. It's run by Mal — a bloke who has spent more than 40 years learning the tides, reefs, and secrets of Melbourne's waters.
              </p>
              <p>
                Whether we're chasing Snapper in Port Phillip Bay, stalking Whiting in Western Port, or heading offshore into the wild Bass Strait for Tuna and Mako Sharks, the goal is always the same: catching fish and having a bloody good time doing it.
              </p>
              <p>
                Beginners get shown the ropes with patience. Seasoned anglers get put right on the spot. It's your day, we just make it unforgettable.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex flex-col gap-2 p-6 bg-secondary/5 border border-secondary/10"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-2" />
                  <span className="text-3xl font-display font-bold text-secondary">{stat.value}</span>
                  <span className="text-sm font-semibold tracking-wider text-secondary/60 uppercase">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4" />
            <div className="relative aspect-[4/5] w-full bg-secondary overflow-hidden group">
              <img 
                src={hugeSnapper} 
                alt="Fisherman holding massive Snapper"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 w-full p-8">
                <p className="text-white font-display text-2xl font-bold italic">"Nothing beats the thrill of the strike."</p>
                <p className="text-primary font-bold tracking-wider uppercase mt-2">— Mal</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

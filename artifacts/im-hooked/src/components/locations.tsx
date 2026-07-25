import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import bayGoldenHour from '@assets/generated_images/bay-golden-hour.jpg';

export function Locations() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const locations = [
    {
      title: "Port Phillip Bay",
      desc: "Victoria's largest body of water, offering relatively sheltered conditions and sensational fishing. Famous for the annual Snapper run (Oct-Dec), plus excellent year-round catches of Flathead, King George Whiting, Garfish, and Squid."
    },
    {
      title: "Western Port Bay",
      desc: "Defined by its strong tidal currents around French and Phillip Islands. The deeper channels are prime habitat for monster Gummy Sharks, massive Snapper, and thumping King George Whiting."
    },
    {
      title: "Bass Strait",
      desc: "The wild water separating Victoria from Tasmania. Not for the faint-hearted. We head offshore targeting hard-fighting species like Yellowtail Kingfish, Southern Bluefin Tuna, Mako Sharks, and deep reef dwellers."
    }
  ];

  return (
    <section id="locations" className="py-24 md:py-32 bg-background overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative h-[600px] w-full overflow-hidden">
            <motion.img 
              style={{ y: yImage }}
              src={bayGoldenHour} 
              alt="Beautiful sunset over the bay" 
              className="absolute inset-0 w-full h-[120%] object-cover object-center"
            />
            <div className="absolute inset-0 border-4 border-background m-4 mix-blend-overlay" />
          </div>

          <div className="order-1 lg:order-2">
            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-black text-secondary mb-12 uppercase"
            >
              Our <span className="text-primary">Playgrounds</span>
            </motion.h2>

            <div className="space-y-12">
              {locations.map((loc, i) => (
                <motion.div 
                  key={loc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-8 border-l-4 border-primary/20 hover:border-primary transition-colors duration-300 group"
                >
                  <div className="absolute left-[-11px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary/20 group-hover:border-primary transition-colors duration-300" />
                  <h3 className="text-2xl font-display font-bold text-secondary mb-3 uppercase tracking-tight group-hover:text-primary transition-colors">{loc.title}</h3>
                  <p className="text-secondary/70 leading-relaxed font-medium">
                    {loc.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

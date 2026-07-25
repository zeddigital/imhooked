import { motion } from 'framer-motion';
import { Navigation, Coffee, Snowflake, Wind, Shield } from 'lucide-react';
import boatCruising from '@assets/generated_images/boat-cruising.jpg';

export function Boat() {
  const features = [
    { icon: UsersIcon, text: "Room for 8 fishermen comfortably" },
    { icon: Navigation, text: "Twin motors, single hull — handles bay & offshore" },
    { icon: Shield, text: "Large cabin for shelter & comfort" },
    { icon: Wind, text: "Toilet facilities located under cabin" },
    { icon: Snowflake, text: "Massive ice boxes for fish, bait & drinks" },
    { icon: Coffee, text: "Night lights for early morning & late trips" },
  ];

  return (
    <section id="boat" className="py-24 md:py-32 bg-secondary text-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight mb-4">
            The <span className="text-primary">Seaquest 9m</span>
          </h2>
          <p className="text-xl text-primary font-bold tracking-widest uppercase">Brand New 2026 Vessel</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Features Left */}
          <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
            {features.slice(0, 3).map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex lg:justify-end items-center gap-4 text-left lg:text-right group"
              >
                <span className="font-semibold text-white/80 group-hover:text-white transition-colors order-2 lg:order-1 text-lg">{feat.text}</span>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-primary group-hover:bg-primary/20 transition-all shrink-0 order-1 lg:order-2">
                  <feat.icon className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Boat Image Center */}
          <motion.div 
            className="lg:col-span-6 order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img 
              src={boatCruising} 
              alt="2026 Seaquest 9m Boat" 
              className="relative z-10 w-full h-auto object-cover border-4 border-white/10 shadow-2xl"
            />
          </motion.div>

          {/* Features Right */}
          <div className="lg:col-span-3 space-y-8 order-3">
            {features.slice(3, 6).map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex justify-start items-center gap-4 text-left group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-primary group-hover:bg-primary/20 transition-all shrink-0">
                  <feat.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-white/80 group-hover:text-white transition-colors text-lg">{feat.text}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
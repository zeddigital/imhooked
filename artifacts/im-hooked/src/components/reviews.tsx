import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Reviews() {
  const reviews = [
    {
      name: "David T.",
      text: "Absolute legend of a day. Mal knows exactly where the fish are and works harder than anyone to make sure you're reeling them in. Top quality boat, heaps of space, and just a great bloke to spend the day with.",
      stars: 5
    },
    {
      name: "Sarah M.",
      text: "Booked a family trip and it was incredible. Mal was so patient with the kids, showed them how to cast, and they both caught their first snapper. The new boat is spotless and very comfortable.",
      stars: 5
    },
    {
      name: "Pete R.",
      text: "Been on a lot of charters over the years and this is hands down the best. No mucking around, straight to the spots, and we bagged out on Whiting by lunch. Highly recommend the Bass Strait trip if you want real action.",
      stars: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-secondary text-white relative">
      <div className="noise-bg" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center gap-2 mb-6">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-8 h-8 text-primary fill-primary" />
            ))}
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight mb-6">
            Don't Just Take <span className="text-primary">Our Word For It</span>
          </h2>
          <p className="text-xl text-white/70 font-medium">
            We let the fishing do the talking. Here's what our mates have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/5 border border-white/10 p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-white/90 text-lg leading-relaxed flex-grow italic mb-6">
                "{review.text}"
              </p>
              <p className="text-primary font-display font-bold uppercase tracking-wider">
                — {review.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-secondary uppercase font-bold tracking-widest h-14 px-8">
            <a href="https://g.page/r/CZflgfbW6XLfEB4/review" target="_blank" rel="noreferrer">
              Read More on Google
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}

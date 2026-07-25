import { motion } from 'framer-motion';
import heroOcean from '@assets/generated_images/hero-ocean.jpg';
import hugeSnapper from '@assets/generated_images/huge-snapper.jpg';
import bayGoldenHour from '@assets/generated_images/bay-golden-hour.jpg';
import reelingAction from '@assets/generated_images/reeling-action.jpg';
import friendsFishing from '@assets/generated_images/friends-fishing.jpg';

export function Gallery() {
  const images = [
    { src: friendsFishing, colSpan: "col-span-12 md:col-span-8", rowSpan: "row-span-2", alt: "Friends laughing on boat" },
    { src: reelingAction, colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1", alt: "Reeling in a big one" },
    { src: hugeSnapper, colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1", alt: "Massive snapper catch" },
    { src: bayGoldenHour, colSpan: "col-span-12 md:col-span-6", rowSpan: "row-span-1", alt: "Sunset over the bay" },
    { src: heroOcean, colSpan: "col-span-12 md:col-span-6", rowSpan: "row-span-1", alt: "Boat on the ocean" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-secondary uppercase tracking-tight">
              Trophy <span className="text-primary">Room</span>
            </h2>
            <p className="text-secondary/60 mt-2 font-medium text-lg">Smiles, tight lines, and bloody big fish.</p>
          </div>
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noreferrer"
            className="text-primary font-bold uppercase tracking-widest text-sm hover:text-secondary transition-colors mt-4 md:mt-0 flex items-center gap-2"
          >
            Follow on Instagram →
          </a>
        </div>

        <div className="grid grid-cols-12 auto-rows-[250px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${img.colSpan} ${img.rowSpan} group relative overflow-hidden bg-secondary`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

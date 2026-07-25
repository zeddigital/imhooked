import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

import heroOcean from '@assets/generated_images/hero-ocean.jpg';
import hugeSnapper from '@assets/generated_images/huge-snapper.jpg';
import bayGoldenHour from '@assets/generated_images/bay-golden-hour.jpg';
import reelingAction from '@assets/generated_images/reeling-action.jpg';
import friendsFishing from '@assets/generated_images/friends-fishing.jpg';
import boatCruising from '@assets/generated_images/boat-cruising.jpg';
import bayAerial from '@assets/generated_images/bay-golden-hour-aerial.jpg';
import bassStraitStorm from '@assets/generated_images/bass-strait-storm.jpg';
import massiveTuna from '@assets/generated_images/massive-tuna.jpg';
import makoShark from '@assets/generated_images/mako-shark.jpg';
import celebratingCatch from '@assets/generated_images/celebrating-catch.jpg';
import kingfishCatch from '@assets/generated_images/kingfish-catch.jpg';
import snapperSunrise from '@assets/generated_images/snapper-sunrise.jpg';
import westernPortCalm from '@assets/generated_images/western-port-calm.jpg';
import makoRelease from '@assets/generated_images/mako-release.jpg';
import reelingTuna from '@assets/generated_images/reeling-tuna.jpg';

const ALL_IMAGES = [
  { src: massiveTuna, category: 'Bass Strait', alt: 'Massive Southern Bluefin Tuna' },
  { src: hugeSnapper, category: 'Catches', alt: 'Huge Snapper' },
  { src: celebratingCatch, category: 'Catches', alt: 'Celebrating a big catch' },
  { src: bassStraitStorm, category: 'Bass Strait', alt: 'Bass Strait Storm' },
  { src: friendsFishing, category: 'On the Water', alt: 'Friends fishing' },
  { src: kingfishCatch, category: 'Bass Strait', alt: 'Kingfish Catch' },
  { src: snapperSunrise, category: 'Catches', alt: 'Snapper at sunrise' },
  { src: bayGoldenHour, category: 'On the Water', alt: 'Bay at golden hour' },
  { src: boatCruising, category: 'The Boat', alt: 'Boat cruising' },
  { src: makoShark, category: 'Bass Strait', alt: 'Mako Shark' },
  { src: reelingAction, category: 'On the Water', alt: 'Reeling action' },
  { src: bayAerial, category: 'On the Water', alt: 'Aerial view of the bay' },
  { src: westernPortCalm, category: 'On the Water', alt: 'Western Port calm morning' },
  { src: makoRelease, category: 'Bass Strait', alt: 'Mako release' },
  { src: reelingTuna, category: 'Bass Strait', alt: 'Reeling in Tuna' },
  { src: heroOcean, category: 'The Boat', alt: 'Hero Ocean view' },
];

const CATEGORIES = ['All', 'Catches', 'On the Water', 'The Boat', 'Bass Strait'];

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = activeTab === 'All' 
    ? ALL_IMAGES 
    : ALL_IMAGES.filter(img => img.category === activeTab);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-0">
        
        {/* Page Hero */}
        <section className="relative h-[50vh] w-full overflow-hidden bg-secondary flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0 opacity-30 flex flex-wrap">
            {ALL_IMAGES.slice(0, 10).map((img, i) => (
              <div key={i} className="w-1/5 h-1/2 relative">
                <img src={img.src} className="w-full h-full object-cover filter grayscale blur-[2px]" alt="" />
              </div>
            ))}
            <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-100" />
          </div>

          <div className="container relative z-20 mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-display font-black text-white leading-tight tracking-tight uppercase"
            >
              TROPHY <span className="text-primary">ROOM</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 font-medium mt-4 text-xl"
            >
              Smiles, tight lines, and bloody big fish.
            </motion.p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-3 text-sm md:text-base font-bold uppercase tracking-widest transition-colors ${
                    activeTab === cat 
                      ? 'bg-secondary text-white' 
                      : 'bg-white border border-border text-secondary/70 hover:border-secondary hover:text-secondary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry Grid (simulated with CSS columns) */}
            <motion.div 
              layout
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((img, i) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={`${img.src}-${i}`}
                    className="break-inside-avoid relative group cursor-pointer overflow-hidden bg-secondary border border-border"
                    onClick={() => setLightboxImage(img.src)}
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-bold uppercase tracking-widest text-sm border border-white/30 px-4 py-2 backdrop-blur-sm">View</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

        {/* Instagram CTA */}
        <section className="bg-primary py-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-50" />
          <div className="container relative z-10 mx-auto px-6 flex flex-col items-center">
            <Instagram className="w-12 h-12 mb-6" />
            <h2 className="text-3xl font-display font-black uppercase tracking-tight mb-4">Follow the Catch Reports</h2>
            <p className="text-white/80 font-medium mb-8 max-w-lg">We post regular updates, catch reports, and conditions on our Instagram. Give us a follow to see what's biting.</p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors"
            >
              @imhookedcharters
            </a>
          </div>
        </section>

      </main>
      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage} 
              alt="Fullscreen view" 
              className="max-w-full max-h-full object-contain shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Charters } from '@/components/charters';
import { Locations } from '@/components/locations';
import { Boat } from '@/components/boat';
import { Gallery } from '@/components/gallery';
import { Reviews } from '@/components/reviews';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Charters />
        <Locations />
        <Boat />
        <Gallery />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

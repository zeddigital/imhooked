import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <img src="/brand/logo-main.jpg" alt="I'm Hooked Fishing Charters" className="h-16 mb-6" />
            <p className="text-secondary/70 text-lg max-w-md font-medium mb-8">
              Melbourne's friendliest fishing charter. Delivering unforgettable offshore and bay adventures with 40 years of local knowledge.
            </p>
            <div className="flex items-center gap-4">
              <Button asChild className="bg-primary hover:bg-secondary text-white font-bold uppercase tracking-widest h-14 px-8">
                <a href="https://imhookedfishingcharters.com.au/fishing-charter-bookings/#bookings" target="_blank" rel="noreferrer">
                  Book Now
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-secondary text-xl uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:0418769384" className="flex items-center gap-3 text-secondary/80 hover:text-primary font-semibold transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  0418 769 384
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-secondary/80 font-semibold">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>Departing from various locations across Port Phillip & Western Port Bay. Confirmed upon booking.</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-secondary text-xl uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3 font-semibold text-secondary/80">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/charters" className="hover:text-primary transition-colors">Charters Overview</Link></li>
              <li><Link href="/charters/bay" className="hover:text-primary transition-colors">Bay Charters</Link></li>
              <li><Link href="/charters/offshore" className="hover:text-primary transition-colors">Offshore Charters</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Mal</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="https://imhookedfishingcharters.com.au/fishing-charter-bookings/#bookings" target="_blank" rel="noreferrer" className="text-primary hover:text-secondary transition-colors mt-2 block">Book Online</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-secondary/50 text-sm font-medium">
          <p>© {new Date().getFullYear()} I'm Hooked Fishing Charters. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Users, Calendar, MapPin, ArrowLeft, Fish } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import heroImg from '@assets/generated_images/snapper-sunrise.jpg';
import snapperBigImg from '@assets/generated_images/huge-snapper.jpg';
import bayImg from '@assets/generated_images/bay-golden-hour-aerial.jpg';
import friendsImg from '@assets/generated_images/friends-fishing.jpg';

export default function SnapperCharterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itinerary = [
    "Meet at the boat ramp at Carrum or Hastings",
    "Hit the open waters of Port Phillip or Western Port Bay",
    "Search for schools of snapper using Mal's knowledge",
    "Change location if required to find the fish",
    "Head back home with your catch",
  ];

  const toBring = [
    "Sunglasses and hat",
    "Drink bottles of water",
    "Sunscreen lotion",
    "Packed lunch and snacks",
    "Weatherproof jacket and older clothes",
    "Esky in your car (we bag your fish)",
  ];

  const faqs = [
    {
      q: "Do you clean our fish?",
      a: "No, but we will bleed them once caught and have them placed on ice to keep them in the best condition.",
    },
    {
      q: "Do I have to fight the fish by myself?",
      a: "You can take it in turns. Some fish can take time to bring in. We always leave that question to the person on the rod.",
    },
    {
      q: "Do I have to wear a life jacket?",
      a: "When going through Port Phillip heads every person on the boat must wear a life jacket, then it is up to you once we are out of the heads.",
    },
    {
      q: "What size will the fish be?",
      a: "There are limits placed on the minimum size of most fish by the Victorian Fishing Authority. Mal ensures all fish meet legal size requirements.",
    },
    {
      q: "What is the minimum age for children?",
      a: "In the bays, we recommend children aged 5 and above.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-0">

        {/* Page Hero */}
        <section className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden bg-secondary flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-secondary/55 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <img
              src={heroImg}
              alt="Snapper fishing at sunrise"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="container relative z-20 mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 bg-primary/90 text-white px-4 py-1.5 font-bold uppercase tracking-widest text-sm"
            >
              October — December · Peak Season
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black text-white leading-tight tracking-tight uppercase"
            >
              SNAPPER <span className="text-primary">FISHING</span> CHARTERS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto"
            >
              Chase Melbourne's iconic "Reds" with Captain Mal during the most electrifying fishing season of the year.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 text-3xl md:text-4xl font-display font-bold text-white"
            >
              From $200 <span className="text-xl text-white/70 font-sans font-medium">per person</span>
            </motion.div>
          </div>
        </section>

        {/* Back Link */}
        <div className="bg-background border-b border-border">
          <div className="container mx-auto px-6 py-4">
            <Link href="/charters" className="inline-flex items-center gap-2 text-secondary/60 hover:text-primary font-bold uppercase tracking-widest text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Charters
            </Link>
          </div>
        </div>

        {/* Charter Overview */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 font-bold uppercase tracking-widest text-xs mb-6">
                  <Fish className="w-3 h-3" />
                  Melbourne's Most Prized Catch
                </div>
                <h2 className="text-4xl font-display font-black text-secondary uppercase tracking-tight mb-8">
                  The King of <span className="text-primary">the Bay</span>
                </h2>

                <div className="space-y-5 text-lg text-secondary/80 font-medium mb-10">
                  <p>
                    Snapper — known locally as "Reds" — are Melbourne's most celebrated target fish. In season from October to December, they flood into Port Phillip and Western Port in huge numbers, and when conditions are right, Mal takes you straight to them.
                  </p>
                  <p>
                    Mal typically runs three charters per day during peak season and the boat books out well in advance. Early season departures run from Hastings, with the departure point shifting to Carrum as the season progresses — Mal will always confirm your launch point ahead of time.
                  </p>
                  <p>
                    It is common to catch your bag limit on a charter when Mal guides you to his secret spots — knowledge built over 40 years on these waters.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Clock, label: "Duration", value: "Up to 5 hours on the water" },
                    { icon: Users, label: "Capacity", value: "Min 5, max 8 passengers" },
                    { icon: Calendar, label: "Peak Season", value: "October to December" },
                    { icon: MapPin, label: "Departure", value: "Carrum or Hastings (confirmed prior)" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4 p-5 bg-white border border-border">
                      <Icon className="w-7 h-7 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold uppercase tracking-wider text-secondary text-sm mb-1">{label}</h4>
                        <p className="text-secondary/70 font-medium text-sm">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                  <img src={snapperBigImg} alt="Big snapper catch" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 to-transparent p-6">
                    <p className="text-white font-display font-bold text-lg uppercase tracking-wide">"Bag limits are common in peak season"</p>
                  </div>
                </div>
                <div className="relative aspect-[16/7] bg-secondary overflow-hidden">
                  <img src={bayImg} alt="Port Phillip Bay aerial" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Season Highlight */}
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
          <div className="noise-bg" />
          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-3 gap-12">

              <div className="lg:col-span-2 space-y-8">
                <h2 className="text-4xl font-display font-black uppercase tracking-tight">
                  The <span className="text-primary">Snapper Run</span>
                </h2>
                <div className="space-y-5 text-white/80 text-lg font-medium">
                  <p>
                    Each year from October, the snapper run is one of nature's great spectacles off Melbourne's coast. Thousands of big Red fish pour into Port Phillip Bay to feed, creating extraordinary fishing conditions that attract anglers from all over Australia.
                  </p>
                  <p>
                    The peak happens in November, when the water temperature is just right and the fish are feeding aggressively. Double hook-ups are common. A 10kg Snapper on light line is the stuff of legend — and Mal's put plenty of them in the boat.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  {[
                    { month: "October", status: "Season opens", level: "good" },
                    { month: "November", status: "Peak run", level: "peak" },
                    { month: "December", status: "Season winds down", level: "good" },
                  ].map(({ month, status, level }) => (
                    <div
                      key={month}
                      className={`p-6 border ${level === 'peak' ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5'}`}
                    >
                      <p className={`font-display font-black text-xl uppercase mb-1 ${level === 'peak' ? 'text-primary' : 'text-white'}`}>{month}</p>
                      <p className="text-white/60 font-medium text-sm uppercase tracking-wider">{status}</p>
                      {level === 'peak' && (
                        <span className="mt-3 inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-2 py-1">Peak</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8">
                <h3 className="text-2xl font-display font-black uppercase tracking-tight mb-6 text-white">Departure Times</h3>
                <div className="space-y-5">
                  <div className="pb-5 border-b border-white/10">
                    <p className="font-bold uppercase tracking-wider text-primary text-sm mb-1">In Season (Oct–Dec)</p>
                    <p className="text-white font-display font-black text-3xl">5:00 AM</p>
                    <p className="text-white/60 font-medium text-sm mt-1">Early start to hit peak feeding windows</p>
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-wider text-white/50 text-sm mb-1">Off Peak</p>
                    <p className="text-white font-display font-black text-3xl">6:00 AM</p>
                    <p className="text-white/60 font-medium text-sm mt-1">Check schedule when booking</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Itinerary + What to Bring */}
        <section className="py-24 bg-white border-y border-border">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-black text-secondary uppercase tracking-tight mb-8">
                  The <span className="text-primary">Schedule</span>
                </h2>
                <ol className="space-y-4">
                  {itinerary.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-primary text-white font-display font-black text-sm flex items-center justify-center shrink-0">{i + 1}</span>
                      <p className="text-secondary/80 font-medium pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-3xl font-display font-black text-secondary uppercase tracking-tight mb-8">
                  What to <span className="text-primary">Bring</span>
                </h2>
                <ul className="space-y-3">
                  {toBring.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-secondary/80 font-medium">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-6 bg-background border border-border">
                  <p className="text-secondary/70 font-medium text-sm">
                    <span className="font-bold text-secondary">Fishing Licence:</span> Make sure you have a valid Victorian fishing licence before you leave. Available online at{' '}
                    <a href="https://vfa.vic.gov.au/recreational-fishing/fishing-licence" target="_blank" rel="noreferrer" className="text-primary underline">vfa.vic.gov.au</a>.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Gallery strip */}
        <section className="py-0">
          <div className="grid grid-cols-2 md:grid-cols-3 h-[300px] md:h-[400px]">
            <div className="overflow-hidden">
              <img src={friendsImg} alt="Group fishing" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden">
              <img src={snapperBigImg} alt="Big snapper" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden hidden md:block">
              <img src={heroImg} alt="Snapper fishing sunrise" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <h2 className="text-3xl font-display font-black text-secondary uppercase tracking-tight mb-12">
              Common <span className="text-primary">Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white border border-border p-6"
                >
                  <h3 className="font-display font-bold uppercase tracking-tight text-secondary mb-2">{faq.q}</h3>
                  <p className="text-secondary/70 font-medium">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Booking */}
        <section className="py-24 bg-white border-t border-border">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <h2 className="text-4xl font-display font-black text-secondary uppercase tracking-tight mb-4">Book Your Snapper Charter</h2>
            <p className="text-secondary/60 font-medium mb-12 text-lg">Peak season books out fast — secure your spot early.</p>

            <div className="bg-background border border-border p-10 mb-8 max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left w-full md:w-auto">
                <p className="text-secondary/60 font-bold uppercase tracking-widest text-sm mb-2">Snapper Charter</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-display font-black text-secondary">$200</span>
                  <span className="text-secondary/70 font-medium">per person</span>
                </div>
                <ul className="mt-4 space-y-2 text-secondary/80 font-medium">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> All bait & tackle included</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Up to 5 hours on the water</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Fish bled & iced on board</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-auto">
                <Button asChild size="lg" className="h-14 px-10 bg-primary hover:bg-secondary text-white text-lg font-bold uppercase tracking-widest">
                  <a href="https://imhookedfishingcharters.com.au/product/snapper-fishing-charter/" target="_blank" rel="noreferrer">
                    Individual Booking
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-10 border-secondary text-secondary hover:bg-secondary hover:text-white text-lg font-bold uppercase tracking-widest">
                  <a href="https://imhookedfishingcharters.com.au/product/snapper-fishing-charter-book-boat/" target="_blank" rel="noreferrer">
                    Book the Whole Boat
                  </a>
                </Button>
              </div>
            </div>

            <p className="text-secondary/50 font-medium">Minimum 5 people required for a charter to proceed. Maximum 8 people.</p>
            <p className="text-secondary/50 font-medium mt-2">
              Fishing outside peak season?{' '}
              <Link href="/charters/mixed-bag" className="text-primary underline font-bold">Check our Mixed Bag charters →</Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Users, Anchor, ArrowLeft, AlertTriangle } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import heroImg from '@assets/generated_images/bass-strait-storm.jpg';
import tunaImg from '@assets/generated_images/massive-tuna.jpg';
import reelingTunaImg from '@assets/generated_images/reeling-tuna.jpg';
import makoImg from '@assets/generated_images/mako-shark.jpg';
import makoReleaseImg from '@assets/generated_images/mako-release.jpg';
import kingfishImg from '@assets/generated_images/kingfish-catch.jpg';
import boatImg from '@assets/generated_images/boat-cruising.jpg';

export default function TunaCharterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const species = [
    {
      name: "Southern Bluefin Tuna",
      desc: "A true offshore game fish — blistering runs, incredible power, and one of the greatest fights in Australian fishing.",
      image: tunaImg,
    },
    {
      name: "Mako Shark",
      desc: "The ocean's most athletic predator. Known for spectacular aerial displays when hooked — an experience you won't forget.",
      image: makoImg,
    },
    {
      name: "Yellowtail Kingfish",
      desc: "Hard-fighting predators that test your gear and stamina. Targets reefs and structure in the deeper Bass Strait waters.",
      image: kingfishImg,
    },
    {
      name: "Gummy Shark",
      desc: "Superb table fish targeted on the offshore reefs. Excellent eating and a worthy fight on the right tackle.",
      image: null,
    },
  ];

  const toBring = [
    "Sunglasses and hat",
    "Drink bottles of water",
    "Sunscreen lotion",
    "Packed lunch and snacks for a long day",
    "Heavy weatherproof jacket (Bass Strait weather changes fast)",
    "Older clothes you don't mind getting dirty",
    "Sea sickness medication if prone (recommended)",
  ];

  const faqs = [
    {
      q: "Is this suitable for beginners?",
      a: "Offshore fishing is physically demanding. While Mal will guide you through everything, some experience on the water helps. Children must be 12 years or older for offshore charters.",
    },
    {
      q: "What if the weather is bad?",
      a: "Offshore charters are strictly weather dependent. Mal makes the final call on safety 24–48 hours prior to departure. Your safety is always the priority, and a rescheduled charter beats a dangerous one.",
    },
    {
      q: "Do you clean our fish?",
      a: "No, but we will bleed them once caught and have them placed on ice to keep them in the best condition for the journey home.",
    },
    {
      q: "What gear do you use?",
      a: "We use a mixture of skirted lures and hard body lures, plus jigging and bait fishing depending on conditions. All premium heavy-duty tackle is provided.",
    },
    {
      q: "How far offshore do you go?",
      a: "It depends on conditions and where the fish are running. Bass Strait can require a significant run to reach the productive grounds — the longer journey is part of the adventure.",
    },
    {
      q: "Do I need a fishing licence?",
      a: "Yes — a valid Victorian fishing licence is required. Available online at vfa.vic.gov.au before you leave.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-0">

        {/* Page Hero */}
        <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-secondary flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-secondary/65 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <img
              src={heroImg}
              alt="Bass Strait offshore fishing"
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
              Bass Strait · The Ultimate Offshore Experience
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black text-white leading-tight tracking-tight uppercase"
            >
              MELBOURNE <span className="text-primary">TUNA</span> CHARTERS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto"
            >
              Head offshore into Bass Strait to chase Tuna, Mako Shark and Kingfish with one of Melbourne's most experienced offshore captains.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 text-3xl md:text-4xl font-display font-bold text-white"
            >
              From $300 <span className="text-xl text-white/70 font-sans font-medium">per person</span>
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
                <h2 className="text-4xl font-display font-black text-secondary uppercase tracking-tight mb-8">
                  Conquer <span className="text-primary">The Strait</span>
                </h2>

                <div className="space-y-5 text-lg text-secondary/80 font-medium mb-10">
                  <p>
                    Bass Strait separates Victoria from Tasmania — a notoriously wild stretch of open ocean. When conditions align, it delivers some of the most spectacular game fishing found anywhere in Australia.
                  </p>
                  <p>
                    This isn't a casual bay cruise. Heading offshore means early starts, big swells, and serious predators. Mal uses heavy-duty gear and 40 years of offshore knowledge to put you on fish that most anglers never encounter.
                  </p>
                  <p>
                    A lifetime of learning is your secret weapon. Mal will have you picking up all the tricks of the trade — and when the reel screams, you'll know exactly what to do.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Clock, label: "Duration", value: "Up to 8 hours offshore" },
                    { icon: Users, label: "Capacity", value: "Max 8 passengers (12+ years)" },
                    { icon: Anchor, label: "Vessel", value: "Seaquest 9m — purpose built" },
                    { icon: AlertTriangle, label: "Weather", value: "Call made 24–48hrs prior" },
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
                  <img src={tunaImg} alt="Massive tuna catch" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-display font-bold text-lg uppercase tracking-wide italic">"When the reel screams, it's all hands on deck."</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square bg-secondary overflow-hidden">
                    <img src={reelingTunaImg} alt="Reeling in a tuna" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                  </div>
                  <div className="relative aspect-square bg-secondary overflow-hidden">
                    <img src={boatImg} alt="Boat cruising offshore" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Experience — dark section */}
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
          <div className="noise-bg" />
          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-12 gap-16">

              <div className="lg:col-span-7 space-y-8">
                <h2 className="text-4xl font-display font-black uppercase tracking-tight">
                  The <span className="text-primary">Experience</span>
                </h2>
                <div className="space-y-5 text-white/80 text-lg font-medium">
                  <p>
                    It starts with an early morning departure — the hum of twin motors carrying you out through the heads as the sun breaches the horizon over Port Phillip Bay.
                  </p>
                  <p>
                    Once you clear the bay and hit the open strait, the swell changes. The water turns a deep, dark blue. The sounder starts painting a picture of reef systems far below. This is where the adrenaline takes over.
                  </p>
                  <p>
                    Offshore fishing is teamwork, patience, and raw power. Mal will read the conditions, position the boat, and guide you through the technique — but when a Tuna or Mako picks up speed, you've got to bring the muscle.
                  </p>
                  <p>
                    And if you land a big one, Mal will take a photo and put it on his Instagram. Let your mates see what you caught and tell the tale at your next BBQ.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white/5 border border-white/10 p-8 h-full">
                  <Anchor className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-display font-black uppercase tracking-tight mb-2">The Vessel</h3>
                  <p className="text-primary font-bold uppercase tracking-wider text-sm mb-4">Custom Seaquest 9m (2026)</p>
                  <p className="text-white/70 font-medium mb-8">
                    Built for exactly these conditions — Bass Strait demands a serious boat, and the Seaquest 9m delivers.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Deep V Hull — handles offshore swell",
                      "Twin high-horsepower motors",
                      "Advanced sonar & GPS navigation",
                      "Full cabin shelter & enclosed toilet",
                      "Maximum 8 passengers",
                      "All premium heavy-duty tackle provided",
                    ].map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 font-bold uppercase tracking-wider text-sm">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Target Species */}
        <section className="py-24 bg-white border-y border-border">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-black text-secondary uppercase tracking-tight mb-4">
                The <span className="text-primary">Targets</span>
              </h2>
              <p className="text-secondary/60 font-medium text-lg max-w-2xl mx-auto">
                Offshore fishing means serious predators. These fish fight back hard.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {species.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background border border-border flex flex-col h-full group"
                >
                  <div className="h-52 bg-secondary relative overflow-hidden">
                    {s.image ? (
                      <img src={s.image} alt={s.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full bg-secondary flex items-center justify-center">
                        <span className="text-white/20 font-display font-bold uppercase tracking-widest text-sm">Gummy Shark</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-grow flex flex-col gap-3">
                    <div className="w-8 h-0.5 bg-primary" />
                    <h3 className="text-lg font-display font-bold uppercase tracking-tight text-secondary">{s.name}</h3>
                    <p className="text-secondary/70 font-medium leading-relaxed text-sm">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery strip */}
        <section className="py-0">
          <div className="grid grid-cols-3 h-[280px] md:h-[380px]">
            <div className="overflow-hidden col-span-2">
              <img src={makoImg} alt="Mako shark" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden">
              <img src={makoReleaseImg} alt="Mako release" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </section>

        {/* What to Bring */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <h2 className="text-3xl font-display font-black text-secondary uppercase tracking-tight mb-8">
              Come <span className="text-primary">Prepared</span>
            </h2>
            <p className="text-secondary/70 font-medium text-lg mb-8">
              Offshore is a long day in exposed conditions. Being well-prepared means you'll enjoy every moment of it.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {toBring.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-secondary/80 font-medium p-4 bg-white border border-border">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white border-y border-border">
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
                  className="bg-background border border-border p-6"
                >
                  <h3 className="font-display font-bold uppercase tracking-tight text-secondary mb-2">{faq.q}</h3>
                  <p className="text-secondary/70 font-medium">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Booking */}
        <section className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <h2 className="text-4xl font-display font-black text-secondary uppercase tracking-tight mb-4">Ready for the Strait?</h2>
            <p className="text-secondary/60 font-medium mb-12 text-lg">
              Offshore charters book out well in advance. Secure your spot now.
            </p>

            <div className="bg-white border-2 border-primary shadow-xl p-10 mb-8 max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

              <div className="text-left w-full md:w-auto">
                <p className="text-secondary/60 font-bold uppercase tracking-widest text-sm mb-2">Offshore Tuna Charter</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-display font-black text-secondary">From $300</span>
                  <span className="text-secondary/70 font-medium">per person</span>
                </div>
                <ul className="mt-4 space-y-2 text-secondary/80 font-medium">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Premium heavy tackle included</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Up to 8 hours on the water</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Fish bled & iced on board</li>
                </ul>
              </div>

              <Button asChild size="lg" className="w-full md:w-auto h-16 px-12 bg-primary hover:bg-secondary text-white text-xl font-bold uppercase tracking-widest">
                <a href="https://imhookedfishingcharters.com.au/fishing-charter-bookings/#bookings" target="_blank" rel="noreferrer">
                  Book Now
                </a>
              </Button>
            </div>

            <p className="text-secondary/50 font-medium max-w-lg mx-auto">
              Offshore charters are strictly weather dependent. Mal makes the final safety call 24–48 hours prior to departure. Children 12+ only.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

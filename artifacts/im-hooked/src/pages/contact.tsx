import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImg from '@assets/generated_images/boat-cruising.jpg';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  people: z.coerce.number().min(1).max(8, 'Maximum 8 people allowed'),
  charterType: z.string().min(1, 'Please select a charter type'),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      people: 1,
      charterType: '',
      preferredDate: '',
      message: '',
    },
  });

  function onSubmit(values: FormValues) {
    console.log('Form submitted:', values);
    setIsSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow pt-0">
        
        {/* Page Hero */}
        <section className="relative h-[50vh] w-full overflow-hidden bg-secondary flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-secondary/70 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-100" />
            <img 
              src={heroImg} 
              alt="Boat on water" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="container relative z-20 mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-display font-black text-white leading-tight tracking-tight uppercase"
            >
              GET IN <span className="text-primary">TOUCH</span>
            </motion.h1>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-24 bg-background relative z-10 -mt-10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Details */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-10"
              >
                <div>
                  <h2 className="text-3xl font-display font-black text-secondary uppercase tracking-tight mb-4">
                    Let's Go Fishing
                  </h2>
                  <p className="text-secondary/70 font-medium text-lg">
                    Got a question about a charter? Want to check availability? Drop me a line or give me a call directly.
                  </p>
                </div>

                <div className="space-y-8">
                  <a href="tel:0418769384" className="flex items-start gap-5 group">
                    <div className="w-14 h-14 bg-primary flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold uppercase tracking-widest text-sm text-secondary/60 mb-1">Call Mal</h3>
                      <p className="text-3xl font-display font-black text-secondary group-hover:text-primary transition-colors">0418 769 384</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-secondary flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold uppercase tracking-widest text-sm text-secondary/60 mb-1">Departure</h3>
                      <p className="text-lg font-medium text-secondary">Locations vary across Port Phillip & Western Port Bay based on weather and target species. Confirmed upon booking.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-secondary flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold uppercase tracking-widest text-sm text-secondary/60 mb-1">Hours</h3>
                      <p className="text-lg font-medium text-secondary">Charters run year-round, weather permitting. Call anytime for inquiries.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <a href="https://g.page/r/YOUR_GOOGLE_LINK/review" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-secondary transition-colors">
                    Read our Google Reviews →
                  </a>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-border p-8 md:p-12 shadow-xl"
              >
                {isSubmitted ? (
                  <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-display font-black text-secondary uppercase tracking-tight mb-2">Thanks Mate!</h3>
                      <p className="text-secondary/70 font-medium text-lg">Your enquiry has been sent. Mal will be in touch within 24 hours.</p>
                    </div>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-8 font-bold uppercase tracking-widest border-border">
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-display font-black text-secondary uppercase tracking-tight mb-8">Send an Enquiry</h3>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold uppercase tracking-wider text-xs text-secondary/70">Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} className="h-12 bg-background border-border rounded-none focus-visible:ring-primary" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-bold uppercase tracking-wider text-xs text-secondary/70">Email *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@example.com" {...field} className="h-12 bg-background border-border rounded-none focus-visible:ring-primary" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-bold uppercase tracking-wider text-xs text-secondary/70">Phone Number</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="0400 000 000" {...field} className="h-12 bg-background border-border rounded-none focus-visible:ring-primary" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="charterType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-bold uppercase tracking-wider text-xs text-secondary/70">Charter Type *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="h-12 bg-background border-border rounded-none focus:ring-primary">
                                      <SelectValue placeholder="Select charter" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="rounded-none border-border">
                                    <SelectItem value="bay">Bay Charter ($200pp)</SelectItem>
                                    <SelectItem value="offshore">Offshore Charter (From $300pp)</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="people"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-bold uppercase tracking-wider text-xs text-secondary/70">Number of People *</FormLabel>
                                <FormControl>
                                  <Input type="number" min="1" max="8" {...field} className="h-12 bg-background border-border rounded-none focus-visible:ring-primary" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="preferredDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold uppercase tracking-wider text-xs text-secondary/70">Preferred Date (Optional)</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} className="h-12 bg-background border-border rounded-none focus-visible:ring-primary" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold uppercase tracking-wider text-xs text-secondary/70">Message / Questions</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Any special requests or questions..." 
                                  className="min-h-[120px] bg-background border-border rounded-none focus-visible:ring-primary resize-y"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" size="lg" className="w-full h-14 bg-primary hover:bg-secondary text-white font-bold uppercase tracking-widest text-base">
                          Send Enquiry
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </motion.div>

            </div>
          </div>
        </section>

        {/* FAQ Quick Answers */}
        <section className="py-24 bg-white border-y border-border">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <h2 className="text-3xl font-display font-black text-secondary uppercase tracking-tight mb-10 text-center">
              Quick <span className="text-primary">Answers</span>
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-display text-xl text-secondary hover:text-primary transition-colors">Do you require a deposit?</AccordionTrigger>
                <AccordionContent className="text-base text-secondary/70 font-medium">
                  Yes, a deposit is required to secure your booking. The balance is payable on the day of your charter.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-display text-xl text-secondary hover:text-primary transition-colors">What happens if the weather is bad?</AccordionTrigger>
                <AccordionContent className="text-base text-secondary/70 font-medium">
                  If Mal deems the conditions unsafe, your charter will be cancelled and your deposit can be used to reschedule for another date.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-display text-xl text-secondary hover:text-primary transition-colors">Do I need my own gear?</AccordionTrigger>
                <AccordionContent className="text-base text-secondary/70 font-medium">
                  No, we supply all premium rods, reels, tackle, and bait. However, if you have a favorite rod you'd like to use, you're welcome to bring it along.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-secondary relative overflow-hidden">
          <div className="noise-bg" />
          <div className="container relative z-10 mx-auto px-6 py-24 text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-8 opacity-50" />
            <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight mb-6">Departure Locations</h2>
            <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto">
              We depart from various boat ramps across Port Phillip & Western Port Bay to ensure we're closest to where the fish are biting. <br/><br/>
              <span className="text-primary font-bold">Your exact departure point is confirmed when you book.</span>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

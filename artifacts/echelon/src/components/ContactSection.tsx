import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(7, "Phone is required"),
  email: z.string().email("Valid email required"),
  time: z.string().min(1, "Please select a time preference"),
  reason: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      time: "",
      reason: "",
    },
  });

  const onSubmit = async (_data: FormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast({
      title: "Request Submitted",
      description: "Your request has been submitted. We'll be in touch soon!",
    });
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="appointment" className="bg-[#fffbe9] py-16 md:py-24 px-5 md:px-10 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2
            className="font-serif text-[#183e2c] mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Request an Appointment
          </h2>
          <p className="font-sans text-[#414843] text-base md:text-lg max-w-2xl mx-auto">
            Send us your information and we'll follow up to confirm availability. You can also call, email, or visit us inside VitaLive Health and Wellness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left — Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl p-7 md:p-10 border border-[#d4cdc3]/30 shadow-sm"
          >
            <h3 className="font-serif text-xl md:text-2xl text-[#183e2c] mb-7">Book Your Visit</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs font-bold text-[#183e2c]">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className="border-0 border-b border-[#d4cdc3] rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#183e2c] bg-transparent text-base"
                            data-testid="input-name"
                          />
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
                        <FormLabel className="uppercase tracking-widest text-xs font-bold text-[#183e2c]">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(555) 555-5555"
                            {...field}
                            className="border-0 border-b border-[#d4cdc3] rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#183e2c] bg-transparent text-base"
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs font-bold text-[#183e2c]">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            {...field}
                            className="border-0 border-b border-[#d4cdc3] rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#183e2c] bg-transparent text-base"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs font-bold text-[#183e2c]">Preferred Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger
                              className="border-0 border-b border-[#d4cdc3] rounded-none px-0 py-2 focus:ring-0 focus:border-[#183e2c] bg-transparent text-base shadow-none"
                              data-testid="select-time"
                            >
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8am – 12pm)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12pm – 5pm)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase tracking-widest text-xs font-bold text-[#183e2c]">Reason for Visit</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Briefly describe your reason for visiting..."
                          className="resize-none border-0 border-b border-[#d4cdc3] rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#183e2c] bg-transparent text-base min-h-[80px]"
                          {...field}
                          data-testid="textarea-reason"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#183e2c] text-white uppercase tracking-widest text-xs font-bold px-10 py-5 rounded-sm hover:bg-[#002818] h-auto"
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "Submitting..." : "Request Appointment"}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>

          {/* Right — Location & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-5"
            id="location"
          >
            <div className="bg-[#f5f3f3] rounded-2xl p-7 md:p-8 border border-[#d4cdc3]/20 shadow-sm">
              <h3 className="font-serif text-xl md:text-2xl text-[#183e2c] mb-1">Find Us</h3>
              <p className="font-sans text-[#414843] text-sm mb-6">
                Located inside VitaLive Health and Wellness
              </p>

              <div className="space-y-4 mb-7">
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-[#183e2c] text-xl shrink-0 mt-0.5">location_on</span>
                  <div>
                    <p className="font-sans text-[#1b1c1c] font-medium">301 N Main Street</p>
                    <p className="font-sans text-[#414843] text-sm">Dickson, TN 37055</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-[#183e2c] text-xl shrink-0 mt-0.5">phone</span>
                  <a href="tel:615-857-9089" className="font-sans text-[#1b1c1c] font-medium hover:text-[#183e2c] transition-colors">
                    615-857-9089
                  </a>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-[#183e2c] text-xl shrink-0 mt-0.5">mail</span>
                  <a
                    href="mailto:echelonchiropracticdickson@gmail.com"
                    className="font-sans text-[#1b1c1c] font-medium hover:text-[#183e2c] transition-colors"
                    style={{ wordBreak: "break-word" }}
                  >
                    echelonchiropracticdickson@gmail.com
                  </a>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-[#183e2c] text-xl shrink-0 mt-0.5">schedule</span>
                  <div>
                    <p className="font-sans text-[#1b1c1c] font-medium">Monday – Friday</p>
                    <p className="font-sans text-[#414843] text-sm">By Appointment — Online scheduling coming soon</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=301+N+Main+St,+Dickson,+TN+37055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-[#183e2c] text-[#183e2c] uppercase tracking-widest text-xs font-bold px-4 py-3 rounded-sm hover:bg-[#183e2c] hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">directions</span>
                  Get Directions
                </a>
                <a
                  href="tel:615-857-9089"
                  className="inline-flex items-center gap-1.5 bg-[#183e2c] text-white uppercase tracking-widest text-xs font-bold px-4 py-3 rounded-sm hover:bg-[#002818] transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">phone</span>
                  Call Now
                </a>
                <a
                  href="mailto:echelonchiropracticdickson@gmail.com"
                  className="inline-flex items-center gap-1.5 border border-[#d4cdc3] text-[#414843] uppercase tracking-widest text-xs font-bold px-4 py-3 rounded-sm hover:border-[#183e2c] hover:text-[#183e2c] transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                  Email Us
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#d4cdc3]/20 h-[220px] md:h-[260px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.0!2d-87.3793!3d36.0773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886101a2b1f5b1a5%3A0x1234567890abcdef!2s301%20N%20Main%20St%2C%20Dickson%2C%20TN%2037055!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Echelon Chiropractic Location"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

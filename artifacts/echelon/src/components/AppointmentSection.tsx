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
  reason: z.string().optional()
});

type FormValues = z.infer<typeof schema>;

export function AppointmentSection() {
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

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    toast({
      title: "Request Submitted",
      description: "Your request has been submitted. We'll be in touch soon!",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="appointment" className="bg-[#fffbe9] py-32 px-6 md:px-20">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 md:p-16 shadow-lg border border-[#d4cdc3]/20"
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-[#183e2c] mb-4">Request Appointment</h2>
            <p className="font-sans text-[#414843]">
              Send us your information and the office will follow up to confirm availability. Not for emergencies.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                          <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                          <SelectItem value="evening">Evening (4pm - 6pm)</SelectItem>
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
                        className="resize-none border-0 border-b border-[#d4cdc3] rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-[#183e2c] bg-transparent text-base min-h-[100px]"
                        {...field} 
                        data-testid="textarea-reason"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4 text-center">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-[#183e2c] text-white uppercase tracking-widest text-xs font-bold px-10 py-6 rounded-sm hover:bg-[#002818] h-auto"
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Submitting..." : "Request Appointment"}
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}

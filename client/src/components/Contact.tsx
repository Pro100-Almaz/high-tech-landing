import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const mutation = useCreateContactMessage();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: t("contact.success"),
          description: "We'll be in touch with you shortly.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: t("contact.error"),
          description: error.message || "Please try again later.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <section id="contact" className="py-32 relative z-10 overflow-hidden">
      {/* Background glow for contact section */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4">{t("contact.title")}</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t("contact.subtitle")}
            </h3>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              {t("company.description")}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-white font-medium text-lg">{t("company.email")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Global HQ</p>
                  <p className="text-white font-medium text-lg">{t("company.hq")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel rounded-3xl p-8 md:p-10 relative"
          >
            {mutation.isSuccess ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md rounded-3xl z-10 p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle2 className="w-20 h-20 text-cyan-400 mb-6" />
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Received</h4>
                <p className="text-gray-300">Thank you for reaching out. A team member will respond within 24 hours.</p>
                <button 
                  onClick={() => mutation.reset()}
                  className="mt-8 px-6 py-2 rounded-full glass-panel text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : null}

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{t("contact.name")}</label>
                <input 
                  id="name"
                  {...form.register("name")}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                  placeholder="John Doe"
                  disabled={mutation.isPending}
                />
                {form.formState.errors.name && (
                  <p className="text-red-400 text-xs mt-2">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{t("contact.email")}</label>
                <input 
                  id="email"
                  type="email"
                  {...form.register("email")}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                  placeholder="john@company.com"
                  disabled={mutation.isPending}
                />
                {form.formState.errors.email && (
                  <p className="text-red-400 text-xs mt-2">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{t("contact.message")}</label>
                <textarea 
                  id="message"
                  {...form.register("message")}
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/50 transition-all resize-none"
                  placeholder="Tell us about your goals, timeline, and requirements..."
                  disabled={mutation.isPending}
                />
                {form.formState.errors.message && (
                  <p className="text-red-400 text-xs mt-2">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button 
                type="submit"
                disabled={mutation.isPending}
                className="w-full relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {mutation.isPending ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                    {t("contact.sending")}
                  </div>
                ) : (
                  t("contact.send")
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

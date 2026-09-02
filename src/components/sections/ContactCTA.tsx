import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { WHATSAPP_LINK, EMAIL_LINK, CONTACT_EMAIL } from "@/lib/config";
import { Reveal } from "@/components/motion/Reveal";

export function ContactCTA() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 geometric-grid opacity-20" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent"
        animate={reduce ? {} : { opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-gold/30 bg-carbon px-6 py-16 text-center sm:px-12 lg:py-20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

          <span className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
            Start Your Journey
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Become a Cybersecurity Expert?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Reach out today and our team will guide you to the right program
            for your career goals.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? {} : { scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-gold-light hover:shadow-[0_0_32px_-8px_var(--color-gold)] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </motion.a>
            <motion.a
              href={EMAIL_LINK}
              whileHover={reduce ? {} : { scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/30 bg-carbon-light px-8 py-4 text-base font-semibold text-foreground transition-colors hover:border-gold sm:w-auto"
            >
              <Mail className="h-5 w-5 text-gold" />
              {CONTACT_EMAIL}
            </motion.a>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 text-sm text-muted-foreground sm:flex-row">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" />
              <span>Weekend Classes</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              <span>100% Virtual</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

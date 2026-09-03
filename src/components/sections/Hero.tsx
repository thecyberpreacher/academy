import { Shield, MessageCircle, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { WHATSAPP_LINK, EMAIL_LINK } from "@/lib/config";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Brand background */}
      <motion.img
        src="/academy/images/CP_Logo_on_Laptop.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 1.6, ease: EASE }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />

      {/* Geometric background elements */}
      <div className="absolute inset-0 geometric-grid opacity-30" />
      <motion.div
        className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[120px]"
        animate={reduce ? {} : { scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[100px]"
        animate={reduce ? {} : { scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative circuit lines */}
      <motion.svg
        className="absolute inset-0 h-full w-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
      >
        <defs>
          <pattern id="circuit" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M0 60 H60 V120 M60 60 V30 H120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-gold"
            />
            <circle cx="60" cy="60" r="3" className="fill-gold" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </motion.svg>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-carbon px-4 py-1.5"
          >
            <motion.span
              animate={reduce ? {} : { opacity: [1, 0.35, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <Shield className="h-4 w-4 text-gold" />
            </motion.span>
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              Expert-Led Virtual Training
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Build Elite{" "}
            <span className="text-gold text-glow">Cybersecurity</span> &{" "}
            <span className="text-gold text-glow">AI Security</span> Experts
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Weekend-only, hands-on training programs led by masters in offensive
            security, digital forensics, and AI security. Join CyberPreacher
            Academy and set the global standard for cybersecurity excellence.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? {} : { scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-gold-light hover:shadow-[0_0_32px_-8px_var(--color-gold)]"
            >
              <MessageCircle className="h-5 w-5" />
              Enroll via WhatsApp
            </motion.a>
            <motion.a
              href={EMAIL_LINK}
              whileHover={reduce ? {} : { scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/30 bg-carbon px-8 py-4 text-base font-semibold text-foreground transition-colors hover:border-gold hover:bg-carbon-light"
            >
              <Mail className="h-5 w-5 text-gold" />
              Email Us
            </motion.a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
          >
            {["Weekend Classes", "8 Hours/Week", "100% Virtual"].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <motion.div
                  className="h-2 w-2 rounded-full bg-gold"
                  animate={reduce ? {} : { scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { Shield, MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_LINK, EMAIL_LINK } from "@/lib/config";
import heroBg from "@/assets/CP_Logo_on_Laptop.png.asset.json";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Brand background */}
      <img
        src={heroBg.url}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />

      {/* Geometric background elements */}
      <div className="absolute inset-0 geometric-grid opacity-30" />
      <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[100px]" />

      {/* Decorative circuit lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
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
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-carbon px-4 py-1.5">
            <Shield className="h-4 w-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              Expert-Led Virtual Training
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Build Elite{" "}
            <span className="text-gold text-glow">Cybersecurity</span> &{" "}
            <span className="text-gold text-glow">AI Security</span> Experts
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Weekend-only, hands-on training programs led by masters in offensive
            security, digital forensics, and AI security. Join CyberPreacher
            Academy and set the global standard for cybersecurity excellence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-gold-light hover:shadow-[0_0_32px_-8px_var(--color-gold)]"
            >
              <MessageCircle className="h-5 w-5" />
              Enroll via WhatsApp
            </a>
            <a
              href={EMAIL_LINK}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/30 bg-carbon px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-gold hover:bg-carbon-light"
            >
              <Mail className="h-5 w-5 text-gold" />
              Email Us
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-gold" />
              <span>Weekend Classes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-gold" />
              <span>8 Hours/Week</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-gold" />
              <span>100% Virtual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Shield, Lock, Search, Cpu, ArrowRight, Star } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/config";

const programs = [
  {
    icon: Shield,
    title: "Cybersecurity Fundamentals",
    duration: "4 Weeks",
    level: "Foundational",
    topChoice: false,
    description:
      "A fast-paced introduction to core cybersecurity concepts, threat landscapes, risk management, and defensive strategies for beginners and career switchers.",
  },
  {
    icon: Lock,
    title: "Ethical Hacking & Penetration Testing",
    duration: "12 Weeks",
    level: "Advanced",
    topChoice: true,
    description:
      "Intensive hands-on training in reconnaissance, exploitation, post-exploitation, and reporting. Built for aspiring penetration testers and red-team operators.",
  },
  {
    icon: Search,
    title: "Digital Forensics",
    duration: "8 Weeks",
    level: "Intermediate",
    topChoice: false,
    description:
      "Learn to investigate cyber incidents, preserve digital evidence, analyze artifacts, and build defensible forensic reports for law enforcement or enterprise teams.",
  },
  {
    icon: Cpu,
    title: "AI Security",
    duration: "4 Weeks",
    level: "Advanced",
    topChoice: false,
    description:
      "An advanced program covering adversarial machine learning, model security, AI risk governance, and protecting AI systems from real-world attacks.",
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-24 lg:py-32">
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
            Training Programs
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Expert-Led Programs for Every Stage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the path that matches your goals. All programs run on weekends
            with 8 hours of intensive training per week.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.title}
              className={`group relative flex flex-col rounded-2xl border bg-carbon p-6 transition-all hover:-translate-y-1 hover:border-gold/50 hover:bg-carbon-light hover:shadow-[0_0_40px_-16px_var(--color-gold)] ${
                program.topChoice
                  ? "border-gold/60 shadow-[0_0_40px_-20px_var(--color-gold)]"
                  : "border-border"
              }`}
            >
              {program.topChoice && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                  <Star className="h-3 w-3" />
                  Top Choice
                </span>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-carbon-light">
                <program.icon className="h-6 w-6 text-gold" />
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                {program.title}
              </h3>

              <div className="mt-3 flex items-center gap-3">
                <span className="rounded-full bg-gold/10 px-2.5 py-1 text-xs font-medium text-gold">
                  {program.duration}
                </span>
                <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  {program.level}
                </span>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {program.description}
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
              >
                Enquire Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

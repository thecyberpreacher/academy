import { Award, Shield } from "lucide-react";

const founders = [
  {
    name: "Steven Osonuga",
    role: "Founder",
    credentials: ["CISSP", "CEH"],
    bio: "A seasoned cybersecurity professional with deep expertise in offensive security, risk management, and building security-aware organizations.",
  },
  {
    name: "Praise Awowoyin",
    role: "Co-Founder",
    credentials: [],
    bio: "Co-founder driving the academy's mission to make world-class cybersecurity and AI security education accessible across Africa and beyond.",
  },
];

export function Founders() {
  return (
    <section id="founders" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
            Leadership
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built by Practitioners
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            CyberPreacher Academy was founded by professionals committed to
            raising the bar in cybersecurity education.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="relative overflow-hidden rounded-2xl border border-border bg-carbon p-8 text-center transition-all hover:border-gold/50"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/30 bg-carbon-light">
                <span className="font-display text-3xl font-bold text-gold">
                  {founder.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                {founder.name}
              </h3>
              <p className="text-gold font-medium">{founder.role}</p>

              {founder.credentials.length > 0 && (
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {founder.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold"
                    >
                      <Award className="h-3 w-3" />
                      {cred}
                    </span>
                  ))}
                </div>
              )}

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

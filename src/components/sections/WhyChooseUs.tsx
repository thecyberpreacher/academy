import { Award, Monitor, Calendar, Users, BookOpen, FlaskConical } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expert Instructors",
    description:
      "Learn directly from certified professionals who have led real security operations and investigations.",
  },
  {
    icon: FlaskConical,
    title: "Hands-On Labs",
    description:
      "Practice in realistic environments with live exercises, Capture-the-Flag challenges, and case studies.",
  },
  {
    icon: Calendar,
    title: "Weekend Format",
    description:
      "8 hours per week on weekends — intensive enough to transform your skills without quitting your day job.",
  },
  {
    icon: Monitor,
    title: "Fully Virtual",
    description:
      "Join from anywhere in the world. All you need is a laptop, internet, and the drive to master cybersecurity.",
  },
  {
    icon: BookOpen,
    title: "Curriculum Built for the Field",
    description:
      "Content is shaped by current industry demands, not outdated textbooks.",
  },
  {
    icon: Users,
    title: "Peer Network",
    description:
      "Train alongside ambitious professionals and build relationships that last beyond the classroom.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Training That Closes the Skills Gap
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We don't just teach theory. We build practitioners who can defend
            systems, investigate breaches, and secure AI.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-border bg-carbon p-6 transition-all hover:border-gold/30 hover:bg-carbon-light"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-carbon-light">
                <reason.icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

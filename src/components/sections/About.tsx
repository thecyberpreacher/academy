import { Target, Globe, Users, Clock } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const stats = [
  { icon: Users, label: "Expert Instructors", value: "Industry Masters" },
  { icon: Clock, label: "Training Format", value: "Weekends, 8 hrs/week" },
  { icon: Target, label: "Focus Areas", value: "Offensive & AI Security" },
  { icon: Globe, label: "Delivery", value: "Fully Virtual" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              About Us
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Setting the Global Standard for Cybersecurity Excellence
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Founded in 2024 by Steven Osonuga (CISSP, CEH) and co-founded by
              Praise Awowoyin, CyberPreacher Academy exists to build the next
              generation of cybersecurity professionals. We combine real-world
              offensive security experience with cutting-edge AI security
              knowledge to deliver training that actually prepares you for the
              field.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Every program is led by industry experts who have mastered their
              craft. Our weekend-only, virtual format makes elite training
              accessible to working professionals and aspiring specialists
              anywhere in the world.
            </p>
          </Reveal>

          <Stagger className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat) => (
              <StaggerItem
                key={stat.label}
                className="rounded-2xl border border-border bg-carbon p-6 transition-colors hover:border-gold/50 hover:bg-carbon-light"
              >
                <stat.icon className="h-8 w-8 text-gold" />
                <p className="mt-4 font-display text-2xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

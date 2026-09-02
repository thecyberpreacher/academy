import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Founders } from "@/components/sections/Founders";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "CyberPreacher Academy | Cybersecurity & AI Security Training",
      },
      {
        name: "description",
        content:
          "Expert-led, weekend-only virtual training in cybersecurity fundamentals, ethical hacking, digital forensics, and AI security. Founded 2024 by Steven Osonuga.",
      },
      {
        property: "og:title",
        content:
          "CyberPreacher Academy | Cybersecurity & AI Security Training",
      },
      {
        property: "og:description",
        content:
          "Expert-led, weekend-only virtual training in cybersecurity fundamentals, ethical hacking, digital forensics, and AI security.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "CyberPreacher Academy" },
      {
        name: "twitter:description",
        content:
          "Expert-led, weekend-only virtual training in cybersecurity and AI security.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <Founders />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

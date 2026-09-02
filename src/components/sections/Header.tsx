import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/config";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/30 bg-carbon">
            <span className="font-display text-lg font-bold text-gold">CP</span>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            CyberPreacher <span className="text-gold">Academy</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-gold-light hover:shadow-[0_0_24px_-6px_var(--color-gold)]"
          >
            <MessageCircle className="h-4 w-4" />
            Enroll Now
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-carbon text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-b border-border bg-background px-4 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Enroll via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

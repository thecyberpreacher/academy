import { Shield } from "lucide-react";
import { COMPANY_NAME } from "@/lib/config";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-carbon py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-gold/30 bg-background">
              <Shield className="h-4 w-4 text-gold" />
            </div>
            <span className="font-display text-lg font-semibold text-foreground">
              {COMPANY_NAME}
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {year} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
